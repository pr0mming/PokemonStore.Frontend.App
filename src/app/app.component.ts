import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { selectUISidebar } from './presentation/store/ui/ui.selectors';
import { UIState } from './presentation/store/ui/ui.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showSidebarObs$: Observable<boolean>;

  constructor(
    private readonly store: Store<UIState>
  ) {

    // Hide sidebar for mobile viewport
    this.showSidebarObs$ = of(false);

  }

  ngOnInit(): void {

    this.showSidebarObs$ = this.store.select(selectUISidebar);

  }

}
