import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { StoreFeaturesEnum } from 'src/app/core/entities/enums/store-features.enum';
import { uiReducer } from 'src/app/store/ui/ui.reducers';

import { HomeSidebarComponent } from './home-sidebar.component';

describe('HomeSidebarComponent', () => {
  let component: HomeSidebarComponent;
  let fixture: ComponentFixture<HomeSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSidebarComponent ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({[StoreFeaturesEnum.UI]: uiReducer})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
