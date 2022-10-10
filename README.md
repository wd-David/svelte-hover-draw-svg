<h1 align="center">
  <img src="./assets/logo.svg" alt="Svelte MultiSelect" width="50px">
  <br class="hide-in-docs">&ensp;Svelte Hover Draw SVG
</h1>

<h4 align="center">


  A lightweight Svelte component to draw SVG on hover.

  [![REPL](https://img.shields.io/badge/Svelte-REPL-blue)](https://svelte.dev/repl/d9990fc8a03743d0b03dc95ed50e5893?version=3.48.0)
  [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
  [![NPM version](https://img.shields.io/npm/v/svelte-hover-draw-svg?logo=NPM&color=purple)](https://www.npmjs.com/package/svelte-hover-draw-svg)
  ![npm bundle size](https://img.shields.io/bundlephobia/min/svelte-hover-draw-svg)
  ![CI](https://github.com/davipon/svelte-hover-draw-svg/actions/workflows/ci.yml/badge.svg)
  ![Release](https://github.com/davipon/svelte-hover-draw-svg/actions/workflows/release.yml/badge.svg)
  ![license](https://img.shields.io/github/license/davipon/svelte-hover-draw-svg)

  <img src="./assets/svelte-hover-draw-svg.gif" alt="Svelte MultiSelect" width="50%">
</h4>

---

## Features

- 🤏 Lightweight: Wrapper component with only `svelte` as dev dependency
- 😌 Straightforward: Just put your SVG or component with SVG under the component
- 📦 Encapsulated: Expose `hovering` for extra hover effects & conditionals
- 🛠 Customizable: CSS variable `--duration` to set the duration

> Blog post @hashnode: [Build a Svelte Component To Draw SVG On Hover](https://davipon.hashnode.dev/build-a-svelte-component-to-draw-svg-on-hover)

## Install

```bash
npm install --save-dev svelte-hover-draw-svg

yarn add -D svelte-hover-draw-svg

pnpm add -D svelte-hover-draw-svg
```

## Prerequisite:
SVG shape must have a `stroke`

```html
<svg stroke="#000" stroke-width="2">
  <path />
</svg>
```

> This library works better with "Outlined" SVGs.

## Usage

- Inline SVG:

```svelte
<script>
  import HoverDrawSVG from 'svelte-hover-draw-svg';
</script>

<HoverDrawSVG>
  <svg>
    <path />
  </svg>
</HoverDrawSVG>
```

- SVG Component (set draw time to 2s, default is 1s):

```svelte
<script>
  import HoverDrawSVG from 'svelte-hover-draw-svg';
</script>

<HoverDrawSVG --duration="2">
  <SvgComponent />
</HoverDrawSVG>
```

- Nested elements (expose `hovering` status):

```svelte
<script>
  import HoverDrawSVG from 'svelte-hover-draw-svg';
</script>

<HoverDrawSVG let:hovering>
  <a href="/" class:hoverEffect={hovering}>
    <svg>
      <path />
    </svg>
  </a>
</HoverDrawSVG>
```

