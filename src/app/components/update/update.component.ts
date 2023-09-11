import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/@core/model/user';
import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  val: any;
  users!: Iusers;
  userList!: Iusers[];
  public updateForm!: FormGroup;
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public userService: UserService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    let sub = this.route.params.subscribe((params) => {
      this.val = params['id'];
    });

    console.log(this.val);
    this.userService.getUpdateUser(this.val).subscribe((data) => {
      this.users = data;
    });
  }

  update() {
    this.userService.updateUser(this.users).subscribe((data) => {});
    this.getUsers();
    this.router.navigate(['home']);
  }

  getUsers() {
    this.userService.getUser().subscribe((data) => {
      this.userList = data;
    });
  }
}
