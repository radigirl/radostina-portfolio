import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  copyEmail(): void {
    const email = 'radigitl@gmail.com';

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email);
      return;
    }

    const textArea = document.createElement('textarea');
    textArea.value = email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (error) {
      console.error('Email copy failed:', error);
    }

    document.body.removeChild(textArea);
  }
}