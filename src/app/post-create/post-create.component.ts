import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {


FirstName: string= ' ';
LastName: string= ' ';
imageUrl: string ="assets/image/angular.png";
LoginUser()
{
  this.FirstName && this.LastName;
  {
    console.log("Hello")
  }

}
constructor() { }

ngOnInit() :void {
 }
}
