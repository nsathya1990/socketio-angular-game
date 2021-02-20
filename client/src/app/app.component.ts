import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  private context: any;
  @ViewChild('game') private gameCanvas: ElementRef;

  // Establishes connection with our socket server
  ngOnInit(): void {}

  // After our HTML renders, we can do interaction with our canvas
  ngAfterViewInit(): void {
    // getContext is a function that exist as part of the canvas
    this.context = this.gameCanvas.nativeElement.getContext("2d");
    // let's add a rectangle
    this.context.fillRect(20, 20, 20, 20);
  }
}
