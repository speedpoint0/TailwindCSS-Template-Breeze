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

			<section class="relative bg-[#171715]">
				<!-- Container -->
				<div
					class="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
				>
					<!-- Component -->
					<div
						class="flex flex-col gap-8 sm:gap-12 md:flex-row md:gap-16 lg:grid-cols-2 lg:gap-24"
					>
						<!-- Heading Content -->
						<div class="w-full lg:w-1/2">
							<h2
								class="mb-5 font-[Gabarito,_sans-serif] text-3xl font-medium text-white md:text-5xl"
							>
								I’m James Parker. I live in New York City, where I design the
								future.
							</h2>
							<p class="mb-10 text-lg text-[#acacaf]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est
								laborum.Sed ut perspiciatis unde omnis iste natus error sit
								voluptatem accusantium doloremque laudantium, totam rem aperiam,
								eaque ipsa quae ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo.
							</p>
							<div
								class="flex flex-wrap items-stretch gap-6 max-[479px]:flex-wrap"
							>
								<a
									href="#"
									class="inline-block rounded-md border border-solid border-white bg-white px-6 py-4 text-center text-lg font-bold text-[#171715] transition hover:border-[#171715] hover:bg-[#acacaf]"
									>My Projects</a
								>
								<a href="#" class="inline-block max-w-full">
									<div
										class="rounded-md border border-solid border-white px-6 py-4 text-center text-lg font-bold text-white transition hover:border-[#171715] hover:bg-[#acacaf]"
									>
										<p>Get In Touch</p>
									</div>
								</a>
							</div>
						</div>
						<!-- Image Content -->
						<div class="w-full lg:w-1/2">
							<img
								src="https://assets-global.website-files.com/6527d399daf0285f33717f7f/6527d399daf0285f33717f93_About%20Image.png"
								alt=""
								class="mx-auto mb-6 inline-block w-full rounded-md"
							/>
							<div class="flex justify-between">
								<p class="text-lg font-bold text-white">Follow on:</p>
								<div class="flex flex-row gap-2">
									<a
										href="#"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c4d52] transition hover:bg-white"
									>
										<div class="h-4 w-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="100%"
												height="100%"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<path
													d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
													fill="currentColor"
												></path>
												<circle
													cx="16.806"
													cy="7.207"
													r="1.078"
													fill="currentColor"
												></circle>
												<path
													d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</a>
									<a
										href="#"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c4d52] transition hover:bg-white"
									>
										<div class="h-4 w-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="100%"
												height="100%"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<path
													d="M19.633 7.997c.013.175.013.349.013.523c0 5.325-4.053 11.461-11.46 11.461c-2.282 0-4.402-.661-6.186-1.809c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721a4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062c.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973a4.02 4.02 0 0 1-1.771 2.22a8.073 8.073 0 0 0 2.319-.624a8.645 8.645 0 0 1-2.019 2.083z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</a>
									<a
										href="#"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c4d52] transition hover:bg-white"
									>
										<div class="h-4 w-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="100%"
												height="100%"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<path
													fill-rule="evenodd"
													clip-rule="evenodd"
													d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974c0 4.406 2.857 8.145 6.821 9.465c.499.09.679-.217.679-.481c0-.237-.008-.865-.011-1.696c-2.775.602-3.361-1.338-3.361-1.338c-.452-1.152-1.107-1.459-1.107-1.459c-.905-.619.069-.605.069-.605c1.002.07 1.527 1.028 1.527 1.028c.89 1.524 2.336 1.084 2.902.829c.091-.645.351-1.085.635-1.334c-2.214-.251-4.542-1.107-4.542-4.93c0-1.087.389-1.979 1.024-2.675c-.101-.253-.446-1.268.099-2.64c0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336a9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021c.545 1.372.203 2.387.099 2.64c.64.696 1.024 1.587 1.024 2.675c0 3.833-2.33 4.675-4.552 4.922c.355.308.675.916.675 1.846c0 1.334-.012 2.41-.012 2.737c0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974C22 6.465 17.535 2 12.026 2z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</a>
									<a
										href="#"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c4d52] transition hover:bg-white"
									>
										<div class="h-4 w-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="100%"
												height="100%"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<circle
													cx="4.983"
													cy="5.009"
													r="2.188"
													fill="currentColor"
												></circle>
												<path
													d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
													fill="currentColor"
												></path>
											</svg>
										</div>
									</a>
									<a
										href="#"
										class="flex h-9 w-9 items-center justify-center rounded-full bg-[#4c4d52] transition hover:bg-white"
									>
										<div class="h-4 w-4">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												width="100%"
												height="100%"
												preserveAspectRatio="xMidYMid meet"
												viewBox="0 0 24 24"
											>
												<path
													fill="currentColor"
													d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
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

			<!-- BG Image -->
			<div class="absolute bottom-auto left-0 right-0 top-0 z-0">
				<img
					src="https://assets-global.website-files.com/651d564a8a212676e4cdf2ba/651d72cc0fab4a138c7cfaca_blurred.png"
					alt=""
					class="relative bottom-auto left-0 right-0 top-0 inline-block"
				/>
			</div>
		</header>

		<header class="bg-[#171715] text-white">
			<!-- Container -->
			<div
				class="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20"
			>
				<!-- Component -->
				<div class="flex flex-col gap-5 md:flex-row">
					<h2
						class="min-w-[auto] font-[Gabarito,_sans-serif] text-3xl font-medium md:text-5xl lg:min-w-[320px]"
					>
						Experiences
					</h2>
					<!-- Experiences Content -->
					<div class="flex flex-col gap-12 md:gap-16 lg:gap-20">
						<div class="p-2 sm:px-2">
							<h3 class="mb-7 text-2xl font-medium md:text-3xl">
								Location, Job Title One
							</h3>
							<p class="mb-7 text-lg text-[#acacaf]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<p class="mb-7 text-lg text-white">
								January 04, 2020 &nbsp;to &nbsp;May 24, 2021
							</p>
						</div>
						<div class="p-2">
							<h3 class="mb-7 text-2xl font-medium md:text-3xl">
								Location, Job Title Two
							</h3>
							<p class="mb-7 text-lg text-[#acacaf]">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto beatae
								vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed quia
								consequuntur magni dolores eos qui ratione voluptatem sequi
								nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non numquam eius
								modi tempora incidunt ut labore et dolore magnam aliquam quaerat
								voluptatem. Ut enim ad minima veniam, quis nostrum
								exercitationem ullam corporis suscipit laboriosam, nisi ut
								aliquid ex ea commodi consequatur? Quis autem vel eum iure
								reprehenderit qui in ea voluptate velit esse quam nihil
								molestiae consequatur, vel illum qui dolorem eum fugiat quo
								voluptas nulla pariatur?
							</p>
							<p class="mb-7 text-lg text-white">
								January 04, 2020 &nbsp;to &nbsp;May 24, 2021
							</p>
						</div>
						<div class="p-2">
							<h3 class="mb-7 text-2xl font-medium md:text-3xl">
								Location, Job Title Three
							</h3>
							<p class="mb-7 text-lg text-[#acacaf]">
								At vero eos et accusamus et iusto odio dignissimos ducimus qui
								blanditiis praesentium voluptatum deleniti atque corrupti quos
								dolores et quas molestias excepturi sint occaecati cupiditate
								non provident, similique sunt in culpa qui officia deserunt
								mollitia animi, id est laborum et dolorum fuga. Et harum quidem
								rerum facilis est et expedita distinctio. Nam libero tempore,
								cum soluta nobis est eligendi optio cumque nihil impedit quo
								minus id quod maxime placeat facere possimus, omnis voluptas
								assumenda est, omnis dolor repellendus. Temporibus autem
								quibusdam et aut officiis debitis aut rerum necessitatibus saepe
								eveniet ut et voluptates repudiandae sint et molestiae non
								recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
								ut aut reiciendis voluptatibus maiores alias consequatur aut
								perferendis doloribus asperiores repellat.
							</p>
							<p class="mb-7 text-lg text-white">
								January 04, 2020 &nbsp;to &nbsp;May 24, 2021
							</p>
						</div>
						<div class="p-2">
							<h3 class="mb-7 text-2xl font-medium md:text-3xl">
								Location, Job Title Four
							</h3>
							<p class="mb-7 text-lg text-[#acacaf]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris
								nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
								in reprehenderit in voluptate velit esse cillum dolore eu fugiat
								nulla pariatur. Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim id est laborum.
							</p>
							<p class="mb-7 text-lg text-white">
								January 04, 2020 &nbsp;to &nbsp;May 24, 2021
							</p>
						</div>
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
