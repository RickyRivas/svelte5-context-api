<script>
	import { getToastState } from '$lib/toast-state.svelte';

	let { toast } = $props();

	const toastState = getToastState();
</script>

<div class="toast" data-toast-id={toast.id}>
	<h3>{toast.title}</h3>
	<p>{toast.message}</p>
	<button onclick={() => toastState.remove(toast.id)}>bye bye</button>
</div>

<style>
	.toast {
		border: 1px solid #fff;
	}
</style>
