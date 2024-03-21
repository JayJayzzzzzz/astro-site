<div style="margin-top: 2rem;">
    <a href="https://astro.build/" style="margin: 0;"><img align="left" alt="Astro Icon" src="https://icon.icepanel.io/Technology/png-shadow-512/Astro.png" width="80px" height="80px" style="margin-top: -.8rem; margin-right: 1rem"></a>
    <h2 style="font-family: monospace; font-size: 2.5rem;">First Astro Project</h2>
</div>

<br />
<br />

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
