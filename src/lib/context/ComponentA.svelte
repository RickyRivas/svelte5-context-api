<script>
	import ComponentB from './ComponentB.svelte';
	import { setBananaContext } from './context';

	let prop = $state({ banana: '🍌' });

	setBananaContext(prop);
</script>

<input type="text" name="" id="" bind:value={prop.banana} />
<ComponentB />
