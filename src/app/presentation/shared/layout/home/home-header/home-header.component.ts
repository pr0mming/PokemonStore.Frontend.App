import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { SidebarMenuType } from 'src/app/core/domain/entities/types/sidebar-menu.type';
import { setUISidebarAction } from 'src/app/presentation/store/ui/ui.actions';
import { selectUISidebar } from 'src/app/presentation/store/ui/ui.selectors';
import { UIState } from 'src/app/presentation/store/ui/ui.state';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  menu: SidebarMenuType[] = [];
  showSidebar: boolean;

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

    this.showSidebar = false;

  }

  ngOnInit(): void {
    
    this.store.select(selectUISidebar).subscribe(showSidebar => {
      this.showSidebar = showSidebar;
    });
    
  }

  onShowSidebarClick(): void {

    this.store.dispatch(setUISidebarAction({
      showSidebar: !this.showSidebar
    }))

  }
  
}
