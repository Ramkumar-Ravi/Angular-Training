import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  slide_image:any=[{path:"../assets/images/slide_show/image1.png",alt:"paint1"},
  {path:"../assets/images/slide_show/image2.png",alt:"paint2"},
  {path:"../assets/images/slide_show/image3.png",alt:"paint3"},
  {path:"../assets/images/slide_show/image4.png",alt:"paint4"},
  {path:"../assets/images/slide_show/image5.png",alt:"paint5"},
  {path:"../assets/images/slide_show/image6.png",alt:"paint6"},
  {path:"../assets/images/slide_show/image7.png",alt:"paint7"},
  {path:"../assets/images/slide_show/image8.png",alt:"paint8"},
  {path:"../assets/images/slide_show/image9.png",alt:"paint9"},
  {path:"../assets/images/slide_show/image10.png",alt:"paint10"}]
}
