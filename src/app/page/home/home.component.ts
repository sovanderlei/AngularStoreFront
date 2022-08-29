import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {HelpfulService, Helpful} from '../../services/helpful.service'


declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'AngularStoreFront';
  imgLogo = '';

  constructor(private config : HelpfulService ){

    this.getConfig();

  }


  // tslint:disable-next-line: typedef
  navigateAssociates() {
    window.open(window.location.href+"/login", '_blank');
    // this.router.navigate([]).then(result => {  window.open("login", '_blank'); });
  }

  public ngOnInit()
  {

    $(document).ready(function(){


      $('#btsidebar').click(function(){
          $('.sidebar').toggleClass('fliph');
      });

    });

  }

  getConfig() {
    this.config.getConfig()
      .subscribe((data: Helpful[]) => {
          this.title = data.find(x => x.Key == "NAME_COMPANY").Value;
          this.imgLogo = data.find(x => x.Key == "FILE_LOGO").Value;
      });
  }



}
