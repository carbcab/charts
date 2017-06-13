import {Component} from "@angular/core";
import {Http} from "@angular/http";
import * as d3 from 'd3';
import {single, multi} from '../common/data';
import { colorSets as ngxChartsColorsets } from '@swimlane/ngx-charts/release/utils/color-sets';

@Component({
  selector: 'consumption ',
  templateUrl: './consumption.component.html',
  styleUrls: ['./consumption.component.css']
})
export class ConsumptionComponent {
  single: any[];
  multi: any[];
  
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }
}