import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'body[iv-root]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['iv.component.scss'],
    template: `
        <nav iv-nav></nav>
        <main>
            <router-outlet />
        </main>
    `,
})
export class IvComponent {}
