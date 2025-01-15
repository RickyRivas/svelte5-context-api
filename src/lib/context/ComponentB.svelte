<script>
	import { getAllContexts } from 'svelte';
	import { getBananaContext } from './context';

	const banana = getBananaContext();

	console.log(banana);
</script>

{JSON.stringify([...getAllContexts()], null, 2)}
