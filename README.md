<h1 align="center">
  <img src="https://drive.google.com/uc?id=1RdqWuFIwbLOLey2p7Dwg3QxKPM4N_LYu" alt="Svelte MultiSelect" width="50px">
  <br class="hide-in-docs">&ensp;Svelte Hover Draw SVG
</h1>

<h4 align="center">


  A lightweight Svelte component to draw SVG on hover.

  [![REPL](https://img.shields.io/badge/Svelte-REPL-blue)](https://svelte.dev/repl/d9990fc8a03743d0b03dc95ed50e5893?version=3.48.0)
  [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
  [![NPM version](https://img.shields.io/npm/v/svelte-hover-draw-svg?logo=NPM&color=purple)](https://www.npmjs.com/package/svelte-hover-draw-svg)
  ![npm bundle size](https://img.shields.io/bundlephobia/min/svelte-hover-draw-svg)

  <img src="https://drive.google.com/uc?id=1i1BOYb3WuSP5KpIsMoSe9aIH7-T3rzo_" alt="Svelte MultiSelect" width="50%">
</h4>

---

## Features

- 🪶 Lightweight: Wrapper component with only `svelte` as dev dependency
- 😌 Straightforward: Just put your SVG or component with SVG under the component
- 📦 Encapsulated: No need `on:mouseenter` & `on:mouseleave`. Expose `hovering` for extra hover effects & conditionals
- 🛠 Customizable: CSS variable `--draw-speed` to control draw speed

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

- SVG Component (draw 2x faster than default):

```svelte
<script>
  import HoverDrawSVG from 'svelte-hover-draw-svg';
</script>

<HoverDrawSVG --draw-speed="2">
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

