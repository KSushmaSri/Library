import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  records:User[]=[];
constructor(private service:UserService,private router:Router){}
ngOnInit():void{
  this.service.getdetails().subscribe(data=>this.records=data);
}
userdetails(id:number | undefined){
  this.router.navigate(['/user',id])
}
}
