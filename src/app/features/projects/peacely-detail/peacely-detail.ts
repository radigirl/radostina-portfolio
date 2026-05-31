import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peacely-detail',
  imports: [RouterLink],
  templateUrl: './peacely-detail.html',
  styleUrl: './peacely-detail.scss',
})
export class PeacelyDetail {
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