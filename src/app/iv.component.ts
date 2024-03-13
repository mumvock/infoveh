import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'body[iv-root]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['iv.component.scss'],
    template: `
        <main>
            <router-outlet />
        </main>
    `,
})
export class IvComponent { }