import { Component, OnInit } from '@angular/core';
import { ApiAccessService, Tweet } from '../shared/api.access.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {

  constructor(private auth:AuthService, private apiAccessService: ApiAccessService){}
  tweet:Tweet[]=[];
  
  ngOnInit(){
    this.apiAccessService.getAllTweet().subscribe((data)=>{

      this.tweet = data;

    })
  }

}
