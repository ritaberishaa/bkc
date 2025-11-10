import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Business Kosova Center';
  currentYear = new Date().getFullYear();
  
  services = [
    {
      title: 'Ngritjen e kapaciteteve dhe burimeve njerezore',
      icon: '👥',
      description: 'Zhvillimi i kapaciteteve profesionale dhe trajnime për ekipet tuaja'
    },
    {
      title: 'Zhvillimi i planit te biznesit',
      icon: '📊',
      description: 'Konsulencë strategjike për zhvillimin e planit të biznesit tuaj'
    },
    {
      title: 'Zhvillimin lokal dhe me gjere',
      icon: '🌍',
      description: 'Mbështetje për zhvillimin lokal dhe ekspansionin e biznesit'
    },
    {
      title: 'Marrëdheniet me publikun dhe komunikimin',
      icon: '💬',
      description: 'Strategji komunikimi dhe marrëdhënie publike profesionale'
    },
    {
      title: 'Zhvillimin ekonomik kombetare dhe nderkombetar',
      icon: '🤝',
      description: 'Konsulencë për zhvillimin ekonomik në nivel kombëtar dhe ndërkombëtar'
    },
    {
      title: 'Komunikimi ne biznes',
      icon: '📞',
      description: 'Trajnime dhe konsulencë për komunikim efektiv në biznes'
    },
    {
      title: 'Komunikimi me institucione',
      icon: '🏛️',
      description: 'Mbështetje për komunikim dhe bashkëpunim me institucione'
    }
  ];
}

