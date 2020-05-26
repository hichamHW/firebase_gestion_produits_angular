import { Component, OnInit } from '@angular/core';
import { VirusCoronaService } from 'src/app/Services/virus-corona.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent implements OnInit {



  DataALL: any[] = [];

  constructor(private coronaservices: VirusCoronaService) { }

  ngOnInit() {
    console.log('hicham');
    this.getA();
    this.getA();


    console.log(this.DataALL.values);
  }

  getA(){

        this.coronaservices.getAllData().subscribe((data) =>  {
                  this.DataALL = data;
        });


        // tslint:disable-next-line: no-bitwise
        console.log(this.DataALL.values);

  }

}
