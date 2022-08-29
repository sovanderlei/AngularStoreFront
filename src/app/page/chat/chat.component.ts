import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  tddataChat = [{id: 1, message: 'mesagem de teste', links: '', dateSend: '01/01/2022 01:00:000'},
  {id: 2, message: 'mesagem de teste', links: '', dateSend: '01/01/2022 01:00:000'}];

  constructor() { }

  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  // tslint:disable-next-line: typedef
  getAllDataChat(){
    this.tddataChat = [];
    this.tddataChat.push({id: 1, message: 'mesagem de teste 1 ', links: '', dateSend: '01/01/2022 01:00:000'},
                          {id: 2, message: 'mesagem de teste 2', links: '', dateSend: '01/01/2022 01:00:000'});
  }

  ngOnInit(): void {
    this.getAllDataChat();
  }

  hideChildModal(): void {
    this.childModal?.hide();
  }

  // tslint:disable-next-line: typedef
  onClickSubmitChat(form: NgForm) {
    console.log(form.value);
    const jsonForm = form.value;
    const textSend = jsonForm.iptSend;
    const codSend = textSend.substring(
      textSend.lastIndexOf('?*') + 2,
      textSend.lastIndexOf('*?')
    );
    this.tddataChat.push({id: 3, message: textSend, links: codSend, dateSend: '01/01/2022 01:00:000'});

  }

  showChildModal(): void {
    this.childModal?.show();
  }


}
