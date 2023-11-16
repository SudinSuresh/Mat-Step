import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MatStepperModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
  firstStep:boolean = true;
  secondStep:boolean = true;
  thirdStep:boolean = true;

  GoNext(id:any){
    if(id == 0){
      this.firstStep =false;
    }
    else{
      this.secondStep = false;
      this.thirdStep = false;
    }
  }
}
