import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iv-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesComponent {
    protected readonly vehicles = [
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
            showDetails: false
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

    protected toggleDetails(vehicle: typeof this.vehicles[0]): void {
        vehicle.showDetails = !!!vehicle.showDetails; // `!!!` 'cause `showDetails` could be `undefined`
    }
}
