import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {
box_content:any=[{title:"About",content:"India based Billion Dollor company, Managed in Chennai,Tamilnadu, and incorporated in 46+ countries as a private limited company."},
{title:"Company",content:"The company initially focused on installing third party parts in supercar industry and now we make our own products including Exhaust systems, Twin turbo kits, Superchargers, Race Builds, and custom fabrication."},
{title:"Services",content:"The company first started working on domestic orders and builds. Then we slowly grew in prominence and Expanded to many countries and became the top of the industry in 2019 "}]
}
