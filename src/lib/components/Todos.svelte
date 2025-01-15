<script>
	import { fly } from 'svelte/transition';

	let todos = $state([
		{
			id: 1,
			todo: 'make more todos',
			done: false
		}
	]);

	let finishedTodos = $derived(todos.filter((t) => t.done).length);
</script>

<p>{finishedTodos} Finished todos.</p>
<p>{(console.log('updating'), finishedTodos)} todos done</p>
<p>{todos.length} Total Todos</p>

<ul>
	{#each todos as todo, i (todo)}
		<li transition:fly={{ x: 200 }}>
			<input type="text" bind:value={todo.todo} name="todo" id="todo-{i}" />
			<input type="checkbox" name="todo-{i}" id="todo-{i}" bind:checked={todo.done} />
			<button
				onclick={() => {
					todos = todos.filter((t) => t.id !== todo.id);
				}}>remove todo</button
			>
		</li>
	{/each}
</ul>

<legend>Add new todo</legend>
<label for="new-todo-input">
	<input
		type="text"
		name="new-todo-input"
		id="new-todo-input"
		onkeydown={(e) => {
			if (e.key === 'Enter') {
				todos.push({ id: crypto.randomUUID(), todo: e.target.value, done: false });
				e.currentTarget.value = '';
			}
		}}
	/>
</label>
