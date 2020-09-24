import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SidebarModule } from "ng-sidebar";
import { PostsComponent } from './posts/posts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, PostsComponent, ContactsComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, SidebarModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
