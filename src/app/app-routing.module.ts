import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "contacts",
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
