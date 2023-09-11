import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusers } from 'src/app/@core/model/user';
import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  addForm!: FormGroup;
  userList!: Iusers[];
  constructor(private fb: FormBuilder, private userService: UserService,public router: Router,) {}

  ngOnInit(): void {
    this.buildAddForm();
  }


 checkSpecialCharacters(event : any) {

    this.userService.inputValidation(event);

  }

  buildAddForm() {
    this.addForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      role: ['', Validators.required],
    });
  }

  add() {
    console.log(this.addForm.value);
    this.userService.addUser(this.addForm.value).subscribe((data) => {
      this.getUsers();
      this.router.navigate(['home']);
    });
  }

  getUsers() {
    this.userService.getUser().subscribe((data) => {
      this.userList = data;
    });
  }
}
