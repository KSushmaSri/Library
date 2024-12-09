import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-fictional',
  templateUrl: './fictional.component.html',
  styleUrls: ['./fictional.component.css']
})
export class FictionalComponent {
  details:User[]=[];
  constructor(private service:UserService){}
  ngOnInit():void{
    this.click();
  }
  click(){
    this.service.getdetails().subscribe(data=>this.details=data)
  }
}
