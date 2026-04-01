import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plantree-detail',
  imports: [RouterLink],
  templateUrl: './plantree-detail.html',
  styleUrl: './plantree-detail.scss'
})
export class PlantreeDetail {
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}