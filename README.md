<h1 align="center">
  <img src="https://drive.google.com/uc?id=1RdqWuFIwbLOLey2p7Dwg3QxKPM4N_LYu" alt="Svelte MultiSelect" width="50px">
  <br class="hide-in-docs">&ensp;Svelte Hover Draw SVG
</h1>

<h4 align="center">
  A lightweight Svelte component to draw SVG on hover.
  <br/>

  <img src="https://drive.google.com/uc?id=1i1BOYb3WuSP5KpIsMoSe9aIH7-T3rzo_" alt="Svelte MultiSelect" width="50%">
</h4>

---

## Install

```bash
npm install --save-dev svelte-hover-draw-svg

yarn add -D svelte-hover-draw-svg

pnpm add -D svelte-hover-draw-svg
```

## Prerequisite: SVG shape must have a `stroke`

```html
<svg stroke="#000" stroke-width="2">
  <path />
</svg>
```

## Options

- Expose the `hovering` state to the component.
- Use `--draw-speed=[number]` to change the speed.

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
