import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'button[iv-button], select[iv-sub-button]',
    template: `
        <span *ngIf="icon">{{ icon }}</span>
        <ng-content></ng-content>
    `,
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf],
    standalone: true,
})
export class ButtonComponent {
    @Input()
    public icon?: string;

    @Input()
    public 'iv-button': string;
}
