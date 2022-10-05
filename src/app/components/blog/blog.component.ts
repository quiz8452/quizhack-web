import { Component, OnDestroy } from "@angular/core";
import { Post } from "src/app/models/post";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { BlogService } from "src/app/services/blog.service";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { DomSanitizer } from '@angular/platform-browser';
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnDestroy {
  public Editor = ClassicEditor;
  ckeConfig: any;
  postData$: Observable<Post>;
  postId;
  safeUrl;
  videoId = 'XqZsoesa55w';
  private unsubscribe$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private blogService: BlogService, private _sanitizer : DomSanitizer) {
    // this.initializePlayer();
    this.Editor.isReadOnly = true;
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((params: ParamMap) => {
        this.postId = params.get("id");
        let quiz = params.get("quiz");
        this.postData$ = this.blogService.getPostbyId(this.postId, quiz);
      });
      this.setEditorConfig();
  }

  setEditorConfig() {
    this.ckeConfig = {
      removePlugins: ["ImageUpload", "MediaEmbed", "EasyImage"],
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3",
          },
          {
            model: "heading4",
            view: "h4",
            title: "Heading 4",
            class: "ck-heading_heading4",
          },
          {
            model: "heading5",
            view: "h5",
            title: "Heading 5",
            class: "ck-heading_heading5",
          },
          {
            model: "heading6",
            view: "h6",
            title: "Heading 6",
            class: "ck-heading_heading6",
          },
          { model: "Formatted", view: "pre", title: "Formatted" },
        ],
      },
      isReadOnly: true
    };
  }


  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
