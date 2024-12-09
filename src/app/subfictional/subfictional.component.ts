import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subfictional',
  templateUrl: './subfictional.component.html',
  styleUrls: ['./subfictional.component.css']
})
export class SubfictionalComponent {
  details:User[]=[];
  constructor(private service:UserService){}
  ngOnInit():void{
    this.click();
  }
  click(){
    this.service.getdetails().subscribe(data=>this.details=data)
  }
}
