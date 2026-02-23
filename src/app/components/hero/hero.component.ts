import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  private textToType = 'Jeremy Heissenberger';
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;

  ngOnInit(): void {
    this.startTyping();
  }

  private startTyping(): void {
    const element = document.getElementById('typewriter-text');
    if (!element) return;

    let currentIndex = 0;
    let isDeleting = false;
    let currentText = '';

    const type = () => {
      if (isDeleting) {
        currentText = this.textToType.substring(0, currentText.length - 1);
        element.textContent = currentText;
        
        if (currentText === '') {
          isDeleting = false;
          setTimeout(type, this.pauseTime);
          return;
        }
        
        setTimeout(type, this.deletingSpeed);
      } else {
        currentText = this.textToType.substring(0, currentIndex + 1);
        element.textContent = currentText;
        currentIndex++;

        if (currentIndex === this.textToType.length) {
          isDeleting = true;
          setTimeout(type, this.pauseTime);
          return;
        }

        setTimeout(type, this.typingSpeed);
      }
    };

    type();
  }
}
