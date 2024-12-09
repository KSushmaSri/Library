import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcards',
  templateUrl: './subcards.component.html',
  styleUrls: ['./subcards.component.css']
})
export class SubcardsComponent {
  constructor(private router:Router){}
  onclick(){
    this.router.navigate(['/fictional'])
  }
  onclick1(){
    this.router.navigate(['/nonfictional'])
  }
}
