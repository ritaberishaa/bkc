# Business Kosova Center - BKC

Faqe informuese profesionale për Business Kosova Center, kompani private e themeluar në vitin 2003 që ofron konsulencë dhe trajnime për biznesin.

## Teknologjitë

- **Angular 17** - Framework për aplikacionin web
- **Tailwind CSS** - Për stilizim dhe dizajn responsive
- **TypeScript** - Për zhvillim tipizuar

## Instalimi

1. Instalo dependencat:
```bash
npm install
```

2. Nise serverin e zhvillimit:
```bash
npm start
```

Aplikacioni do të hapet në `http://localhost:4200`

## Struktura e Projektit

```
src/
├── app/
│   ├── app.component.ts      # Komponenti kryesor
│   ├── app.component.html    # Template me të gjitha seksionet
│   └── app.component.css     # Stilizime shtesë
├── assets/                    # Asetet (imazhet, logo, etj.)
├── index.html                 # HTML kryesor
├── main.ts                    # Entry point
└── styles.css                 # Stilizime globale me Tailwind
```

## Seksionet e Faqes

1. **Hero Section** - Prezantimi kryesor i kompanisë
2. **Rreth Nesh** - Informacion mbi kompaninë
3. **Misioni** - Misioni dhe vlerat e kompanisë
4. **Shërbimet** - Lista e shërbimeve që ofrohen
5. **Kontakt** - Informacion kontakti

## Dizajni

Faqja përdor një dizajn profesional me:
- Ngjyra neutrale (bardhë, gri)
- Layout responsive për të gjitha pajisjet
- Navigim të qetë midis seksioneve
- Tipografi e pastër dhe profesionale

## Shtimi i Aseteve

Kur të keni asetet (logo, imazhe, etj.), vendosini në dosjen `src/assets/` dhe përdorni path-in relativ në template.

## Build për Produksion

```bash
npm run build
```

Fajllat e kompiluar do të jenë në dosjen `dist/bkc/`.
