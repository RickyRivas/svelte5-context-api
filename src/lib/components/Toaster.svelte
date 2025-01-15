<script lang="ts">
	import { getToastState } from '$lib/toast-state.svelte';
	import Toast from './Toast.svelte';

	const toastState = getToastState();
</script>

<div id="toaster">
	{#each toastState.toasts as toast}
		<Toast {toast} />
	{/each}
</div>

<style>
	#toaster {
		display: block;
		position: fixed;
		top: 0;
		right: 0;
		padding: 1em;
		height: 100vh;
		background-color: slateblue;
	}
</style>
