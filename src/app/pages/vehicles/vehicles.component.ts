import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, computed, inject } from '@angular/core';

import VehiclesService from './services/vehicles.service';
import Vehicle from './interfaces/vehicle.interface';

@Component({
  selector: 'iv-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnInit {
    private readonly _vehiclesService  = inject(VehiclesService);
    private readonly _destroyRef       = inject(DestroyRef);

    protected readonly vehicles$$ = this._vehiclesService.vehicles$$;
    protected readonly placeholders$$ = computed(() =>
        Array(this._vehiclesService.loadingVehicles$$())
            .fill(this._vehiclesService.loadingVehicles$$())
    );

    public ngOnInit(): void {
        this._vehiclesService.getVehicles(this._destroyRef);
    }

    protected toggleDetails(vehicle: Vehicle): void {
        vehicle.showDetails = !!!vehicle.showDetails; // `!!!` 'cause `showDetails` could be `undefined`
    }
}
