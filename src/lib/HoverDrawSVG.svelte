<script lang="ts">
	import { onMount } from 'svelte';

	let hovering = false;
	let container: HTMLElement;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}

	onMount(() => {
		container
			.querySelectorAll('line, path, polygon, polyline, rect')
			.forEach((path) => path.setAttribute('pathLength', '1'));
	});
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
  - Use `--duration=[number]` to set the draw time. (default 1s)
  - Inline SVG:
		```svelte
		 <HoverDrawSVG>
		   <svg>
		     <path />
		   </svg>
		 </HoverDrawSVG>
		```
  - SVG Component (draw in 2 seconds):
		```svelte
		 <HoverDrawSVG --duration="2">
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
<div bind:this={container} on:mouseenter={enter} on:mouseleave={leave} class="hover-draw-svg">
	<slot {hovering} />
</div>

<style>
	.hover-draw-svg:hover {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		animation: dash calc(1s * var(--duration, 1)) linear forwards;
	}

	@keyframes dash {
		0% {
			stroke-dashoffset: 1;
		}
		25% {
			stroke-dashoffset: 0.9;
		}
		75% {
			stroke-dashoffset: 0.1;
		}
		100% {
			stroke-dashoffset: 0;
		}
	}
</style>
