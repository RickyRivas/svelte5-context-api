<script lang="ts">
	import { setToastState } from '$lib/toast-state.svelte';
	import type { Snippet } from 'svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Toaster from '$lib/components/Toaster.svelte';

	let { children }: { children: Snippet } = $props();

	setToastState();
</script>

<Navigation />
<Toaster />
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
