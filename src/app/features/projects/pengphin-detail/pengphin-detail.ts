import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pengphin-detail',
  imports: [RouterLink],
  templateUrl: './pengphin-detail.html',
  styleUrl: './pengphin-detail.scss',
})
export class PengphinDetail {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}