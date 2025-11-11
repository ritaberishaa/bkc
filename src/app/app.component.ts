import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Business Kosova Center';
  currentYear = new Date().getFullYear();
  
  missionImages = [
    'assets/foto.JPG',
    'assets/foto2.JPG',
    'assets/foto3.JPG',
    'assets/foto4.JPG',
    'assets/foto5.JPG',
    'assets/foto6.JPG'
  ];
  
  currentImageIndex = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.missionImages.length;
  }

  previousImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.missionImages.length) % this.missionImages.length;
  }
  
  services = [
    {
      title: 'Ngritjen e kapaciteteve dhe burimeve njerëzore',
      description: 'Zhvillimi i kapaciteteve profesionale dhe trajnime për ekipet tuaja'
    },
    {
      title: 'Zhvillimi i planit të biznesit',
      description: 'Konsulencë strategjike për zhvillimin e planit të biznesit tuaj'
    },
    {
      title: 'Zhvillimin lokal dhe më të gjerë',
      description: 'Mbështetje për zhvillimin lokal dhe ekspansionin e biznesit'
    },
    {
      title: 'Marrëdheniet me publikun dhe komunikimin',
      description: 'Strategji komunikimi dhe marrëdhënie publike profesionale'
    },
    {
      title: 'Zhvillimin ekonomik kombëtar dhe ndërkombëtar',
      description: 'Konsulencë për zhvillimin ekonomik në nivel kombëtar dhe ndërkombëtar'
    },
    {
      title: 'Komunikimi në biznes',
      description: 'Trajnime dhe konsulencë për komunikim efektiv në biznes'
    }
  ];

  trainings = [
    {
      id: 2,
      image: 'assets/Trajnim2.JPG',
      title: 'Aftësitë Personale dhe Profesionale të Komunikimit',
      date: '17-18 Nëntor 2017',
      description: 'Trajnim i specializuar për zhvillimin e aftësive personale dhe profesionale të komunikimit. Ky trajnim u fokusua në përmirësimin e teknikave të komunikimit në ambiente profesionale dhe personale.',
      why: 'Komunikimi efektiv është themel i suksesit në çdo fushë profesionale. Ky trajnim u organizua për të ndihmuar pjesëmarrësit të zhvillojnë aftësitë e tyre komunikuese, të përmirësojnë marrëdhëniet profesionale dhe të rrisin produktivitetin në vendin e punës.',
      details: 'Trajnimi përfshiu seanca praktike, ushtrime interaktive dhe diskutime në grup për zhvillimin e aftësive të komunikimit verbal dhe joverbal, si dhe teknikat e komunikimit efektiv në ambiente të ndryshme profesionale.'
    },
    {
      id: 3,
      image: 'assets/Trajnim3.JPG',
      title: 'Ndryshimet në Ligjin e Prokurimit dhe Përdorimi i E-Prokurimit',
      date: '9-10 Mars 2018',
      description: 'Trajnim i specializuar për ndryshimet e reja në ligjin e prokurimit dhe implementimin e sistemit të e-prokurimit. Ky trajnim u fokusua në kuptimin e ndryshimeve ligjore dhe përdorimin e teknologjisë për proceset e prokurimit.',
      why: 'Me ndryshimet e reja në legjislacionin e prokurimit dhe futjen e sistemit të e-prokurimit, ishte e nevojshme që institucionet dhe bizneset të informoheshin dhe të trajnoheshin për të përmbushur kërkesat e reja dhe për të përdorur sistemin e ri elektronik në mënyrë efektive.',
      details: 'Trajnimi përfshiu prezantime të detajuara rreth ndryshimeve në ligj, demonstrime praktike të sistemit të e-prokurimit, dhe diskutime rreth sfidave dhe mundësive që sjellin këto ndryshime për institucionet dhe bizneset.'
    },
    {
      id: 1,
      image: 'assets/Trajnim.JPG',
      title: 'Sistemi tatimor në Kosovë dhe ndryshimet që priten të ndodhin në legjislacionin tatimor',
      date: '21-22 Prill 2018',
      description: 'Ky trajnim u organizua për të informuar bizneset dhe profesionistët për sistemin tatimor aktual në Kosovë dhe ndryshimet e pritura në legjislacionin tatimor. Trajnimi u fokusua në kuptimin e detyrueshëm të sistemit tatimor dhe përgatitjen për ndryshimet që do të ndodhnin.',
      why: 'Trajnimi u organizua për të mbështetur bizneset dhe profesionistët në përgatitjen e tyre për ndryshimet në legjislacionin tatimor, duke siguruar që ata të jenë të informuar dhe të përgatitur për të përmbushur detyrimet e tyre tatimore në mënyrë korrekte dhe në kohë.',
      details: 'Trajnimi u mbajt për dy ditë dhe përfshiu diskutime të detajuara rreth sistemit tatimor, ndryshimeve të pritura, dhe praktikave më të mira për përmbushjen e detyrimeve tatimore.'
    }
  ];

  certificationTrainings = [
    {
      id: 6,
      image: 'assets/GDPR.JPG',
      title: 'GDPR - Certified Data Protection Officer',
      date: '5, 6, 7 dhe 9 Nëntor 2018',
      location: 'Hotel Sirius, Prishtinë',
      description: 'Trajnim certifikimi profesional për GDPR (General Data Protection Regulation) dhe certifikim si Data Protection Officer. Ky trajnim u organizua në bashkëpunim me PECB Europe dhe u fokusua në kuptimin dhe implementimin e GDPR për mbrojtjen e të dhënave personale.',
      why: 'GDPR është rregullorja më e rëndësishme e mbrojtjes së të dhënave në Evropë dhe ka ndikim global. Trajnimi u organizua për të përgatitur profesionistët që do të shërbejnë si Data Protection Officers në organizatat e tyre, duke siguruar që ata të kenë njohuritë e nevojshme për të përmbushur kërkesat e GDPR dhe për të mbrojtur të dhënat personale në mënyrë të përshtatshme.',
      details: 'Trajnimi u mbajt për katër ditë (5, 6, 7 dhe 9 Nëntor) në Hotel Sirius, Prishtinë dhe përfshiu mësime të detajuara rreth GDPR, detyrimet ligjore, praktikat më të mira për mbrojtjen e të dhënave, si dhe provim për certifikimin si Data Protection Officer. Trajnimi u organizua në bashkëpunim me PECB Europe.'
    },
    {
      id: 4,
      image: 'assets/ISO9001.JPG',
      title: 'ISO 9001 Lead Implementer - Quality Management',
      date: '3-7 Dhjetor 2018',
      location: 'Hotel Sirius, Prishtinë',
      description: 'Trajnim certifikimi profesional për ISO 9001 Lead Implementer në menaxhimin e cilësisë. Ky trajnim u organizua në bashkëpunim me PECB Europe dhe u fokusua në implementimin e sistemit të menaxhimit të cilësisë sipas standardit ISO 9001.',
      why: 'ISO 9001 është standardi më i njohur botërisht për sistemet e menaxhimit të cilësisë. Trajnimi u organizua për të përgatitur profesionistët që do të implementojnë dhe menaxhojnë sistemet e cilësisë në organizatat e tyre, duke siguruar që ata të kenë njohuritë dhe certifikimin e nevojshëm për të udhëhequr proceset e implementimit.',
      details: 'Trajnimi u mbajt për pesë ditë në Hotel Sirius, Prishtinë dhe përfshiu mësime teorike dhe praktike për implementimin e ISO 9001, si dhe provim për certifikimin si Lead Implementer. Trajnimi u organizua në bashkëpunim me PECB Europe.'
    },
    {
      id: 5,
      image: 'assets/ISO14001.JPG',
      title: 'ISO 14001 Lead Implementer - Environmental Management',
      date: '10-14 Dhjetor 2018',
      location: 'Hotel Sirius, Prishtinë',
      description: 'Trajnim certifikimi profesional për ISO 14001 Lead Implementer në menaxhimin mjedisor. Ky trajnim u organizua në bashkëpunim me PECB Europe dhe u fokusua në implementimin e sistemit të menaxhimit mjedisor sipas standardit ISO 14001.',
      why: 'ISO 14001 është standardi kryesor për sistemet e menaxhimit mjedisor që ndihmon organizatat të menaxhojnë ndikimin e tyre mjedisor. Trajnimi u organizua për të përgatitur profesionistët që do të implementojnë dhe menaxhojnë sistemet e menaxhimit mjedisor, duke siguruar që organizatat të përmbushin kërkesat mjedisore dhe të përmirësojnë performancën e tyre mjedisore.',
      details: 'Trajnimi u mbajt për pesë ditë në Hotel Sirius, Prishtinë dhe përfshiu mësime teorike dhe praktike për implementimin e ISO 14001, si dhe provim për certifikimin si Lead Implementer. Trajnimi u organizua në bashkëpunim me PECB Europe dhe u fokusua në praktikat më të mira për menaxhimin mjedisor.'
    }
  ];
}

