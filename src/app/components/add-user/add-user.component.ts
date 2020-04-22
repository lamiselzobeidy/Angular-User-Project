import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/models/User';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';
  profileForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', Validators.required)
  });
  users: User[];

  constructor(private _userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.users = this._userService.getUsers();
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  onSubmit() {
    this._userService.setUsers(this.profileForm.value);
    this.profileForm.patchValue({
      firstname: '',
      email: '',
      age: ''
    });
    this.profileForm.markAsPristine();
    this.profileForm.markAsUntouched();
    this.profileForm.updateValueAndValidity();
    this._success.next(`${new Date()} - Message successfully changed.`);
  }

}
