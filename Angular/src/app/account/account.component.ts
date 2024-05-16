import { Component } from '@angular/core';
import { AccountHolder } from './account.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountTypes: string[] = ['All', 'Savings', 'BusinessAccount', 'SalaryAccount'];
  selectedAccountType: string = 'All';

  accountHolders: AccountHolder[] = [
    new AccountHolder(123456789, "Sanjay", "Savings", 10000.0, "2024-05-15", "Canara-Bank"),
    new AccountHolder(987654321, "Ram", "BusinessAccount", 20000.0, "2024-05-16", "SBI"),
    new AccountHolder(987994321, "Deva", "SalaryAccount", 40000.0, "2024-08-16", "IndianOverseasBank"),
    new AccountHolder(123456089, "Prakash", "Savings", 15000.0, "2024-06-15", "Canara-Bank"),
    new AccountHolder(987654356, "Pravin", "BusinessAccount", 12000.0, "2024-07-16", "SBI"),
    new AccountHolder(987654334, "Kishore", "SalaryAccount", 4000.0, "2024-04-16", "IndianOverseasBank"),
    new AccountHolder(987654390, "Pradeep", "SalaryAccount", 700.0, "2024-09-16", "IndianOverseasBank"),

  ];

  get filteredAccountHolders(): AccountHolder[] {
    if (this.selectedAccountType === 'All') {
      return this.accountHolders;
    } else {
      return this.accountHolders.filter(holder => holder.typeOfAccount === this.selectedAccountType);
    }
  }

  trackByAccountNumber(index: number, accountHolder: AccountHolder): number {
    return accountHolder.accountNumber;
  }

  getStatus(amount: number): string {
    if (amount >= 500 && amount < 1000) {
      return 'Inactive';
    } else if (amount >= 1000 && amount < 10000) {
      return 'Active';
    } else if (amount >= 10000) {
      return 'Loyal';
    } else {
      return '';
    }
  }
}
