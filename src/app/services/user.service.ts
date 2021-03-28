import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from '../models/userModel';
import {environment} from '../../environments/environment';
import {ResponseModel} from '../models/responseModel';
//import {FakeFindeksModel} from '../models/fakeFindeksModel';
import {SingleResponseModel} from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string):Observable<UserModel>{
    return this.httpClient.get<UserModel>(this.apiUrl + 'users/email?email='+email);
  }

  profileUpdate(userModel:UserModel):Observable<ResponseModel>{
    console.log(userModel)
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'users/update', {
      userModel:{
        'id': userModel.id,
        'firstName': userModel.firstName,
        'lastName': userModel.lastName,
        'email': userModel.email,
        'status':userModel.status
      },

      password:userModel.password
    });
  }

//  fakeFindeks(findeksModel:FakeFindeksModel):Observable<SingleResponseModel<FakeFindeksModel>>{
  //  return this.httpClient.post<SingleResponseModel<FakeFindeksModel>>(this.apiUrl+'users/getuserfindeks',findeksModel)
//  }

}
