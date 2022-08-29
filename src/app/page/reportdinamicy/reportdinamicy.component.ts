import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TbReportDinamicy } from './../../modal/tbreportdinamicy';
import { TbreportdinamicyService } from './../../services/tbreportdinamicy.service';

@Component({
  selector: 'app-reportdinamicy',
  templateUrl: './reportdinamicy.component.html',
  styleUrls: ['./reportdinamicy.component.css']
})
export class ReportdinamicyComponent implements OnInit {
  tbdata: TbReportDinamicy[] = [];
  error: any;
  wherestr = '';

  constructor(private service: TbreportdinamicyService) { }

  ngOnInit(): void {
    this.getAllData();
    this.wherestr = '';
  }


  // tslint:disable-next-line: typedef
  getAllData(){

    this.tbdata = [];
    // let userTemp = new User();
    this.service.getUserAll().subscribe(
      (data: TbReportDinamicy[]) => {
        this.tbdata = data;
      },
      (error: any) => {
        this.error = error;
      }
    );

  }

  // tslint:disable-next-line: typedef
  onClickSubmit(form: NgForm) {
    console.log(form.value);
    const jsonForm = form.value;
    const jsonForm2 = form.value;
    const encoded: string = btoa(jsonForm);
    let wherestrtemp = '';
    console.log(encoded);
    for (const item in jsonForm) {
       if (jsonForm[item] !== '' && item.substring( 0, 5 ) !== 'sltao'){
          wherestrtemp += item.substring(3, item.length) + ' = ' + jsonForm[item] + ' ';
          // tslint:disable-next-line: forin
          for (const itemsec in jsonForm2) {
            console.log('sltao' + item.substring(3, item.length));
            if (jsonForm2[itemsec] !== '' && itemsec === 'sltao' +  item.substring(3, item.length)){
               wherestrtemp +=  jsonForm2[itemsec] + ' ';
            }
         }
       }
    }

    this.wherestr = 'WHERE ' + wherestrtemp;

  }


/*

UPDATE  dbportfolio.tbreportdinamicy SET label = 'Surname:' WHERE ID = 2

INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(1,0,'name',1,'Name:','DinamicyReport','text','value Defalt name','tb1.');
INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(2,0,'surname',1,'Surname:','DinamicyReport','select','value Defalt surname','tb1.');
INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(6,0,'month',1,'Month:','DinamicyReport','select',',January,February,March,April,May,June,July,
August,September,October,November,December','tb1.');
INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(3,0,'dtregister',1,'Register:','DinamicyReport','date','01/01/2022','tb1.');
INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(4,0,'document',1,'Document:','DinamicyReport','text','value Defalt 04','tb1.');
INSERT INTO `dbportfolio`.`tbreportdinamicy`
(`id`,`ativo`,`fild`,`idcompany`,`label`,`name_report`,`type_fild`,`value_defalt`,`pseudonym`)VALUES
(5,0,'email',1,'Email:','DinamicyReport','text','value Defalt 05','tb1.');


*/

}
