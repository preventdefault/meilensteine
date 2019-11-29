<script>
	import { onMount } from 'svelte';
	import Tailwindcss from './Tailwindcss.svelte';

	/**
	 * @type {Map}
	 */
	export let map;

	/**
	 * @type {HTMLElement}
	 */
	let mapContainer;

	onMount(() => {
		map.setTarget(mapContainer);
	});
</script>

<style global>
	@import 'ol/ol.css';
	@import 'normalize.css';
</style>

<Tailwindcss/>

<div class="w-screen h-screen" bind:this={mapContainer}></div>
