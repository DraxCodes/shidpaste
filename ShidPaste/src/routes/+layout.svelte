<script>
	import LanguageSelection from '../components/LanguageSelection.svelte';
	import { pasteLanguage, pasteBody } from '../stores/pasteStore';

	const handleSubmit = () => {
		console.log($pasteBody, $pasteLanguage);
	};
</script>

<body class="h-full">
	<div class="min-h-full">
		<main>
			<nav class="bg-gray-800">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="flex h-16 items-center justify-between">
						<div class="flex items-center">
							<div class="flex-shrink-0">
								<img
									class="h-8 w-8"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
							</div>
							<div class="hidden md:block">
								<div class="ml-10 flex items-baseline space-x-4">
									<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
									<a
										href="#"
										class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
										aria-current="page">Paste</a
									>
								</div>
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
			</nav>
		</main>
	</div>
</body>
<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
	<!-- Replace with your content -->
	<div class="px-4 py-6 sm:px-0">
		<slot />
	</div>
	<!-- /End replace -->
</div>
