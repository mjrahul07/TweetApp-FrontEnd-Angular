import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { User } from '../auth/auth.model';
import { Router } from '@angular/router';
const headers = new Headers;


export interface ResponseData {
    id: string;
    email: string;
    username: string;
}


export interface Tweet {
    id: string,
    createdDateTime: string,
    username: string,
    message: string,
    noOfLikes: string

}


@Injectable({
    providedIn: 'root'
})
export class ApiAccessService implements OnInit{

    ngOnInit() {
       
    }
    user = new BehaviorSubject<User|null>(null);
    //userData = JSON.parse(localStorage.getItem('userData')!);

    constructor(private http: HttpClient, private route: Router) {

        
        
    }



    createPost(message:string) {
        console.log(JSON.parse(localStorage.getItem('userData')!));
        
        let userData = JSON.parse(localStorage.getItem('userData')!);
        console.log(userData.username);
        return this.http.post<ResponseData>('http://localhost:8080/api/v1.0/tweets/addTweet',
        {
            username: userData.username ,
            message: message,

        })

}

getMyTweet() {
    let userData = JSON.parse(localStorage.getItem('userData')!);
    return this.http.get<Tweet[]>('http://rahul-tweetapp-LB-1583684413.us-east-1.elb.amazonaws.com/api/v1.0/tweets/'+ userData.username);

}

getAllTweet() {
    let userData = JSON.parse(localStorage.getItem('userData')!);
    return this.http.get<Tweet[]>('http://rahul-tweetapp-LB-1583684413.us-east-1.elb.amazonaws.com/api/v1.0/tweets/allTweets/');

}

updateMyTweet(id:string, newMessage:string) {

    console.log(id)
    let userData = JSON.parse(localStorage.getItem('userData')!);
    return this.http.put<Tweet>('http://rahul-tweetapp-LB-1583684413.us-east-1.elb.amazonaws.com/api/v1.0/tweets/updateTweet/' + id,
    {
        username: userData.username,
        message: newMessage
    });



}

deleteTweet(id:string){
    let userData = JSON.parse(localStorage.getItem('userData')!);
    return this.http.delete<any>('http://rahul-tweetapp-LB-1583684413.us-east-1.elb.amazonaws.com/api/v1.0/tweets/'+userData.username +'/deleteTweet/' + id,);

}









}
