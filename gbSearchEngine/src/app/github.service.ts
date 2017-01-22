import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id='7e283e3229ee9487bf59';
  private client_secret='2f018c99ac987837f9297289a80b21e9d04bd49a';

  constructor(private _http: Http) {
console.log('github service ready..');
this.username='mmahareddy';
  }
getuser(){
  return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
          .map(res => res.json());
}
getRepos(){
  return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
          .map(res => res.json());
}
updateUser(username: string){
this.username = username;  
}



}
