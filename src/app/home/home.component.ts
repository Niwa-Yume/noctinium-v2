import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, ViewChild, Inject, HostListener } from '@angular/core';
import { CommonModule, DatePipe, ViewportScroller } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger); //Sert à faire le parallax

interface CustomEvent {
  title: string;
  date: Date;
  venue: string;
  image: string;
  imageSmall: string;
  imageLarge: string;
}

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DatePipe]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('animatedElement') animatedElements!: QueryList<ElementRef>;//sert à faire les animations
  @ViewChild('parallaxBg') parallaxBg!: ElementRef;//sert à faire le parallax
  @ViewChild('events') eventsSection!: ElementRef;
  @ViewChild('batsContainer') batsContainer!: ElementRef;

  events: CustomEvent[] = [
    {
      title: "Noctinium",
      date: new Date('2024-06-15'),
      venue: "Rue de la Coulouvrenière",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      imageSmall: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=90"
    },
    {
      title: "Genève Électro",
      date: new Date('2024-07-22'),
      venue: "Plaine de Plainpalais",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
      imageSmall: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=90"
    },
    {
      title: "Jazz sur le Lac",
      date: new Date('2024-08-05'),
      venue: "Quai du Mont-Blanc",
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
      imageSmall: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=90"
    },
    {
      title: "Festival des Cultures",
      date: new Date('2024-09-10'),
      venue: "Parc des Bastions",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      imageSmall: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=90"
    },
    {
      title: "Nuit des Bains",
      date: new Date('2024-10-03'),
      venue: "Rue des Bains",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      imageSmall: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=90"
    },
    {
      title: "Fête de la Musique",
      date: new Date('2025-06-21'),
      venue: "Place de Neuve",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
      imageSmall: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=90"
    },
    // Nouveaux événements ajoutés
    {
      title: "Soirée Techno Underground",
      date: new Date('2024-11-15'),
      venue: "L'Usine",
      image: "https://images.unsplash.com/photo-1571266028243-e4b4f4a4e38e",
      imageSmall: "https://images.unsplash.com/photo-1571266028243-e4b4f4a4e38e?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1571266028243-e4b4f4a4e38e?w=800&q=90"
    },
    {
      title: "Nuit du Cinéma",
      date: new Date('2024-12-05'),
      venue: "Cinéma Bio",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
      imageSmall: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=90"
    },
    {
      title: "Réveillon Nocturne",
      date: new Date('2024-12-31'),
      venue: "Bâtiment des Forces Motrices",
      image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9",
      imageSmall: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=90"
    },
    {
      title: "Festival d'Hiver",
      date: new Date('2025-01-20'),
      venue: "Parc La Grange",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
      imageSmall: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=90"
    },
    {
      title: "Carnaval Nocturne",
      date: new Date('2025-02-28'),
      venue: "Vieille-Ville",
      image: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f",
      imageSmall: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=400&q=80",
      imageLarge: "https://images.unsplash.com/photo-1551843073-4a9a5b6fcd5f?w=800&q=90"
    }
  ];

  breakpoint: string = 'lg';

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkBreakpoint();
  }

  constructor(@Inject(ViewportScroller) private viewportScroller: ViewportScroller) { }

  ngOnInit() {
    this.checkBreakpoint();
    // Initialisation si nécessaire
  }

  ngAfterViewInit() {
    this.setupInitialAnimation();
    this.setupScrollAnimation();
    this.setupParallaxEffect();
    this.createBats();
  }

  setupInitialAnimation() {
    gsap.from(this.animatedElements.first.nativeElement, {
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: 0.1
    });
  }

  setupScrollAnimation() {
    this.animatedElements.forEach((el, index) => {
      if (index === 0) return; // Skip the first element as it's already animated
      gsap.from(el.nativeElement, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el.nativeElement,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }

  setupParallaxEffect() {
    gsap.to(this.parallaxBg.nativeElement, {
      backgroundPosition: `50% ${innerHeight / 2}px`,
      ease: "none",
      scrollTrigger: {
        trigger: this.parallaxBg.nativeElement,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.jpg'; // Image de remplacement
  }

  scrollToEvents(event?: Event) {
    if (event) {
      event.preventDefault();
    }

    // Utiliser un setTimeout pour s'assurer que le DOM est complètement chargé
    setTimeout(() => {
      const eventsElement = document.getElementById('events');
      if (eventsElement) {
        eventsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback si l'élément n'est pas trouvé
        this.viewportScroller.scrollToAnchor('events-section');
      }
    }, 0);
  }

  checkBreakpoint() {
    const width = window.innerWidth;
    if (width < 640) {
      this.breakpoint = 'xs';
    } else if (width < 768) {
      this.breakpoint = 'sm';
    } else if (width < 1024) {
      this.breakpoint = 'md';
    } else {
      this.breakpoint = 'lg';
    }
  }

  createBats() {
    const container = this.batsContainer.nativeElement;
    const batCount = 10;

    for (let i = 0; i < batCount; i++) {
      const bat = document.createElement('div');
      bat.classList.add('bat');
      bat.style.left = `${Math.random() * 100}vw`;
      bat.style.top = `${Math.random() * 100}vh`;
      bat.style.animationDelay = `${Math.random() * 15}s`;
      container.appendChild(bat);
    }
  }

  getBentoGridClass(index: number): string {
    const classes = [
      'col-span-3 row-span-2', // Premier événement légèrement plus grand
      'col-span-3 row-span-2', // Deuxième événement de même taille
      'col-span-2 row-span-1',
      'col-span-2 row-span-1',
      'col-span-2 row-span-1'
    ];
    return classes[index];
  }
}