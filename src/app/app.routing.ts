import { Routes, RouterModule } from '@angular/router';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { ChangelogComponent } from './changelog/changelog.component';
const appRoutes: Routes = [
  // Public layout
  // Private layout
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'changelog',
        component: ChangelogComponent,
      },
      {
        path: '',
        loadChildren: () =>
          import('../app/content/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'changelog' },
];

export const routing = RouterModule.forRoot(appRoutes, {
  scrollOffset: [0, 0],
  scrollPositionRestoration: 'top',
  relativeLinkResolution: 'legacy',
});
