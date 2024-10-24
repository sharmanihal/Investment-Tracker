import { Component, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investments } from '../investment/investment.service';
import { AnnualData } from '../investment/annual_data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

    initialInvestment=signal(0)
    annualInvestment=signal(0)
    expectedReturn=signal(5)
    duration=signal(10)
  constructor(private investment_service:Investments){}

  onSubmit(){
    this.investment_service.calculateInvestmentResults({
      initialInvestment:this.initialInvestment(),
      annualInvestment:this.annualInvestment(),
      duration:this.duration(),
      expectedReturn:this.expectedReturn()
    })


    this.initialInvestment.set(0)
    this.annualInvestment.set(0)
    this.duration.set(10)
    this.expectedReturn.set(5)
  }
}
