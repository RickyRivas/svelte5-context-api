<script lang="ts">
	import { getToastState } from '$lib/toast-state.svelte';

	let title = $state('');
	let message = $state('');
	let titleInput = $state<HTMLInputElement>();

	const toastState = getToastState();
</script>

<h1>Add Toast</h1>
<form
	onsubmit={(e) => {
		e.preventDefault();
		toastState.add(title, message);
		title = '';
		message = '';
		titleInput?.focus();
	}}
>
	<label for="new-toast-title">
		Title
		<input
			type="text"
			name="new-toast-title"
			bind:value={title}
			bind:this={titleInput}
			id="new-toast-title"
		/>
	</label>
	<label for="new-toast-msg">
		Message
		<input type="text" name="new-toast-msg" bind:value={message} id="new-toast-msg" />
	</label>
	<button>Add</button>
</form>
