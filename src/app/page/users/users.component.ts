import { Component, OnInit, ViewChild } from '@angular/core';

import {UserService} from '../../services/user.service';
import {User} from '../../modal/user';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService, private fb: FormBuilder) { }

  dataFormGroup: FormGroup;
  // userList : User[];
  userList: User[] = [];
  firstName: any;
  p = 1;
  error: any;

  key = 'name';
  reverse = false;

  @ViewChild('childModal', { static: false }) childModal?: ModalDirective;

  ngOnInit(): void {

      this.getAllData();
      this.dataFormGroup = this.fb.group({
        id: new FormControl('0'),
        idcompany: new FormControl('0'),
        username: new FormControl('', [Validators.required, Validators.minLength(8)]),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        status: new FormControl(''),
        token: new FormControl(''),
        dtregister: new FormControl(''),
        dtlogin: new FormControl(''),
        ativo: new FormControl('SIM'),
        image: new FormControl('')

      });

  }

  // tslint:disable-next-line: typedef
  getAllData(){

      this.userList = [];
      // let userTemp = new User();
      this.userService.getUserAll().subscribe(
        (data: User[]) => {
          this.userList = data;
        },
        (error: any) => {
          this.error = error;
        }
      );

  }

  // tslint:disable-next-line: typedef
  Search(){
    // tslint:disable-next-line: triple-equals
    if (this.firstName == ''){
      this.ngOnInit();
    }else{
      this.userList = this.userList.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }

  // tslint:disable-next-line: typedef
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  // modal controles
  // tslint:disable-next-line: typedef
  getDataFixo(){

      let userAdd = new User();
      userAdd.id = 1;
      userAdd.name = "davi storch";
      userAdd.email = "davistorch@gmail.com.br";
      this.userList.push(userAdd);

      userAdd = new User();
      userAdd.id = 2;
      userAdd.name = "vanderlei";
      userAdd.email = "vanderlei@gmail.com.br";
      this.userList.push(userAdd);

      userAdd = new User();
      userAdd.id = 3;
      userAdd.name = "maria";
      userAdd.email = "maria@gmail.com.br";
      this.userList.push(userAdd);

      userAdd = new User();
      userAdd.id = 4;
      userAdd.name = "antonio";
      userAdd.email = "antonio@gmail.com.br";
      this.userList.push(userAdd);

      userAdd = new User();
      userAdd.id = 5;
      userAdd.name = "carlos";
      userAdd.email = "carlos@gmail.com.br";
      this.userList.push(userAdd);


      userAdd = new User();
      userAdd.id = 6;
      userAdd.name = "kely";
      userAdd.email = "kely@gmail.com.br";
      this.userList.push(userAdd);


      userAdd = new User();
      userAdd.id = 7;
      userAdd.name = "joana";
      userAdd.email = "joana@gmail.com.br";
      this.userList.push(userAdd);


      userAdd = new User();
      userAdd.id = 8;
      userAdd.name = "manoela";
      userAdd.email = "manoela@gmail.com.br";
      this.userList.push(userAdd);


      userAdd = new User();
      userAdd.id = 9;
      userAdd.name = "julia";
      userAdd.email = "julia@gmail.com.br";
      this.userList.push(userAdd);

  }

  showChildModal(): void {
    this.dataFormGroup = this.fb.group({
      id: new FormControl('01'),
      idcompany: new FormControl('01'),
      username: new FormControl('Oliveira', [Validators.required, Validators.minLength(8)]),
      name: new FormControl('Vanderlei teste', Validators.required),
      email: new FormControl('sovanderlei@hotmail.com', Validators.required),
      password: new FormControl('*******', Validators.required),
      status: new FormControl(''),
      token: new FormControl(''),
      dtregister: new FormControl('01/01/2022'),
      dtlogin: new FormControl('01/01/2022'),
      ativo: new FormControl('SIM'),
      image: new FormControl('')

    });
    this.childModal?.show();
  }

  hideChildModal(): void {
    this.childModal?.hide();
  }

  // tslint:disable-next-line: typedef
  addDatas(){


  }
  // fim modal controles


}
