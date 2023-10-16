<template>
	<div class="overflow-hidden">
		<header class="relative bg-[#171715]">
			<!-- Navbar Dropdown 1 row -->
			<nav class="text-white lg:px-10 lg:py-7 z-[100] relative">
				<!-- NAVBAR -->
				<div
					class="mx-auto h-auto w-full max-w-7xl bg-[#2a2a2a5e] lg:relative lg:top-0 lg:rounded-full"
					x-data="{isOpen: false, menuOne:false}"
				>
					<!-- CONTAINER -->
					<div
						class="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4"
					>
						<!-- SVG LOGO - YOU CAN REPLACE THIS -->
						<a
							href="https://tailwind-css-template-shade.vercel.app/Landing%20Home"
							class="relative float-left flex h-12 w-12 flex-none flex-col items-center justify-center text-[#333333] max-[991px]:mr-auto max-[991px]:[border-right-style:none] max-[767px]:pl-2.5"
						>
							<img
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f8b_Button%20Sign%20Up.png"
								alt=""
								class="inline-block h-full w-full object-contain"
							/>
						</a>
						<!-- MENU CONTENT 1 -->
						<div
							class="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-0 lg:space-y-0"
							x-bind:class="isOpen ? 'show' : 'hidden'"
						>
							<!-- DROPDOWN -->
							<div class="relative flex flex-col">
								<a
									x-on:click.prevent="menuOne = !menuOne"
									class="flex flex-row rounded-lg pb-8 text-lg text-white transition hover:text-[#acacaf] lg:px-6 lg:py-4 lg:pb-0"
									x-bind:class="menuOne ? 'text-gray-800 lg:' : '' "
									>Projects
									<svg
										x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
										class="relative top-1 fill-current transition"
										style="width: 24px; height: 24px"
										viewBox="0 0 24 24"
									>
										<path
											d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
										/>
									</svg>
								</a>
								<!-- DROP DOWN MENU ONE -->
								<div
									class="lg:px-75 7 z-50 flex w-[200px] flex-col rounded-lg bg-[#171715] px-2 py-2 text-white lg:absolute lg:top-20 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)]"
									x-show="menuOne"
									x-on:click.outside="menuOne = false"
								>
									<!-- ITEM -->
									<a
										class="flex grow flex-col rounded-lg px-5 py-2 xl:px-8"
										href="https://tailwind-css-template-shade.vercel.app/Project%20V1"
									>
										<!-- TEXT -->
										<h2 class="font-inter mb-1 text-md font-normal">
											Project V1
										</h2>
									</a>
									<a
										class="flex grow flex-col rounded-lg px-5 py-2 xl:px-8"
										href="https://tailwind-css-template-shade.vercel.app/Project%20V2"
									>
										<!-- TEXT -->
										<h2 class="font-inter mb-1 text-md font-normal">
											Project V2
										</h2>
									</a>
								</div>
							</div>
							<a
								href="https://tailwind-css-template-shade.vercel.app/Landing%20Home%20V2"
								class="pb-8 text-lg text-white transition hover:text-[#acacaf] lg:px-6 lg:py-4 lg:pb-0"
								>Home V2</a
							>
							<a
								href="https://tailwind-css-template-shade.vercel.app/About"
								class="pb-8 text-lg text-white transition hover:text-[#acacaf] lg:px-6 lg:py-4 lg:pb-0"
								>About</a
							>

							<a
								href="https://tailwind-css-template-shade.vercel.app/Blog"
								class="pb-8 text-lg text-white transition hover:text-[#acacaf] lg:px-6 lg:py-4 lg:pb-0"
								>Blog</a
							>

							<a
								href="https://tailwind-css-template-shade.vercel.app/Services"
								class="pb-8 text-lg text-white transition hover:text-[#acacaf] lg:px-6 lg:py-4 lg:pb-0"
								>Services</a
							>
							<a
								target="_blank"
								class="inline-block rounded-[60px] border border-solid border-white bg-white px-6 py-4 text-center text-lg font-bold text-[#171715] transition hover:border-white hover:bg-[#acacaf] hover:text-[#1c1c1a]"
								href="https://tailspark.co/"
								>Clone Components</a
							>
						</div>
						<!-- BURGER MENU -->
						<a
							href="#"
							class="absolute right-5 top-10 lg:hidden"
							x-on:click.prevent="isOpen = !isOpen"
						>
							<svg
								width="1.25rem"
								height="1rem"
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z"
									fill="currentColor"
								></path>
								<path
									d="M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z"
									fill="currentColor"
								></path>
								<path
									d="M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z"
									fill="currentColor"
								></path>
							</svg>
						</a>
					</div>
				</div>
			</nav>

			<!-- Hero Content -->
			<div
				class="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24"
			>
				<!-- Component -->
				<div class="mx-auto max-w-3xl text-center">
					<h1
						class="mb-3 font-[Gabarito,_sans-serif] text-4xl font-medium text-white md:text-6xl"
					>
						Product Designer, Explorer, and Storyteller
					</h1>
					<p class="mx-auto mb-10 max-w-[674px] text-lg text-[#acacaf]">
						I'm James, a passionate blogger and explorer on a mission to share
						captivating stories and experiences. Join me on my journey as I
						traverse through life's adventures and uncover hidden gems.
					</p>
					<div class="flex flex-wrap justify-center gap-6">
						<a
							href="https://shade-flowspark.webflow.io/projects"
							class="inline-block rounded-md border border-solid border-white bg-white px-6 py-4 text-lg font-bold text-[#171715] transition hover:border-[#171715] hover:bg-[#acacaf]"
							>My Projects</a
						>
						<a
							href="https://build.flowspark.co/components/shade/landing"
							class="inline-block max-w-full rounded-md border border-solid border-white px-6 py-4 text-center text-lg font-bold text-white transition hover:border-[#171715] hover:bg-[#acacaf]"
						>
							<p>Clone&nbsp;More Components</p>
						</a>
					</div>
				</div>
			</div>

			<!-- BG Image -->
			<div class="absolute bottom-auto left-0 right-0 top-0 z-0">
				<img
					src="https://assets-global.website-files.com/651d564a8a212676e4cdf2ba/651d72cc0fab4a138c7cfaca_blurred.png"
					alt=""
					class="relative bottom-auto left-0 right-0 top-0 inline-block"
				/>
			</div>
		</header>

		<section class="bg-[#171715] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<div class="flex flex-col gap-5 md:grid-cols-2 lg:flex-row">
					<h2
						class="min-w-[auto] text-3xl font-medium md:text-5xl lg:min-w-[320px]"
					>
						About
					</h2>
					<p class="text-lg text-[#acacaf]">
						I'm a passionate blogger who loves to share my ideas and experiences
						with the world. With a knack for storytelling and a curious mind, I
						aim to provide engaging and informative content on a variety of
						topics.
					</p>
				</div>
			</div>
		</section>

		<section class="bg-[#171715] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Component -->
				<div class="flex flex-col gap-5 md:flex-row">
					<h2
						class="min-w-[auto] text-3xl font-medium md:text-5xl lg:min-w-[320px]"
					>
						Blogs
					</h2>
					<!-- Blog Items -->
					<div class="flex flex-col gap-20">
						<!-- Item -->
						<div
							class="flex flex-col items-stretch gap-6 overflow-hidden rounded-md p-6 hover:bg-[#1c1c1a] md:flex-row"
						>
							<div class="flex flex-col items-stretch justify-center">
								<p class="mb-1">August 5, 2023</p>
								<h3 class="mb-7 text-2xl font-medium text-white md:text-3xl">
									Discovering the Wonders of Nature
								</h3>
								<p class="mb-7 text-lg text-[#acacaf]">
									Embark on an enchanting journey through lush forests, serene
									lakes, and breathtaking landscapes that will ignite your
									wanderlust. Join me as we uncover the hidden gems of the
									natural world, and let the beauty of nature inspire your soul.
								</p>
								<a
									href="https://tailwind-css-template-shade.vercel.app/Blog%20Post%20V1"
									class="flex max-w-full text-lg font-bold text-[#386eec]"
								>
									Read Blog
								</a>
							</div>
							<a
								href="#"
								class="inline-block w-full max-w-[309px] flex-none overflow-hidden rounded-md max-[767px]:max-w-full md:w-1/2"
							>
								<img
									src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f99_Blog%20Image.webp"
									alt=""
									class="inline-block h-full object-cover"
								/>
							</a>
						</div>
						<!-- Item -->
						<div
							class="flex flex-col items-stretch gap-6 overflow-hidden rounded-md p-6 hover:bg-[#1c1c1a] md:flex-row"
						>
							<div class="flex flex-col items-stretch justify-center">
								<p class="mb-1">August 5, 2023</p>
								<h3 class="mb-7 text-2xl font-medium text-white md:text-3xl">
									Discovering the Wonders of Nature
								</h3>
								<p class="mb-7 text-lg text-[#acacaf]">
									Embark on an enchanting journey through lush forests, serene
									lakes, and breathtaking landscapes that will ignite your
									wanderlust. Join me as we uncover the hidden gems of the
									natural world, and let the beauty of nature inspire your soul.
								</p>
								<a
									href="https://tailwind-css-template-shade.vercel.app/Blog%20Post%20V1"
									class="flex max-w-full text-lg font-bold text-[#386eec]"
								>
									Read Blog
								</a>
							</div>
							<a
								href="#"
								class="inline-block w-full max-w-[309px] flex-none overflow-hidden rounded-md max-[767px]:max-w-full md:w-1/2"
							>
								<img
									src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f99_Blog%20Image.webp"
									alt=""
									class="inline-block h-full object-cover"
								/>
							</a>
						</div>
						<!-- Item -->
						<div
							class="flex flex-col items-stretch gap-6 overflow-hidden rounded-md p-6 hover:bg-[#1c1c1a] md:flex-row"
						>
							<div class="flex flex-col items-stretch justify-center">
								<p class="mb-1">August 5, 2023</p>
								<h3 class="mb-7 text-2xl font-medium text-white md:text-3xl">
									Discovering the Wonders of Nature
								</h3>
								<p class="mb-7 text-lg text-[#acacaf]">
									Embark on an enchanting journey through lush forests, serene
									lakes, and breathtaking landscapes that will ignite your
									wanderlust. Join me as we uncover the hidden gems of the
									natural world, and let the beauty of nature inspire your soul.
								</p>
								<a
									href="https://tailwind-css-template-shade.vercel.app/Blog%20Post%20V1"
									class="flex max-w-full text-lg font-bold text-[#386eec]"
								>
									Read Blog
								</a>
							</div>
							<a
								href="#"
								class="inline-block w-full max-w-[309px] flex-none overflow-hidden rounded-md max-[767px]:max-w-full md:w-1/2"
							>
								<img
									src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f99_Blog%20Image.webp"
									alt=""
									class="inline-block h-full object-cover"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-[#171715]">
			<!-- Container -->
			<div class="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
				<!-- Component -->
				<div
					class="relative z-10 mx-auto rounded-2xl bg-[#21211f] bg-[#2a2a2a5e] px-4 py-12 text-center text-white md:px-10"
				>
					<!-- Heading Text -->
					<div class="mx-auto max-w-[720px]">
						<h2 class="mb-7 text-3xl font-medium md:text-5xl">
							Ready to Collaborate?
						</h2>
						<p class="mb-14 text-lg text-[#acacaf]">
							Browse my portfolio and uncover a world of creativity. Whether
							you're seeking collaboration or simply looking for inspiration,
							let's connect.
						</p>
					</div>
					<!-- CTA Button -->
					<div class="flex flex-wrap justify-center gap-6">
						<a
							target="_blank"
							href="https://tailspark.co/"
							class="inline-block rounded-md border border-solid border-white bg-white px-6 py-4 text-center text-lg font-bold text-[#171715] transition hover:border-[#171715] hover:bg-[#acacaf]"
							>Copy 300+ Components</a
						>
						<a
							target="_blank"
							href="https://www.flowspark.co/design"
							class="inline-block max-w-full"
						>
							<div
								class="rounded-md border border-solid border-white px-6 py-4 text-center text-lg font-bold text-white transition hover:border-[#171715] hover:bg-[#acacaf]"
							>
								<p>Get Custom Designs</p>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>

		<footer class="bg-[#171715] text-white">
			<div
				class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32"
			>
				<div class="flex flex-col items-center">
					<div
						class="text-center font-semibold max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:py-1"
					>
						<a
							href="https://tailwind-css-template-shade.vercel.app/Landing%20Home"
							class="px-6 py-2 font-normal transition hover:text-[#acacaf]"
							>Home</a
						>
						<a
							href="https://tailwind-css-template-shade.vercel.app/Blog%20Post%20V1"
							class="px-6 py-2 font-normal transition hover:text-[#acacaf]"
							>Blog Post V1</a
						>
						<a
							href="https://tailwind-css-template-shade.vercel.app/Blog%20Post%20V2"
							class="px-6 py-2 font-normal transition hover:text-[#acacaf]"
							>Blog Post V2</a
						>
						<a
							href="https://tailwind-css-template-shade.vercel.app/Services"
							class="px-6 py-2 font-normal transition hover:text-[#acacaf]"
							>Services</a
						>

						<a
							href="https://tailwind-css-template-shade.vercel.app/About"
							class="px-6 py-2 font-normal transition hover:text-[#acacaf]"
							>About</a
						>
					</div>
					<div
						class="mb-14 mt-14 w-48 border-b border-solid border-b-white"
					></div>
					<p class="text-sm text-white">
						© Copyright 2021. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
