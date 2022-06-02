import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  isLoginMode = false;
  error=null;
  //constructor(private authService:AuthService, private route:Router, private afs:AngularFirestore) { }
  constructor(private authService:AuthService, private route:Router) { }

  ngOnInit(){
}
  // onSwitchMode(){
  //   this.isLoginMode = !this.isLoginMode;
  // }

async onSubmit(form:NgForm){
    const email = form.value.username;
    const password = form.value.password;
    console.log(password);
    this.authService.forgotPassword(email, password).subscribe(
          (data)=>{
            console.log(data)
            this.route.navigate(['/login'])
        }, errorResp=>{
            this.error = errorResp.error.message;
            form.reset();

        })
      }
}
