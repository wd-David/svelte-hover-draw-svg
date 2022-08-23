<script lang="ts">
	import HoverDrawSVG from '$lib/HoverDrawSVG.svelte';
	import Candle from '../svg/Candle.svelte';
	import Svelte from '../svg/Svelte.svelte';
</script>

<div style:display="flex">
	<HoverDrawSVG let:hovering>
		<a href="/" style:color={hovering ? 'blue' : 'red'}>
			<svg
				height="50px"
				width="50px"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
				/>
			</svg>
		</a>
	</HoverDrawSVG>
	<HoverDrawSVG --duration="0.5">
		<button>
			<Candle />
		</button>
	</HoverDrawSVG>
	<HoverDrawSVG --duration="1">
		<Svelte />
	</HoverDrawSVG>
</div>
