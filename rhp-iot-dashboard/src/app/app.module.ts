import 'materialize-css';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CommonModule } from '@angular/common';
import { NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


// top-level 'pages'
import { LoginFrontPageComponent } from './login-front-page/login-front-page.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';
import { BuildingComponent } from './building/building.component';


// services
import { AuthService } from './_services/auth.service';
import { PropertyService } from './_services/property.service';
import { AlertifyService } from './_services/alertify.service';

// guard


// Helpers
import { PropertyMapComponent } from './helpers/property-map/property-map.component';
import { BuildingListComponent } from './helpers/building-list/building-list.component';
import { AlarmNotificationComponent } from './helpers/alarm-notification/alarm-notification.component';
import { IncidentManagementComponent } from './helpers/incident-management/incident-management.component';
import { AlarmModalsComponent } from './helpers/alarm-modals/alarm-modals.component';
import { SearchSideMenuComponent } from './helpers/search-side-menu/search-side-menu.component';
import { MenuComponent } from './helpers/menu/menu.component';
import { SideSliderMenuComponent } from './helpers/side-slider-menu/side-slider-menu.component';
import { FloatingChartComponent } from './helpers/floating-chart/floating-chart.component';
import { TopNavbarComponent } from './helpers/top-navbar/top-navbar.component';
import { SensorTickerComponent } from './helpers/sensor-ticker/sensor-ticker.component';
import { LineChartComponent } from './helpers/line-chart/line-chart.component';


// property
import { ForecastGraphsComponent } from './property/forecast-graphs/forecast-graphs.component';
import { RhpOneGraphsComponent } from './property/rhp-one-graphs/rhp-one-graphs.component';
import { RhpOneTelemetryTickersComponent } from './property/rhp-one-telemetry-tickers/rhp-one-telemetry-tickers.component';
import { RhpTwoGraphsComponent } from './property/rhp-two-graphs/rhp-two-graphs.component';
import { RhpTwoTelemetryTickersComponent } from './property/rhp-two-telemetry-tickers/rhp-two-telemetry-tickers.component';

// 3rd party
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
// import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';
// import { JwtModule } from 'angular2-jwt';


@NgModule({
   declarations: [
      AppComponent,
      LoginFrontPageComponent,
      RegisterComponent,
      DashboardComponent,
      PropertyMapComponent,
      BuildingListComponent,
      AlarmNotificationComponent,
      IncidentManagementComponent,
      AlarmModalsComponent,
      SearchSideMenuComponent,
      MenuComponent,
      SideSliderMenuComponent,
      FloatingChartComponent,
      TopNavbarComponent,
      PropertyComponent,
      ForecastGraphsComponent,
      RhpOneGraphsComponent,
      RhpOneTelemetryTickersComponent,
      RhpTwoGraphsComponent,
      RhpTwoTelemetryTickersComponent,
      SensorTickerComponent,
      LineChartComponent,
      BuildingComponent
      // MaterializeDirective
   ],
   imports: [
      NgbModule.forRoot(),
      BrowserModule,
      HttpModule,
      HttpClientModule,
      FormsModule,
      CommonModule,
      RouterModule.forRoot(appRoutes),
    //   JwtModule.forRoot({
    //     config: {
    //         tokenGetter: tokenGetter,
    //         whitelistedDomains: ['localhost:5000'],
    //         blacklistedroutes: ['localhost:5000/api/auth/register']
    //     }
    //   }),
      AgmCoreModule.forRoot({}),
      AgmJsMarkerClustererModule
      // MaterializeModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      PropertyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
