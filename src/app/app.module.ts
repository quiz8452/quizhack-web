import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgMaterialModule } from "./ng-material/ng-material.module";
import { NgxPaginationModule } from "ngx-pagination";
import { BlogComponent } from "./components/blog/blog.component";
import { CommentsComponent } from "./components/comments/comments.component";
import { HomeComponent } from "./components/home/home.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ScrollerComponent } from "./components/scroller/scroller.component";
import { BlogEditorComponent } from "./components/blog-editor/blog-editor.component";
import { BlogCardComponent } from "./components/blog-card/blog-card.component";
import { ExcerptPipe } from "./customPipes/excerpt.pipe";
import { SlugPipe } from "./customPipes/slug.pipe";
import { SocialShareComponent } from "./components/social-share/social-share.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { AuthorProfileComponent } from "./components/author-profile/author-profile.component";
import { AuthGuard } from "./guards/auth.guard";
import { AdminAuthGuard } from "./guards/admin-auth.guard";
import { ShareIconsModule } from "ngx-sharebuttons/icons";
import { ShareButtonsConfig, ShareModule } from "ngx-sharebuttons";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireModule } from "@angular/fire/compat";
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { IntroComponent } from "./components/intro/intro.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DisclaimerComponent } from "./components/disclaimer/disclaimer.component";


const customConfig: ShareButtonsConfig = {
  autoSetMeta: true,
  twitterAccount: "ankitsharma_007",
};

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CommentsComponent,
    HomeComponent,
    NavBarComponent,
    ScrollerComponent,
    BlogEditorComponent,
    BlogCardComponent,
    ExcerptPipe,
    SlugPipe,
    SocialShareComponent,
    PaginatorComponent,
    AuthorProfileComponent,
    VideoComponent,
    FooterComponent,
    HeaderComponent,
    IntroComponent,
    DisclaimerComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    YouTubePlayerModule,
    ShareIconsModule,
    NgxPaginationModule,
    HttpClientModule,
    FontAwesomeModule,
    ShareModule.withConfig(customConfig),
    BrowserModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    CKEditorModule,
    FormsModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      [
        { path: "", component: HomeComponent, pathMatch: "full" },
        { path: "page/:pagenum", component: HomeComponent },
        {
          path: "addpost",
          component: BlogEditorComponent,
          canActivate: [AuthGuard],
        },
        {
          path: "editpost/:id",
          component: BlogEditorComponent,
          canActivate: [AdminAuthGuard],
        },
        {
          path: "disclaimer",
          component: DisclaimerComponent
        },
        { path: "blog/:id/:slug", component: BlogComponent },
        {
          path: "quiz/:id",
          component: BlogCardComponent
        },
        { path: "**", component: HomeComponent },
      ],
      { relativeLinkResolution: "legacy" }
    ),
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
