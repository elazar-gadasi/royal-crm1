import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent {
  isHidden: boolean = false;

  image: img = {
    url: 'https://cdn.pixabay.com/photo/2022/06/27/18/55/grain-7288138__340.jpg',
    alt: 'תבואה',
  };

  toggle(): boolean {
    return (this.isHidden = !this.isHidden);
  }
}
interface img {
  url: string;
  alt: string;
}
