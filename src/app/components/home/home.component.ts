import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/@core/model/user';
import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  p: number = 1;
  users: Iusers[] = [];
  name: any;


  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe((data) => {
      this.users = data;
    });
  }

  deleteRow(val: any) {
    console.log(val)
    this.userService.deleteUser(val).subscribe((data) => {});

    this.userService.getUser().subscribe((data) => {
      this.users = data;
    });
  }

  updateRow(id: any) {
    this.router.navigate(['/update', id]);
  }

  search(){
    if(this.name == ''){
      this.ngOnInit();
    }else{
      this.users = this.users.filter((res)=>{
        console.log(res.name?.split(" ")[0].toLocaleLowerCase())
        return res.name?.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  };

  addUser(){
    this.router.navigate(['/add-user']);
  }
}
