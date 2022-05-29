<script lang="ts">
	let hovering = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<!--
  @component
  A lightweight Svelte component to draw SVG on hover.
	- Prerequisite: SVG shape must have `stroke`
	  ```html
		<svg stroke="#000" stroke-width="2">
		  <path />
		</svg>
		```
	- Expose the `hovering` state to the component. (optional)
  - Use `--draw-speed=[number]` to change the speed. (optional)
  - Inline SVG:
		```svelte
		 <HoverDrawSVG>
		   <svg>
		     <path />
		   </svg>
		 </HoverDrawSVG>
		```
  - SVG Component (draw 2x faster than default):
		```svelte
		 <HoverDrawSVG --draw-speed="2">
		   <SvgComponent />
		 </HoverDrawSVG>
		```
	- Nested elements (expose `hovering` status):
		```svelte
		 <HoverDrawSVG let:hovering>
		   <a href="/" class:hoverEffect={hovering}>
		     <svg>
		       <path />
		     </svg>
		   </a>
		 </HoverDrawSVG>
		```
-->
<div on:mouseenter={enter} on:mouseleave={leave} class:draw-on-hover={hovering}>
	<slot {hovering} />
</div>

<style>
	.draw-on-hover {
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: draw calc(15s / var(--draw-speed, 1)) linear alternate infinite;
	}

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}
</style>
