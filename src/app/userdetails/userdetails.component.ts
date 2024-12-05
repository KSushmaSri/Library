import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  user:any
  constructor(private service:UserService,private route:ActivatedRoute){}
  ngOnInit():void {
    const id=Number(this.route.snapshot.paramMap.get('id'))
    this.service.getdetails().subscribe(data=>{this.user=data.find(c=>c.id ===id)})
  }
}
