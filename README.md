# Seed of Yggdrasil

A procedural, Norse-inspired RPG character generator. Enter a name and draw a random hero — race, class, weapon, signature skill, attributes, and a short saga fragment — pulled from the roots of the World Tree.

**Live demo:** _add your deployed URL here once you redeploy_

## Features

- Procedural character generation: 6 races and 9 classes, each with its own stat bonuses, weapons, and skills, combined through weighted logic so only lore-consistent race/class pairs appear.
- Six core attributes (Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma) rolled per character and visualized with proportional bars.
- Randomized saga fragments for a bit of narrative flavor on every roll.
- Fully static front end — no build step, no backend, no dependencies.
- Responsive layout, keyboard-accessible form, and a reduced-motion fallback for the reveal animation.

## Tech stack

- HTML5 (semantic structure)
- CSS3 (custom design system with CSS variables — no framework)
- Vanilla JavaScript (ES6+, DOM manipulation, no libraries)

## Project structure

```
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── data.js        # races, classes, and saga text
│   ├── generator.js   # character generation logic
│   └── main.js        # DOM wiring / UI behavior
└── assets/
```

## Running locally

No build tools required. Either:

1. Open `index.html` directly in a browser, or
2. Serve it locally for a cleaner experience:
   ```bash
   npx serve .
   ```

## Deploying

This is a static site, so it deploys as-is to any static host:

- **Vercel:** import the repo at [vercel.com/new](https://vercel.com/new) — no configuration needed.
- **Netlify:** drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect the repo.

## Author

**Franco Lescano** — [GitHub](https://github.com/LescanoFranco123)
