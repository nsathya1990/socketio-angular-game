import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('game') gameCanvas: ElementRef;
  context: any;

  socket: SocketIOClient.Socket;

  constructor() {}

  ngOnInit(): void {
    this.socket = io('ws://localhost:3000');
  }

  ngAfterViewInit(): void {
    this.context = this.gameCanvas.nativeElement.getContext('2d');
    this.socket.on('position', (position: { x: number; y: number }) => {
      console.info(position);
      this.context.clearRect(
        0,
        0,
        this.gameCanvas.nativeElement.width,
        this.gameCanvas.nativeElement.height
      );
      this.context.fillRect(position.x, position.y, 20, 20);
    });
  }

  move(direction: string): void {
    this.socket.emit('move', direction);
  }
}
