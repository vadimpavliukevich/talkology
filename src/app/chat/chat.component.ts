import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  message = '';
  messages: string[] = [];

  sendMessage() {
    if (this.message.trim()) {
      this.messages.push(this.message);
      this.message = '';
    }
  }
}
