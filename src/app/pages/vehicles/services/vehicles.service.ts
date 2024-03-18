import { HttpEventType } from '@angular/common/http';
import { DestroyRef, EventEmitter, Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, finalize, map, takeUntil, tap } from 'rxjs';

import { VehiclesRepository } from './../../../repositories/vehicles/vehicles.repository';
import Vehicle from '../interfaces/vehicle.interface';

@Injectable()
export default class VehiclesService {
    private readonly _vehiclesRepository = inject(VehiclesRepository);

    private readonly _vehicles$$        = signal<Array<Vehicle>>([]);
    public readonly vehicles$$          = this._vehicles$$.asReadonly();

    private readonly _loadingVehicles$$ = signal<number>(0);
    public readonly loadingVehicles$$   = this._loadingVehicles$$.asReadonly();

    private _requestCompleted$ = new EventEmitter<void>()

    public getVehicles(callerDestroyRef: DestroyRef): void {
        if (this._loadingVehicles$$()) return;

        this._vehiclesRepository
                .requestVehicles$()
                .pipe(
                    takeUntilDestroyed(callerDestroyRef),
                    takeUntil(this._requestCompleted$),
                    tap((event) => {
                        if (event.type === HttpEventType.DownloadProgress) {
                            this._loadingVehicles$$.update((itemsLoaded) => itemsLoaded += 1);
                        }
                    }),
                    filter((event) => event.type === HttpEventType.Response),
                    map((event) => {
                        if (event.type === HttpEventType.Response) {
                            // Typing conversion if it was necessary to assign
                            // or change properties to match the front-end expectations
                            return (event.body || []) as Array<Vehicle>;
                        }

                        return [];
                    }),
                    tap((vehicles) => this._vehicles$$.set(vehicles)),
                    finalize(() => {
                        this._loadingVehicles$$.set(0);
                        this._requestCompleted$.next();
                        this._requestCompleted$.complete();
                    }),
                )
                .subscribe();
    }
}
