import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserInputComponent} from './user-input/user-input.component';
import {UserInputModel} from './user-input/user-input.model';
import {InvestmentResultComponent} from './investment-result/investment-result.component';
import {ResultModel} from './result.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investment-calculator';
  investmentResults?: ResultModel[];

  calculateInvestmentResults(data: UserInputModel) {
    const {initialInvestment, annualInvestment, expectedReturn, duration} = data;
    const annualData: ResultModel[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year
      });
    }

    this.investmentResults = annualData;
  }
}
