import {Component, NgModule, OnInit} from '@angular/core'
import * as AuthActions from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import { HeaderModule } from 'src/app/header/header.module';

@Component({
  selector:'app-front',
  templateUrl:'./frontLayout.component.html',
  styleUrls:['./frontLayout.component.css']
})

export class FrontLayoutComponent implements OnInit {
  
    constructor(private store: Store<fromApp.AppState>) {
    
    }
  
    ngOnInit(): void {
      //this.store.dispatch(new AuthActions.CheckIfLoggedIn());
    }
  
    onActivate($event) {
     // window.scroll(0, 0);
    }
}