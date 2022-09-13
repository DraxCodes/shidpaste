<script>
	import '../app.css';
	import TextArea from '../components/TextArea.svelte';
	let val = ``;
</script>

<div class="flex items-start space-x-4">
	<div class="min-w-0 flex-1">
		<TextArea bind:value={val} minRows={35} maxRows={40} />
	</div>
</div>
