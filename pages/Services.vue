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

			<header class="relative block bg-[#171715]">
				<!-- Container -->
				<div class="z-10 mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
					<!-- Component -->
					<div class="mx-auto w-full max-w-[640px] text-center text-white">
						<h1 class="mb-10 text-3xl font-medium md:text-5xl">
							My Specializations
						</h1>
						<p class="mx-auto mb-10 max-w-[674px] text-lg text-[#acacaf]">
							Crafting Digital and Physical Excellence
						</p>
					</div>
				</div>
			</header>

			<!-- BG Image -->
			<div class="absolute bottom-auto left-0 right-0 top-0 z-0">
				<img
					src="https://assets-global.website-files.com/651d564a8a212676e4cdf2ba/651d72cc0fab4a138c7cfaca_blurred.png"
					alt=""
					class="relative bottom-auto left-0 right-0 top-0 inline-block"
				/>
			</div>
		</header>

		<header class="bg-[#171715]">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:pb-20 lg:pt-0"
			>
				<!-- Component -->
				<div class="gird-cols-1 grid items-center md:grid-cols-2 md:gap-5">
					<!-- Item -->
					<div
						class="mb-12 flex flex-col rounded-md bg-[#1c1c1a] p-8 text-white transition hover:bg-[#1c1c1a] sm:p-8 md:bg-transparent"
					>
						<div
							class="relative z-10 mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#1c1c1a] text-white"
						>
							<img
								alt=""
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f95_website%20design.svg"
								class="inline-block h-16 w-16 rounded-full"
							/>
						</div>
						<h3 class="mb-7 text-2xl font-medium md:text-3xl">
							Website Design
						</h3>
						<p class="text-lg text-[#acacaf]">
							I specialize in crafting visually appealing and user-centric
							websites that leave a lasting impression. Whether it's a personal
							blog, e-commerce platform, or corporate website, I bring digital
							visions to life, one pixel at a time.
						</p>
					</div>
					<!-- Item -->
					<div
						class="mb-12 flex flex-col rounded-md bg-[#1c1c1a] p-8 text-white transition hover:bg-[#1c1c1a] sm:p-8 md:bg-transparent"
					>
						<div
							class="relative z-10 mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#1c1c1a] text-white"
						>
							<img
								alt=""
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f98_consulting.svg"
								class="inline-block h-16 w-16 rounded-full"
							/>
						</div>
						<h3 class="mb-7 text-2xl font-medium md:text-3xl">
							Consulting &amp; Strategy
						</h3>
						<p class="text-lg text-[#acacaf]">
							Need guidance on your website or product design project? I provide
							valuable insights and data-driven strategies to help you make
							informed decisions and achieve your design objectives. My goal is
							to ensure your projects not only meet but exceed your
							expectations.
						</p>
					</div>
					<!-- Item -->
					<div
						class="mb-12 flex flex-col rounded-md bg-[#1c1c1a] p-8 text-white transition hover:bg-[#1c1c1a] sm:p-8 md:bg-transparent"
					>
						<div
							class="relative z-10 mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#1c1c1a] text-white"
						>
							<img
								alt=""
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f97_product%20design.svg"
								class="inline-block h-16 w-16 rounded-full"
							/>
						</div>
						<h3
							class="mb-7 font-[Gabarito,_sans-serif] text-2xl font-medium md:text-3xl"
						>
							Product Design
						</h3>
						<p class="text-lg text-[#acacaf]">
							My expertise extends to product design, where I create innovative
							and market-ready solutions. From concept to prototyping and
							production, I ensure that products stand out in the market,
							combining form and function seamlessly.
						</p>
					</div>
					<!-- Item -->
					<div
						class="mb-12 flex flex-col rounded-md bg-[#1c1c1a] p-8 text-white transition hover:bg-[#1c1c1a] sm:p-8 md:bg-transparent"
					>
						<div
							class="relative z-10 mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-[#1c1c1a] text-white"
						>
							<img
								alt=""
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f96_graphic%20design.svg"
								class="inline-block h-16 w-16 rounded-full"
							/>
						</div>
						<h3 class="mb-7 text-2xl font-medium md:text-3xl">
							Graphic Design
						</h3>
						<p class="text-lg text-[#acacaf]">
							With a keen eye for aesthetics and a passion for visual
							storytelling, I offer graphic design services that elevate your
							brand identity. From logos to marketing materials, I create
							designs that resonate with your audience and leave a lasting
							impact.
						</p>
					</div>
				</div>
			</div>
		</header>

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
