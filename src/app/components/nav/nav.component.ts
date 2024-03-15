import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Route, Router, RouterModule } from '@angular/router';

import { IV_ROUTES } from './../../iv-routing.module';

@Component({
    selector: 'nav[iv-nav]',
    standalone: true,
    imports: [NgIf, NgFor, RouterModule, TitleCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./nav.component.scss'],
    templateUrl: 'nav.component.html',
})
export class NavComponent implements OnInit {
    private readonly _router              = inject(Router);
    private readonly _destroyRef          = inject(DestroyRef);

    protected readonly IV_ROUTES          = IV_ROUTES;
    protected readonly currentPath$$      = signal<string>('');

    public ngOnInit(): void {
        this._updateCurrentPath();
    }

    private _updateCurrentPath(): void {
        this._router.events
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe((event) => {
                if (!(event instanceof NavigationEnd)) return;

                const currentPath = event.url
                    .split('/')
                    ?.find((path) => 
                        IV_ROUTES.find((route) => route.path === path));
                
                this.currentPath$$.set(currentPath || '');
            });
    }

    protected parentNavigate(route: Route): void {
        if (route.children && route.children.length) return;

        void this._router.navigate([route.path]);
    }
}