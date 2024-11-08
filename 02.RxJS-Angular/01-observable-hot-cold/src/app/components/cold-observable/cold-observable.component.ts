import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Post {
  id: number;
  title: string;
  content: string;
}
@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss']
})

export class ColdObservableComponent {
  data$!: Observable<Post>;
  //? Inyectos el httpclient
  private http = inject(HttpClient);

  constructor() {
    this.data$ = this.http.get<Post>(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
  }

}
