import { Component } from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
import { HeadService } from '../service/head.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  navigation:string[]=[]
detail1:any={title:"Content",value:"On 24 June 2021 the company creates its own Racing team and won the championship on WRC the same year. This leads the company's to its multi million growth. Now we currently sponsoring more than 10 Leagues and participating in more than 17 Leagues including bigger events like 24Hours of LeMans, WRC, 12Hours of Daytona and Dubai, Pikes of peak, Lamborghini Super Trofeo Series, and NASCAR.   ."}
detail2:any={title:"Subheader",value:"In 2022, the organization has been estimated at the value of 4.6 billion dollars in values, The Racing Programs supports the organization's growth 19%.   "}
constructor(private obj1:HeadService)
{
}
ngOnInit():void{
 this.navigation=this.obj1.getNavigatorValue()
}
}
