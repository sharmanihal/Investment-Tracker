import { Component, computed, inject, input } from '@angular/core';
import { AnnualData } from '../investment/annual_data.model';
import { CurrencyPipe } from '@angular/common';
import { Investments } from '../investment/investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  private investment_service:Investments=inject(Investments)

  annualData= computed(()=>this.investment_service.annualData())
  // annualData= this.investment_service.annualData.asReadonly()
}
