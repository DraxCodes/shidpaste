<script>
	import TextArea from '../components/TextArea.svelte';
	import LanguageSelection from '../components/LanguageSelection.svelte';
	import { pasteLanguage, pasteBody } from '../lib/pasteStore';

	const handleSubmit = () => {
		console.log($pasteBody, $pasteLanguage);
	};

	let val = ``;
</script>

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<!-- Replace with your content -->
	<div class="px-4 py-6 sm:px-0">
		<div class="flex items-start space-x-4">
			<div class="min-w-0 flex-1">
				<TextArea bind:value={val} minRows={35} maxRows={7000} />
			</div>
		</div>
		<div class="md:block">
			<div class="ml-4 flex items-center md:ml-6">
				<LanguageSelection />
				<button
					on:click={handleSubmit}
					type="submit"
					class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
					>Post</button
				>
			</div>
		</div>
	</div>
</div>
