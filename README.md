<a href="https://astro.build/"><img alt="Astro Icon" src="https://icon.icepanel.io/Technology/png-shadow-512/Astro.png" width="100px" height="100px"></a>

# First Astro Project

```sh
git clone git@github.com:JayJayzzzzzz/astro-site.git
```

<br />

## 🚀 Project Structure

```text
/
├── public/
│   └── images/
├── src/
│   └── components/
│       └── Card.astro
│       └── CardsContainer.astro
│       └── Footer.astro
│       └── NavBar.astro
│       └── ThemeToggler.astro
│   └── layouts/
│       └── Blog.astro
│       └── Main.astro
│   └── pages/
│       └── blogs/
│           └── rust-javascript-tooling.md
│           └── sleep-more.md
│           └── typescript-is-the-new-javascript.md
│       └── beyond-tech.md
│       └── index.astro
│       └── philosophies.astro
│       └── work-summary.astro
│   └── styles/
│       └── global.css
│   └── env.d.ts
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
