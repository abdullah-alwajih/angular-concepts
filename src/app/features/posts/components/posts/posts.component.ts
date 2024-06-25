import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {map} from "rxjs";
import {IPost} from "../../models/posts.model";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: IPost[] = [];

  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit() {
  }

  onCreatePost(postData: IPost) {
    // Send Http request
    console.log(postData);
    this.postService.create(postData).subscribe((response) => {
      console.log(response)
    })
  }

  onFetchPosts() {
    this.postService.getList().pipe(
      map(response => Object.keys(response).map(key => ({...response[key], id: key})))
    ).subscribe(response => this.posts = response)
  }

  onClearPosts() {
    // Send Http request
  }
}
