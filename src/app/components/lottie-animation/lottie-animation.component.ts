import { Component, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import lottie from 'lottie-web';


@Component({
  selector: 'app-lottie-animation',
  standalone: true,
  imports: [],
  templateUrl: './lottie-animation.component.html',
  styleUrl: './lottie-animation.component.css'
})
export class LottieAnimationComponent implements AfterViewInit {
  @Input() animationPath:any;
  @ViewChild('animationContainer', { static: true }) animationContainer!: ElementRef;

  ngAfterViewInit(): void {
    lottie.loadAnimation({
      container: this.animationContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: this.animationPath // Path to your animation file
    });
  }
}
