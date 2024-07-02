import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {IPost} from "../../models/posts.model";
import {PostService} from "../../services/post.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: IPost[] = [];
  isLoading = false;
  errorMessage?: string;
  private errorSub?: Subscription

  constructor(
    private postService: PostService
  ) {
  }


  ngOnInit() {
    this.onFetchPosts();
    this.errorSub = this.postService.error.subscribe({
      next: (err: any) => this.errorMessage = err
    })
  }

  onCreatePost(postData: IPost) {
    // Send Http request
    // this.isLoading = true;
    this.postService.create(postData)

  }

  onFetchPosts() {
    this.isLoading = true;
    this.postService.getList().subscribe({
      next: response => this.posts = response,
      error: error => console.log(error),
      complete: () => this.isLoading = false,
    })
  }

  onClearPosts() {
    // Send Http request
    this.postService.delete().subscribe({
      next: _ => this.posts = [],
      error: error => this.errorMessage = error.error.error,
      complete: () => this.isLoading = false,
    });
  }

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe()
  }
}
