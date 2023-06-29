import { Component } from '@angular/core';
import { HeadService } from '../service/head.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navigation:string[]=[]
  //social_media_icons:any=[{path:"../assets/images/social_media/fb.png",alt:"facebook"}]  
  constructor(private obj:HeadService)
  {
  }
  ngOnInit():void
  {
    this.navigation=this.obj.getNavigatorValue()
  }
  
}
