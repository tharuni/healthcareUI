import { KeyValue } from '@angular/common';

import { MAT_COLORS } from '@shared';
import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  NgZone,
} from '@angular/core';
import { SettingsService } from '@core';
import { Subscription } from 'rxjs';
import { PatientDashboardService } from './dashboard.service';

@Component({
  selector: 'app-design-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [PatientDashboardService]

})
export class DesignColorsComponent implements OnInit,AfterViewInit, OnDestroy {
 
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = this.dashboardSrv.getData();
  
    messages = this.dashboardSrv.getMessages();
  
    charts = this.dashboardSrv.getCharts();
    chart1: any;
    chart2: any;
  
    stats = this.dashboardSrv.getStats();
  
    notifySubscription!: Subscription;
  
    constructor(
      private ngZone: NgZone,
      private dashboardSrv: PatientDashboardService,
      private settings: SettingsService
    ) {}
  
    ngOnInit() {
      this.notifySubscription = this.settings.notify.subscribe(res => {
        console.log(res);
      });
    }
  
    ngAfterViewInit() {
      this.ngZone.runOutsideAngular(() => this.initChart());
    }
  
    ngOnDestroy() {
      if (this.chart1) {
        this.chart1?.destroy();
      }
      if (this.chart2) {
        this.chart2?.destroy();
      }
  
      this.notifySubscription.unsubscribe();
    }
  
    initChart() {
      this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
      this.chart1?.render();
      this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
      this.chart2?.render();
    }
  }
  