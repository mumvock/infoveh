import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'body[iv-root]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['iv.component.scss'],
    template: `
        <nav iv-nav></nav>
        <main>
            <router-outlet #routerOutlet="outlet" />

            <div *ngIf="!routerOutlet.isActivated" id="get-started">
                <div class="icon">
                    <span class="arrow"></span>
                </div>
                <p>Click on a link in navigation bar above to get started.</p>
            </div>
        </main>
    `,
})
export class IvComponent {}
