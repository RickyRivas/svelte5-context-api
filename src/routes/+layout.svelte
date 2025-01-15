<script lang="ts">
	import type { Snippet } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';

	let { children }: { children: Snippet } = $props();
</script>

<Navigation />
<main>
	{@render children()}
</main>

<style>
	:global {
		* {
			padding: 0;
			margin: 0;
			box-sizing: border-box;
		}

		body {
			position: relative;
			height: 100vh;
		}
	}
</style>
