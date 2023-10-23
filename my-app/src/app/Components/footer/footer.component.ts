import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  downloadItCv() {
    const fileUrl = 'assets/CV/Valerio Pirolli CV.pdf';
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.setAttribute('download', 'Valerio Pirolli CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  downloadEnCv() {
    const fileUrl = 'assets/CV/Valerio Pirolli CV-EN.pdf';
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.setAttribute('download', 'Valerio Pirolli CV-EN.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
