import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent {
  @Input()
  pageSizeOptions: [];

  @Input()
  config: any;

  constructor(private router: Router) {}

  pageChange(newPage: number) {
    this.router.navigate(["/quiz/" + this.findPage(sessionStorage.getItem("quiz")) + "/", newPage]);
  }

  findPage(quiz:string) {
    return quiz == 'amazon' ? "Amazon" : "Flipkart";
  }

  changePageItemCount(selectedItem) {
    sessionStorage.setItem("pageSize", selectedItem.value);
    this.config.itemsPerPage = selectedItem.value;
  }
}
