import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.css']
})
export class ChatClientComponent implements OnInit {

  swhodiv = '';
  tbdados = [
    {id: '01', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'I cant find my glasses and I cant see anything. Can you help me find a few things?'},
    {id: '02', idmspai: '0', msnstatus: 'receive' , msnname: 'Davi', message: 'No problem. What are you looking for?' },
    {id: '03', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'My laptop, do you see it?' },
    {id: '04', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'Yes, your laptop is on the chair.' },
    {id: '05', idmspai: '0', msnstatus: 'receive' , msnname: 'Davi', message: 'Theres a pencil in front of the lamp.' },
    {id: '06', idmspai: '0', msnstatus: 'receive' , msnname: 'Davi', message: 'How about my backpack? Do you know where that is?' },
    {id: '07', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'That chair over there, but please be careful with it. It was a gift from my mother-in-law.' },
    {id: '08', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'Youre moving now? I knew you were moving, but I thought you said you were moving next month.' },
  ];

  constructor() { }


  ngOnInit(): void {

    this.tbdados.push({id: '09', idmspai: '0', msnstatus: 'sent' , msnname: 'Vanderlei', message: 'Youre moving now? I knew you were moving, but I thought you said you were moving next month.' });
    this.divShowHidden();
    this.swhodiv = '';

  }

  divShowHidden(): void {
    document.getElementById('divChatBoxBody').style.visibility = 'hidden';
    document.getElementById('divChatBoxFoot').style.visibility = 'hidden';
  }

  handleChatClickTitle(): void {

      const obDivchat = document.getElementById('divchat');
      const obdivChatBoxFoot = document.getElementById('divChatBoxFoot');
      const obdivChatBoxBody = document.getElementById('divChatBoxBody');
      if (obDivchat.style.height === '600px'){
            obDivchat.style.height = '80px';
            obdivChatBoxFoot.style.visibility = 'hidden';
            obdivChatBoxBody.style.visibility = 'hidden';
            this.swhodiv = '';
      }else{
            obDivchat.style.height = '600px';
            obdivChatBoxFoot.style.visibility = 'visible';
            obdivChatBoxBody.style.visibility = 'visible';
            this.swhodiv = '';
      }

  }





}
