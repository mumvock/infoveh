import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'iv-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehiclesComponent {

}
