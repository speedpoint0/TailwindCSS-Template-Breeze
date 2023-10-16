<template>
	<div class="">
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
										href="https://tailwind-css-template-shade.vercel.app/Project%V1"
									>
										<!-- TEXT -->
										<h2 class="font-inter mb-1 text-md font-normal">
											Project V1
										</h2>
									</a>
									<a
										class="flex grow flex-col rounded-lg px-5 py-2 xl:px-8"
										href="https://tailwind-css-template-shade.vercel.app/Project%V2"
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
				<!-- Heading Content -->
				<div class="mb-10">
					<p class="mb-10 text-[#acacaf]">September 5, 2023</p>
					<h1 class="mb-10 max-w-[674px] text-4xl font-medium md:text-6xl">
						Discovering the Wonders of Nature
					</h1>
					<p class="mb-20 text-lg text-[#acacaf]">
						Embark on an enchanting journey through lush forests, serene lakes,
						and breathtaking landscapes that will ignite your wanderlust. Join
						me as we uncover the hidden gems of the natural world, and let the
						beauty of nature inspire your soul.
					</p>
					<img
						class="inline-block h-auto w-full rounded-lg object-cover lg:h-[568px]"
						src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f99_Blog%20Image.webp"
						alt=""
					/>
				</div>
				<div class="p-4">
					<h3 class="mb-6 mt-6 text-2xl font-medium md:text-xl">
						Introduction
					</h3>
					<p class="mb-10 text-lg text-white">
						Nature, with its awe-inspiring beauty and boundless wonders, has
						been captivating the human spirit for centuries. From the dense,
						emerald canopies of ancient forests to the tranquil, mirror-like
						surfaces of pristine lakes, the natural world holds secrets waiting
						to be discovered. In this journey, we invite you to explore the
						breathtaking landscapes and hidden treasures that Mother Earth has
						generously shared with us. So, pack your virtual bags, leave behind
						the urban hustle, and embark on an adventure that will ignite your
						wanderlust and inspire your soul.
					</p>
					<h3 class="mb-6 mt-6 text-2xl font-medium md:text-xl">
						The Enchanted Forests
					</h3>
					<p class="mb-10 text-lg text-white">The Forest's Mystical Aura</p>
					<p class="mb-10 text-lg text-white">
						As we step into the heart of the forest, we are greeted by towering
						trees that have stood the test of time. In "The Enchanted Forests,"
						we delve into the mysteries of these ancient woodlands, where every
						rustle of leaves and chirping of birds tells a story. From the
						vibrant undergrowth to the peaceful solitude found within, this
						chapter explores the unparalleled beauty and biodiversity that
						thrive in the depths of the forest.
					</p>
					<h3 class="mb-6 mt-6 text-2xl font-medium md:text-xl">
						Lakes of Tranquility
					</h3>
					<p class="mb-10 text-lg text-white">
						Reflecting the Serenity of Nature's Mirrors
					</p>
					<p class="mb-10 text-lg text-white">
						In "Lakes of Tranquility," we shift our focus to the serene waters
						that mirror the world above. These pristine lakes are more than just
						bodies of water; they are natural works of art that calm the soul
						and offer a glimpse into the sublime. Join us as we journey to
						crystal-clear lakes, where the reflection of the surrounding
						landscapes creates a symphony of colors and shapes that will leave
						you breathless.
					</p>
					<h3 class="mb-6 mt-6 text-2xl font-medium md:text-xl">
						Majestic Mountainscapes
					</h3>
					<p class="mb-10 text-lg text-white">
						Reaching for the Sky: The Drama of High Peaks
					</p>
					<p class="mb-10 text-lg text-white">
						In "Majestic Mountainscapes," we climb to new heights, exploring the
						grandeur of rugged peaks and awe-inspiring vistas. These giants of
						the Earth have been the backdrop for countless adventures, and their
						towering presence continues to inspire explorers, artists, and
						dreamers alike. Discover the stories behind the world's most iconic
						mountains and the sense of wonder they evoke.
					</p>
					<h3 class="mb-6 mt-6 text-2xl font-medium md:text-xl">Conclusion</h3>
					<p class="mb-10 text-lg text-white">Embracing the Beauty of Nature</p>
					<p class="mb-10 text-lg text-white">
						As our adventure through the wonders of nature comes to a close, we
						are reminded of the profound connection between the natural world
						and the human spirit. The landscapes, forests, lakes, mountains, and
						coastlines we've explored in this journey are not just places; they
						are sources of inspiration, wonder, and renewal. The beauty of
						nature has the power to ignite our wanderlust, awaken our senses,
						and inspire our souls. So, whether you're an intrepid explorer or an
						armchair traveler, may this journey serve as a reminder to cherish
						and protect the incredible wonders that surround us. Let the beauty
						of nature be your guide as you continue to discover, explore, and
						appreciate the world in all its natural splendor.
					</p>
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
