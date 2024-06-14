import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Posts } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private apiService: ApiService) {}

  getPosts = (url: string): Observable<Posts> => {
    return this.apiService.get(url, { responseType: 'json' });
  };
}
