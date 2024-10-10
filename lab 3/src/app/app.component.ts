import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Калькулятор середніх значень</h1>
      <label>Введіть перше число:</label>
      <input type="number" [(ngModel)]="number1" placeholder="Перше число" class="input-field">
      <br>
      <label>Введіть друге число:</label>
      <input type="number" [(ngModel)]="number2" placeholder="Друге число" class="input-field">
      <br><br>
      <button (click)="calculate()" class="calculate-button">Обчислити</button>
      <div class="result">
        <h2>Середнє арифметичне кубів: {{ arithmeticMean.toFixed(4) }}</h2>
        <h2>Середнє геометричне модулів: {{ geometricMean.toFixed(4) }}</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 400px;
      margin: 20px auto;
      padding: 20px;
      border-radius: 8px;
      background-color: #f0f8ff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 {
      font-family: Arial, sans-serif;
      color: #333;
    }
    label {
      font-weight: bold;
      font-family: Arial, sans-serif;
    }
    .input-field {
      width: 100%;
      padding: 10px;
      margin-top: 8px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
    .calculate-button {
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    .calculate-button:hover {
      background-color: #45a049;
    }
    .result {
      margin-top: 20px;
      font-family: Arial, sans-serif;
      color: #333;
    }
  `]
})
export class AppComponent {
  number1: number = 0;
  number2: number = 0;
  arithmeticMean: number = 0;
  geometricMean: number = 0;

  calculate() {
    const cube1 = Math.pow(this.number1, 3);
    const cube2 = Math.pow(this.number2, 3);
    this.arithmeticMean = (cube1 + cube2) / 2;

    const abs1 = Math.abs(this.number1);
    const abs2 = Math.abs(this.number2);
    this.geometricMean = Math.sqrt(abs1 * abs2);
  }
}