 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
   firstInput = 0;
  secondInput =0;
  operator = "+"
  placeholder = "enter number...."
  ans = 0
  constructor() { }
  onClick = (inputValue: HTMLInputElement) => {
    this.firstInput = parseInt(inputValue.value)
    switch (this.operator) {
      case "+":
        this.ans =this.firstInput + this.secondInput
        break;
      case "-":
        this.ans = this.firstInput - this.secondInput
        break
      case "*":
        this.ans = this.firstInput * this.secondInput
        break
      case "/":
        this.ans = this.firstInput / this.secondInput
        break
      default:
        break;
    }
    console.log(this.ans);

  }
  ngOnInit(): void {
  }

}
