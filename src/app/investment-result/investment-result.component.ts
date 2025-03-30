import {Component, Input} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {ResultModel} from '../result.model';

@Component({
  selector: 'app-investment-result',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input() result?: ResultModel[];
}
