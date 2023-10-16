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
				<!-- Blog Content -->
				<div
					class="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_0.5fr]"
				>
					<!-- Content -->
					<div class="p-4">
						<div>
							<h2 class="mb-10 mt-6 text-3xl font-medium md:text-2xl">
								Introduction
							</h2>
							<p class="mb-10 text-lg">
								Nature, with its awe-inspiring beauty and boundless wonders, has
								been captivating the human spirit for centuries. From the dense,
								emerald canopies of ancient forests to the tranquil, mirror-like
								surfaces of pristine lakes, the natural world holds secrets
								waiting to be discovered. In this journey, we invite you to
								explore the breathtaking landscapes and hidden treasures that
								Mother Earth has generously shared with us. So, pack your
								virtual bags, leave behind the urban hustle, and embark on an
								adventure that will ignite your wanderlust and inspire your
								soul.
							</p>
						</div>
						<div>
							<h2 class="mb-10 mt-6 text-3xl font-medium md:text-2xl">
								The Enchanted Forests
							</h2>
							<p class="mb-10 text-lg">The Forest's Mystical Aura</p>
							<p class="mb-10 text-lg">
								As we step into the heart of the forest, we are greeted by
								towering trees that have stood the test of time. In "The
								Enchanted Forests," we delve into the mysteries of these ancient
								woodlands, where every rustle of leaves and chirping of birds
								tells a story. From the vibrant undergrowth to the peaceful
								solitude found within, this chapter explores the unparalleled
								beauty and biodiversity that thrive in the depths of the forest.
							</p>
						</div>
						<div>
							<h2 class="mb-10 mt-6 text-3xl font-medium md:text-2xl">
								Lakes of Tranquility
							</h2>
							<p class="mb-10 text-lg">
								Reflecting the Serenity of Nature's Mirrors
							</p>
							<p class="mb-10 text-lg">
								In "Lakes of Tranquility," we shift our focus to the serene
								waters that mirror the world above. These pristine lakes are
								more than just bodies of water; they are natural works of art
								that calm the soul and offer a glimpse into the sublime. Join us
								as we journey to crystal-clear lakes, where the reflection of
								the surrounding landscapes creates a symphony of colors and
								shapes that will leave you breathless.
							</p>
						</div>
						<div>
							<h2 class="mb-10 mt-6 text-3xl font-medium md:text-2xl">
								Majestic Mountainscapes
							</h2>
							<p class="mb-10 text-lg">
								Reaching for the Sky: The Drama of High Peaks
							</p>
							<p class="mb-10 text-lg">
								In "Majestic Mountainscapes," we climb to new heights, exploring
								the grandeur of rugged peaks and awe-inspiring vistas. These
								giants of the Earth have been the backdrop for countless
								adventures, and their towering presence continues to inspire
								explorers, artists, and dreamers alike. Discover the stories
								behind the world's most iconic mountains and the sense of wonder
								they evoke.
							</p>
						</div>
						<div>
							<h2 class="mb-10 mt-6 text-3xl font-medium md:text-2xl">
								Conclusion
							</h2>
							<p class="mb-10 text-lg">Embracing the Beauty of Nature</p>
							<p class="mb-10 text-lg">
								As our adventure through the wonders of nature comes to a close,
								we are reminded of the profound connection between the natural
								world and the human spirit. The landscapes, forests, lakes,
								mountains, and coastlines we've explored in this journey are not
								just places; they are sources of inspiration, wonder, and
								renewal. The beauty of nature has the power to ignite our
								wanderlust, awaken our senses, and inspire our souls. So,
								whether you're an intrepid explorer or an armchair traveler, may
								this journey serve as a reminder to cherish and protect the
								incredible wonders that surround us. Let the beauty of nature be
								your guide as you continue to discover, explore, and appreciate
								the world in all its natural splendor.
							</p>
						</div>
					</div>
					<!-- Filter -->
					<div
						class="mt-10 hidden rounded-md bg-[#21211f] p-8 lg:sticky lg:top-10 lg:inline-block"
					>
						<h3 class="mb-4 text-2xl font-medium md:text-3xl">
							Discovering the Wonders of Nature
						</h3>
						<!-- Author -->
						<div
							class="mb-7 flex flex-row flex-wrap items-center gap-4 gap-y-2"
						>
							<div class="flex gap-1">
								<p class="text-sm text-[#acacaf]">By</p>
								<p class="text-sm text-[#acacaf]">Katia</p>
							</div>
							<div class="h-1.5 w-1.5 rounded-[100%] bg-[#707880]"></div>
							<p class="text-sm text-[#acacaf]">5 mins read</p>
						</div>
						<!-- Divider -->
						<div class="mb-7 h-px w-full bg-[#2a2b2a]"></div>
						<div class="relative mb-7 grid grid-cols-1 gap-4">
							<!-- Filter Div -->
							<div class="relative overflow-hidden">
								<!-- Left Line -->
								<div
									class="absolute bottom-0 left-0 right-auto top-0 w-1 bg-[#2a2b2a]"
								></div>
								<!-- Filter Links -->
								<div class="relative grid-cols-1 gap-4 text-neutral-100"></div>
								<a
									href="#introduction"
									class="mb-4 mt-4 flex flex-row items-start gap-3 border-l-4 border-solid border-l-[#00000000] pl-5 font-bold text-[#aaaaaa]"
								>
									<p>Introduction</p>
								</a>
								<a
									href="#the-enchanted-forests"
									class="mb-4 mt-4 flex flex-row items-start gap-3 border-l-4 border-solid border-l-[#00000000] pl-5 font-bold text-[#aaaaaa]"
								>
									<p>The Enchanted Forests</p>
								</a>
								<a
									href="#lakes-of-tranquility"
									class="mb-4 mt-4 flex flex-row items-start gap-3 border-l-4 border-solid border-l-[#00000000] pl-5 font-bold text-[#aaaaaa]"
								>
									<p>Lakes of Tranquility</p>
								</a>
								<a
									href="#majestic-mountainscapes"
									class="mb-4 mt-4 flex flex-row items-start gap-3 border-l-4 border-solid border-l-[#00000000] pl-5 font-bold text-[#aaaaaa]"
								>
									<p>Majestic Mountainscapes</p>
								</a>
								<a
									href="#conclusion"
									class="mb-4 mt-4 flex flex-row items-start gap-3 border-l-4 border-solid border-l-[#00000000] pl-5 font-bold text-[#aaaaaa]"
								>
									<p>Conclusion</p>
								</a>
							</div>
							<p class="mb-7 text-[#acacaf]">Share this article</p>
							<div class="flex gap-5">
								<a
									href="#"
									class="flex flex-row items-center gap-4 text-[#acacaf] hover:text-[#386eec]"
								>
									<div class="h-6 w-6">
										<svg
											width="100%"
											height="100%"
											viewBox="0 0 28 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M27.7072 4.70702L23.9367 8.47759C23.1839 17.2127 15.8173 23.9999 7.00007 23.9999C5.18451 23.9999 3.6883 23.7121 2.55286 23.1443C1.63654 22.6862 1.26117 22.1944 1.16804 22.0546C1.08448 21.9293 1.03031 21.7867 1.00959 21.6375C0.988865 21.4883 1.00212 21.3363 1.04836 21.1929C1.0946 21.0496 1.17263 20.9185 1.27662 20.8095C1.38062 20.7006 1.50789 20.6165 1.64893 20.5636C1.6811 20.5514 4.62995 19.4189 6.53583 17.2625C5.35037 16.4184 4.30701 15.3907 3.44501 14.2181C1.73151 11.8927 -0.0807375 7.85423 1.01618 1.82103C1.04883 1.64148 1.12999 1.47429 1.25086 1.33756C1.37174 1.20084 1.52773 1.0998 1.70192 1.04539C1.87612 0.990982 2.06188 0.985276 2.23908 1.02889C2.41629 1.07251 2.57818 1.16378 2.70722 1.29283C2.75129 1.33678 6.91248 5.43919 11.9994 6.76433L12.0001 5.99944C12.0108 4.39835 12.6569 2.86706 13.7963 1.74213C14.9356 0.61721 16.475 -0.00928454 18.0761 0.000353725C19.1162 0.0147578 20.1348 0.298693 21.0324 0.824425C21.93 1.35016 22.6759 2.09971 23.1972 2.99987L27.0001 2.99993C27.1978 2.99993 27.3912 3.05857 27.5556 3.16845C27.7201 3.27833 27.8483 3.4345 27.924 3.61723C27.9996 3.79995 28.0195 4.00101 27.9809 4.19499C27.9423 4.38897 27.8471 4.56716 27.7072 4.70702Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
								</a>
								<a
									href="#"
									class="flex flex-row items-center gap-4 text-[#acacaf] hover:text-[#386eec]"
								>
									<div class="h-6 w-6">
										<svg
											width="100%"
											height="100%"
											viewBox="0 0 26 26"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13 0C9.6388 6.13649e-05 6.40826 1.30196 3.98625 3.63252C1.56423 5.96308 0.139013 9.14115 0.00964237 12.4999C-0.119728 15.8586 1.05681 19.1368 3.29237 21.6468C5.52794 24.1568 8.64876 25.7033 12 25.9619V16.0001H9C8.73478 16.0001 8.48043 15.8948 8.29289 15.7072C8.10535 15.5197 8 15.2653 8 15.0001C8 14.7349 8.10535 14.4805 8.29289 14.293C8.48043 14.1055 8.73478 14.0001 9 14.0001H12V11.0001C12.0012 9.93962 12.423 8.92291 13.1729 8.17303C13.9228 7.42315 14.9395 7.00133 16 7.00012H18C18.2652 7.00012 18.5196 7.10547 18.7071 7.29301C18.8946 7.48055 19 7.7349 19 8.00012C19 8.26533 18.8946 8.51969 18.7071 8.70722C18.5196 8.89476 18.2652 9.00012 18 9.00012H16C15.4698 9.00072 14.9614 9.21163 14.5865 9.58657C14.2115 9.96152 14.0006 10.4699 14 11.0001V14.0001H17C17.2652 14.0001 17.5196 14.1055 17.7071 14.293C17.8946 14.4805 18 14.7349 18 15.0001C18 15.2653 17.8946 15.5197 17.7071 15.7072C17.5196 15.8948 17.2652 16.0001 17 16.0001H14V25.9619C17.3512 25.7033 20.472 24.1567 22.7076 21.6468C24.9431 19.1368 26.1197 15.8586 25.9903 12.4999C25.8609 9.14115 24.4357 5.9631 22.0137 3.63254C19.5917 1.30198 16.3612 7.39253e-05 13 0Z"
												fill="currentColor"
											></path>
										</svg>
									</div>
								</a>
								<a
									href="#"
									class="flex flex-row items-center gap-4 text-[#acacaf] hover:text-[#386eec]"
								>
									<div class="h-6 w-6">
										<svg
											fill="currentColor"
											viewBox="0 0 24 28"
											xmlns="http://www.w3.org/2000/svg"
										>
											<title>LinkedIn icon</title>
											<path
												d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
											></path>
										</svg>
									</div>
								</a>
							</div>
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
