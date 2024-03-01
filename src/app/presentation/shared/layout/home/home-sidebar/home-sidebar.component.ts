import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SidebarMenuType } from 'src/app/core/domain/entities/types/sidebar-menu.type';
import { setUISidebarAction } from 'src/app/presentation/store/ui/ui.actions';
import { UIState } from 'src/app/presentation/store/ui/ui.state';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.scss']
})
export class HomeSidebarComponent {

  menu: SidebarMenuType[] = [];

  constructor(
    private readonly store: Store<UIState>
  ) {

    this.menu = [
      {
        text: 'Home',
        routerLink: '/home'
      },
      {
        text: 'Checkout',
        routerLink: '/checkout'
      },
      {
        text: 'Historial',
        routerLink: '/history'
      },
      {
        text: 'Administración',
        routerLink: '/administration'
      }
    ];

  }

  onMenuClick(): void {

    this.store.dispatch(setUISidebarAction({
      showSidebar: false
    }));

  }

}
