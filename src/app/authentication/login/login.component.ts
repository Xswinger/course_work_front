import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User!: FormGroup

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.User = this.formBuilder.group({
      login: '',
      password: '',
      status: 0
    })
  }

  ngOnInit(): void {
  }

  onEntry() {
    if (this.User.value.status == 1) {
      localStorage.setItem('status', 'sportsman')
    } else {
      localStorage.setItem('status', 'coach')
    }
    this.router.navigateByUrl('/home')
  }

}
