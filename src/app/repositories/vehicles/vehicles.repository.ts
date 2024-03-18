import { HttpEvent, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, delay, from, of, take } from 'rxjs';

import VehicleResponse from './interfaces/vehicles-response.interface';

const MOCKED_VEHICLES: Array<VehicleResponse> = [
    {
        id: 0,
        adm: {
            plate: 'DFG3J92',
            chassi: '9BWSU19F08B302185',
            renavam: '00981351941',
        },
        brand: 'Audi',
        model: 'A3',
        specs: {
            engine: '1.8 T',
        },
        factoryYear: 2001,
        modelYear: 2002,
    },
    {
        id: 1,
        adm: {
            plate: 'OZA9F45',
            chassi: '8GGSU19F08Z302122',
            renavam: '44953911901',
        },
        brand: 'Fiat',
        model: 'Argo',
        specs: {
            engine: '1.0',
        },
        factoryYear: 2020,
        modelYear: 2021,
    },
    {
        id: 1,
        adm: {
            plate: 'OZA9F45',
            chassi: '8GGSU19F08Z302122',
            renavam: '44953911901',
        },
        brand: 'Fiat',
        model: 'Argo',
        specs: {
            engine: '1.0',
        },
        factoryYear: 2020,
        modelYear: 2021,
    },
    {
        id: 1,
        adm: {
            plate: 'OZA9F45',
            chassi: '8GGSU19F08Z302122',
            renavam: '44953911901',
        },
        brand: 'Fiat',
        model: 'Argo',
        specs: {
            engine: '1.0',
        },
        factoryYear: 2020,
        modelYear: 2021,
    },
    {
        id: 1,
        adm: {
            plate: 'OZA9F45',
            chassi: '8GGSU19F08Z302122',
            renavam: '44953911901',
        },
        brand: 'Fiat',
        model: 'Argo',
        specs: {
            engine: '1.0',
        },
        factoryYear: 2020,
        modelYear: 2021,
    }
];

@Injectable({
    providedIn: 'root'
})
export class VehiclesRepository {

    public requestVehicles$(): Observable<HttpEvent<Array<VehicleResponse>>> {
        const MOCKED_HTTPEVENT_RESPONSES: Array<HttpEvent<Array<VehicleResponse>>> = [
            {
                type: HttpEventType.DownloadProgress,
                loaded: 1
            },
            {
                type: HttpEventType.DownloadProgress,
                loaded: 2
            },
            {
                type: HttpEventType.DownloadProgress,
                loaded: 3
            },
            {
                type: HttpEventType.DownloadProgress,
                loaded: 4
            },
            {
                type: HttpEventType.Response,
                body: MOCKED_VEHICLES,
                headers: new HttpHeaders(),
                clone: () => ({}) as HttpResponse<Array<VehicleResponse>>,
                ok: true,
                status: 200,
                url: '',
                statusText: 'ok'
            },
        ];

        return from(MOCKED_HTTPEVENT_RESPONSES)
            .pipe(
                take(5),
                concatMap(event =>
                    of(event).pipe(delay(1000))
                ),
            );
    }
}
