import { DatePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [DatePipe],
})
export class HomeComponent {

  date:string;

  constructor(datePipe :DatePipe) {
    this.date = datePipe.transform(
      Date.now(),
      "MM-dd-yyyy HH:mm"
    )
  }
}
