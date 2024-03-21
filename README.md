{:refdef: style="width: 80px; height: 80px"}
[![Astro Icon](https://icon.icepanel.io/Technology/png-shadow-512/Astro.png)](https://astro.build/)
{: refdef}

# First Astro Project

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

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
