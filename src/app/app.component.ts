import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { AnnualData } from './investment/annual_data.model';
import { Investments } from './investment/investment.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent]
})
export class AppComponent {
}
