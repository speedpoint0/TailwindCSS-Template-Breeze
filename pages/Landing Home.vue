<template>
  <div class="relative">
    <!-- Navbar Dropdown 1 row -->
    <nav
      class="font-inter mx-auto h-auto w-full lg:sticky top-0 z-20 bg-[#fff]"
      x-data="{isOpen: false, menuOne:false}"
    >
      <!-- CONTAINER -->
      <div
        class="flex flex-col px-6 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20"
      >
        <!-- SVG LOGO - YOU CAN REPLACE THIS -->
        <a
          href="https://breeze-templates.webflow.io/"
          aria-current="page"
          class="relative float-left bg-[#00000000] leading-[0] text-[#333333] no-underline hover:outline-0 max-[991px]:mr-auto max-[767px]:pl-0"
          aria-label="home"
        >
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f198e9637f855_Group%2047874-2.png"
            loading="lazy"
            alt=""
            class="inline-block max-h-6 max-w-full"
          />
        </a>
        <!-- MENU CONTENT 1 -->
        <div
          class="mt-14 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0"
          x-bind:class="isOpen ? 'show' : 'hidden'"
        >
          <!-- DROPDOWN -->
          <div class="relative flex flex-col">
            <a
              x-on:click.prevent="menuOne = !menuOne"
              href="#"
              class="flex flex-row rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
              x-bind:class="menuOne ? 'text-gray-800 lg:border lg:border-gray-600 lg:bg-gray-50' : 'text-black lg:border lg:border-white' "
              >Landing Pages
              <svg
                x-bind:class="menuOne ? 'rotate-180' : 'rotate-0' "
                class="fill-current transition"
                style="width: 24px; height: 24px"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                ></path>
              </svg>
            </a>
            <!-- DROP DOWN MENU ONE -->
            <div
              class="lg:px-75 z-50 flex w-full flex-col rounded-lg bg-white px-5 py-5 lg:absolute lg:top-20 lg:w-[800px] lg:flex-row lg:flex-wrap lg:py-7 lg:shadow-[0_16px_64px_-15px_rgba(45,96,173,0.15)] xl:w-[950px]"
              x-show="menuOne"
              x-on:click.outside="menuOne = false"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="opacity-0 transform scale-90"
              x-transition:enter-end="opacity-100 transform scale-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="opacity-100 transform scale-100"
              x-transition:leave-end="opacity-0 transform scale-90"
            >
              <!-- ITEM -->
              <a
                class="flex grow flex-col rounded-lg px-5 py-5 hover:bg-gray-50 lg:basis-[248px] xl:px-8"
                href="https://tailwind-css-template-breeze.vercel.app/Landing%20Home"
              >
                <!-- ICON -->
                <div class="relative">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.75 7.5C3.75 6.50544 4.14509 5.55161 4.84835 4.84835C5.55161 4.14509 6.50544 3.75 7.5 3.75H22.5C23.4946 3.75 24.4484 4.14509 25.1517 4.84835C25.8549 5.55161 26.25 6.50544 26.25 7.5V22.5C26.25 23.4946 25.8549 24.4484 25.1517 25.1517C24.4484 25.8549 23.4946 26.25 22.5 26.25H7.5C6.50544 26.25 5.55161 25.8549 4.84835 25.1517C4.14509 24.4484 3.75 23.4946 3.75 22.5V7.5ZM16.25 10C16.25 9.66848 16.1183 9.35054 15.8839 9.11612C15.6495 8.8817 15.3315 8.75 15 8.75C14.6685 8.75 14.3505 8.8817 14.1161 9.11612C13.8817 9.35054 13.75 9.66848 13.75 10V20C13.75 20.3315 13.8817 20.6495 14.1161 20.8839C14.3505 21.1183 14.6685 21.25 15 21.25C15.3315 21.25 15.6495 21.1183 15.8839 20.8839C16.1183 20.6495 16.25 20.3315 16.25 20V10ZM11.25 13.75C11.25 13.4185 11.1183 13.1005 10.8839 12.8661C10.6495 12.6317 10.3315 12.5 10 12.5C9.66848 12.5 9.35054 12.6317 9.11612 12.8661C8.8817 13.1005 8.75 13.4185 8.75 13.75V20C8.75 20.3315 8.8817 20.6495 9.11612 20.8839C9.35054 21.1183 9.66848 21.25 10 21.25C10.3315 21.25 10.6495 21.1183 10.8839 20.8839C11.1183 20.6495 11.25 20.3315 11.25 20V13.75ZM21.25 17.5C21.25 17.1685 21.1183 16.8505 20.8839 16.6161C20.6495 16.3817 20.3315 16.25 20 16.25C19.6685 16.25 19.3505 16.3817 19.1161 16.6161C18.8817 16.8505 18.75 17.1685 18.75 17.5V20C18.75 20.3315 18.8817 20.6495 19.1161 20.8839C19.3505 21.1183 19.6685 21.25 20 21.25C20.3315 21.25 20.6495 21.1183 20.8839 20.8839C21.1183 20.6495 21.25 20.3315 21.25 20V17.5Z"
                      fill="#276EF1"
                    />
                  </svg>
                </div>
                <!-- TEXT -->
                <h2
                  class="font-inter mb-1 mt-5 text-lg font-medium text-[#160042]"
                >
                  Landing 1
                </h2>
                <p
                  class="font-inter max-w-[250px] text-sm text-gray-500 lg:max-w-[400px]"
                >
                  Get a better understanding of where your traffic is coming
                  from
                </p>
              </a>
              <!-- ITEM -->
              <a
                class="flex grow flex-col rounded-lg px-5 py-5 hover:bg-gray-50 lg:basis-[248px] xl:px-8"
                href="https://tailwind-css-template-breeze.vercel.app/Landing%20Home%20V2"
              >
                <!-- ICON -->
                <div class="relative">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.6725 2.26873C13.2324 2.10077 13.8238 2.06603 14.3995 2.16727C14.9752 2.26851 15.5193 2.50294 15.9883 2.85183C16.4573 3.20073 16.8382 3.65443 17.1007 4.17672C17.3632 4.69902 17.4999 5.27544 17.5 5.85998V24.14C17.4999 24.7245 17.3632 25.3009 17.1007 25.8232C16.8382 26.3455 16.4573 26.7992 15.9883 27.1481C15.5193 27.497 14.9752 27.7314 14.3995 27.8327C13.8238 27.9339 13.2324 27.8992 12.6725 27.7312L5.1725 25.4812C4.40013 25.2495 3.72301 24.775 3.2416 24.1281C2.76019 23.4812 2.50013 22.6964 2.5 21.89V8.10998C2.50013 7.3036 2.76019 6.51875 3.2416 5.87184C3.72301 5.22493 4.40013 4.75043 5.1725 4.51873L12.6725 2.26873ZM18.75 4.99998C18.75 4.66846 18.8817 4.35052 19.1161 4.1161C19.3505 3.88168 19.6685 3.74998 20 3.74998H23.75C24.7446 3.74998 25.6984 4.14507 26.4017 4.84833C27.1049 5.55159 27.5 6.50542 27.5 7.49998V8.74998C27.5 9.0815 27.3683 9.39944 27.1339 9.63386C26.8995 9.86828 26.5815 9.99998 26.25 9.99998C25.9185 9.99998 25.6005 9.86828 25.3661 9.63386C25.1317 9.39944 25 9.0815 25 8.74998V7.49998C25 7.16846 24.8683 6.85052 24.6339 6.6161C24.3995 6.38168 24.0815 6.24998 23.75 6.24998H20C19.6685 6.24998 19.3505 6.11828 19.1161 5.88386C18.8817 5.64944 18.75 5.3315 18.75 4.99998ZM26.25 20C26.5815 20 26.8995 20.1317 27.1339 20.3661C27.3683 20.6005 27.5 20.9185 27.5 21.25V22.5C27.5 23.4945 27.1049 24.4484 26.4017 25.1516C25.6984 25.8549 24.7446 26.25 23.75 26.25H20C19.6685 26.25 19.3505 26.1183 19.1161 25.8839C18.8817 25.6494 18.75 25.3315 18.75 25C18.75 24.6685 18.8817 24.3505 19.1161 24.1161C19.3505 23.8817 19.6685 23.75 20 23.75H23.75C24.0815 23.75 24.3995 23.6183 24.6339 23.3839C24.8683 23.1494 25 22.8315 25 22.5V21.25C25 20.9185 25.1317 20.6005 25.3661 20.3661C25.6005 20.1317 25.9185 20 26.25 20ZM11.25 13.75C10.9185 13.75 10.6005 13.8817 10.3661 14.1161C10.1317 14.3505 10 14.6685 10 15C10 15.3315 10.1317 15.6494 10.3661 15.8839C10.6005 16.1183 10.9185 16.25 11.25 16.25H11.2513C11.5828 16.25 11.9007 16.1183 12.1351 15.8839C12.3696 15.6494 12.5013 15.3315 12.5013 15C12.5013 14.6685 12.3696 14.3505 12.1351 14.1161C11.9007 13.8817 11.5828 13.75 11.2513 13.75H11.25Z"
                      fill="#276EF1"
                    />
                    <path
                      d="M26.25 15H20M20 15L22.5 12.5M20 15L22.5 17.5"
                      stroke="#276EF1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <!-- TEXT -->
                <h2
                  class="font-inter mb-1 mt-5 text-lg font-medium text-[#160042]"
                >
                  Landing V2
                </h2>
                <p
                  class="font-inter max-w-[250px] text-sm text-gray-500 lg:max-w-[400px]"
                >
                  Speak directly to your customers in a more meaningful way
                </p>
              </a>
              <!-- ITEM -->
              <a
                class="flex grow flex-col rounded-lg px-5 py-5 hover:bg-gray-50 lg:basis-[248px] xl:px-8"
                href="https://tailwind-css-template-breeze.vercel.app/Landing%20Home%20V3"
              >
                <!-- ICON -->
                <div class="relative">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.25 8.75C26.25 11.5125 21.2125 13.75 15 13.75C8.7875 13.75 3.75 11.5125 3.75 8.75C3.75 5.9875 8.7875 3.75 15 3.75C21.2125 3.75 26.25 5.9875 26.25 8.75Z"
                      fill="#276EF1"
                    />
                    <path
                      d="M26.25 8.75C26.25 11.5125 21.2125 13.75 15 13.75C8.7875 13.75 3.75 11.5125 3.75 8.75M26.25 8.75C26.25 5.9875 21.2125 3.75 15 3.75C8.7875 3.75 3.75 5.9875 3.75 8.75M26.25 8.75V15M3.75 8.75V15M26.25 15C26.25 17.7625 21.2125 20 15 20C8.7875 20 3.75 17.7625 3.75 15M26.25 15V21.25C26.25 24.0125 21.2125 26.25 15 26.25C8.7875 26.25 3.75 24.0125 3.75 21.25V15"
                      stroke="#276EF1"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <!-- TEXT -->
                <h2
                  class="font-inter mb-1 mt-5 text-lg font-medium text-[#160042]"
                >
                  Landing V3
                </h2>
                <p
                  class="font-inter max-w-[250px] text-sm text-gray-500 lg:max-w-[400px]"
                >
                  Build strategic funnels that will drive your customers to
                  convert
                </p>
              </a>
            </div>
          </div>
          <a
            href="https://tailwind-css-template-breeze.vercel.app/About"
            class="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
            >About</a
          >
          <a
            href="https://tailwind-css-template-breeze.vercel.app/Blog"
            class="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
            >Blog</a
          >
          <a
            href="https://tailwind-css-template-breeze.vercel.app/Pricing"
            class="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:bg-gray-50 lg:hover:text-gray-800"
            >Pricing</a
          >
        </div>
        <!-- MENU CONTENT 2 -->
        <div
          class="flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 mt-8 lg:mt-0"
          x-bind:class="isOpen ? 'show' : 'hidden'"
        >
          <a
            href="https://tailwind-css-template-breeze.vercel.app/Login"
            class="font-inter rounded-lg lg:px-6 lg:py-4 lg:hover:text-gray-800"
            >Sign Up</a
          >
          <a
            href="https://tailspark.co/"
            target="_blank"
            class="flex max-w-[300px] flex-row items-center border-2 border-black bg-white px-8 py-4 font-semibold text-black transition [box-shadow:rgb(0,_0,0)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p class="mr-6 font-bold">Free Components</p>
            <svg
              fill="currentColor"
              class="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon
                points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
              ></polygon>
            </svg>
          </a>
        </div>
        <!-- BURGER MENU -->
        <a
          href="#"
          class="absolute right-5 lg:hidden"
          x-on:click.prevent="isOpen = !isOpen"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 12H20.25"
              stroke="#160042"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.75 6H20.25"
              stroke="#160042"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3.75 18H20.25"
              stroke="#160042"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </nav>

    <header>
      <!-- Hero Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- Component -->
        <div
          class="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <!-- Hero Content -->
          <div class="flex flex-col">
            <!-- Hero Title -->
            <h1 class="mb-4 text-4xl font-bold md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p class="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <!-- Hero Button -->
            <div class="flex items-center">
              <a
                href="#"
                class="mr-5 flex items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
              >
                <p class="mr-6 font-bold">Let's Talk</p>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 flex-none"
                >
                  <title>Arrow Right</title>
                  <polygon
                    points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
                  ></polygon>
                </svg>
              </a>
              <a href="#" class="flex font-bold">
                <p class="text-black">View Showreel</p>
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357752f71727ed3edf9213b_Vector (5).svg"
                  alt=""
                  class="ml-2 inline-block"
                />
              </a>
            </div>
          </div>
          <!-- Hero Image -->
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b560b014d2b7cb8452be7_Frame 48031-3.jpg"
            alt=""
            class="inline-block h-full w-full max-w-[640px]"
          />
        </div>
      </div>
    </header>

    <!--Section Logo Cloud -->
    <section>
      <!--Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-8 md:px-10 pb-24">
        <!-- Component -->
        <div
          class="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6"
        >
          <img
            class="mx-auto"
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe26718fe228c33ca3b_Microsoft%20Logo.svg"
            alt=""
          />
          <img
            class="mx-auto"
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2b505e19a1c8ee724_PayPal%20Logo.svg"
            alt=""
          />
          <img
            class="mx-auto"
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdca5c3b6500a5eb898_Google%20Logo.svg"
            alt=""
          />
          <img
            class="mx-auto"
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fdf5ff5f86ee7d119de_Chase%20Logo.svg"
            alt=""
          />
          <img
            class="mx-auto"
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b3fe2a5c3b692285eb8bc_Walmart%20Logo.svg"
            alt=""
          />
        </div>
      </div>
    </section>

    <!-- Section HIW -->
    <section>
      <!-- Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- Text -->
        <div data-aos="fade-up" data-aos-duration="900">
          <p class="text-center text-sm font-bold uppercase">3 easy steps</p>
          <h2 class="text-center text-3xl font-bold md:text-5xl">
            How it works
          </h2>
          <p class="mx-auto mb-12 mt-4 max-w-lg text-center text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <!-- Content -->
        <div
          class="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div
            class="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]"
            >
              <p class="text-xl font-bold text-white">1</p>
            </div>
            <p class="text-xl font-semibold">Find Component</p>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          <div
            class="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]"
            >
              <p class="text-xl font-bold text-white">2</p>
            </div>
            <p class="text-xl font-semibold">Copy and Paste</p>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          <div
            class="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-full bg-[#276ef1]"
            >
              <p class="text-xl font-bold text-white">3</p>
            </div>
            <p class="text-xl font-semibold">Done</p>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Features -->
    <section>
      <!-- Features Container -->
      <div
        class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- Features Grid -->
        <div class="grid justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
          <!-- Features Content -->
          <div class="flex flex-col items-start lg:justify-center">
            <h2 class="mb-4 text-3xl font-bold md:text-5xl">
              Never miss any task
            </h2>
            <p class="mb-6 max-w-[480px] text-[#647084] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              class="flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
            >
              <p class="mr-6 font-bold">Get Started</p>
              <svg
                fill="currentColor"
                class="h-4 w-4 flex-none"
                viewBox="0 0 20 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Arrow Right</title>
                <polygon
                  points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
                ></polygon>
              </svg>
            </a>
          </div>
          <!-- Features Image -->
          <img
            src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b53f0b505e1e0748fc65e_Frame%2048029.png"
            alt=""
            class="inline-block h-full w-full max-w-[640px]"
          />
        </div>
      </div>
    </section>

    <!-- Section Features -->
    <section>
      <!-- Features Container -->
      <div
        class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- Features Grid -->
        <div
          class="flex flex-col-reverse gap-8 sm:gap-20 lg:grid lg:grid-cols-2"
        >
          <!-- Features Image -->
          <div>
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b549c924696d892dd122f_Frame 48028-4.png"
              alt=""
              class="inline-block h-full w-full max-w-[640px]"
            />
          </div>
          <!-- Features Content -->
          <div class="flex flex-col items-start lg:justify-center">
            <!-- Features Title -->
            <h2 class="mb-4 text-3xl font-bold md:text-5xl">
              Understand sales performance better
            </h2>
            <div class="max-w-[480px]">
              <p class="text-[#647084]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
            </div>
            <!-- Features Devider -->
            <div
              class="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"
            ></div>
            <!-- Features List -->
            <ul class="flex flex-col items-start">
              <li class="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </li>
              <li class="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </li>
              <li class="mb-2 flex items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </li>
              <li class="flex items-center">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Testimonial -->
    <section class="bg-black text-white">
      <!-- Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- Title -->
        <h2
          class="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          What our clients are saying
        </h2>
        <!-- Testimonial List -->
        <ul
          class="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <li class="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              class="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div class="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                alt=""
                class="mr-4 h-16 w-16"
              />
              <div class="flex flex-col">
                <h6 class="font-bold">Laila Bahar</h6>
                <p class="text-sm">Designer</p>
              </div>
            </div>
          </li>
          <li class="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              class="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div class="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png"
                alt=""
                class="mr-4 h-16 w-16"
              />
              <div class="flex flex-col">
                <h6 class="font-bold">Laila Bahar</h6>
                <p class="text-sm">Designer</p>
              </div>
            </div>
          </li>
          <li class="grid gap-8 bg-[#1f1f1f] p-8 md:p-10">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cd455b21e96db53b7ef3_Vector-8.svg"
              alt=""
              class="inline-block max-w-[128px]"
            />
            <p>
              “Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"
            </p>
            <div class="flex">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                alt=""
                class="mr-4 h-16 w-16"
              />
              <div class="flex flex-col">
                <h6 class="text-base font-bold">Laila Bahar</h6>
                <p class="text-sm">Designer</p>
              </div>
            </div>
          </li>
        </ul>
        <!-- Buttons-->
        <div class="flex justify-center flex-col sm:flex-row">
          <a
            href="#"
            class="flex items-center justify-center border-[1.5px] border-solid border-white py-4 text-center font-semibold px-8 mr-5 lg:mr-8 mb-4 sm:mb-0"
          >
            <p class="mr-6 font-bold">Get Started</p>
            <svg
              class="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon
                points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
              ></polygon>
            </svg>
          </a>
          <a
            href="#"
            class="flex items-center justify-center border-[1.5px] border-solid border-white py-4 text-center font-semibold px-8 mr-5 lg:mr-8"
          >
            <p class="font-bold">Book a Demo</p>
          </a>
        </div>
      </div>
    </section>

    <!-- Section Pricing -->
    <section>
      <!-- Pricing Container-->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- Pricing Title -->
        <div data-aos="fade-up" data-aos-duration="900">
          <h2 class="text-center text-3xl font-bold md:text-5xl">
            Get Started
          </h2>
          <p
            class="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16"
          >
            30 days money-back guarantee
          </p>
        </div>
        <!-- Pricing Content -->
        <ul
          class="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <!-- Pricing Item -->
          <li
            class="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] p-8"
          >
            <div class="mb-4 rounded-md bg-[#f2f2f7] px-4 py-1.5">
              <h2 class="text-sm font-bold">BASIC</h2>
            </div>
            <p class="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit
            </p>
            <p
              class="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8"
            >
              $99<span class="text-sm font-light">/year</span>
            </p>
            <a
              href="#"
              class="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8"
            >
              <div class="mr-6 font-bold">Get Started</div>
              <div class="h-4 w-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon
                    points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
                  ></polygon>
                </svg>
              </div>
            </a>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Monthly Free Exclusive</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Customer Support</p>
            </div>
          </li>
          <!-- Pricing Item -->
          <li
            class="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] bg-[#f2f2f7] p-8"
          >
            <div class="mb-4 rounded-md bg-[#abc4f5] px-4 py-1.5">
              <p class="text-sm font-bold">GROWTH</p>
            </div>
            <p class="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit
            </p>
            <h2
              class="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8"
            >
              $149<span class="text-sm font-light">/year</span>
            </h2>
            <a
              href="#"
              class="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mb-6 lg:mb-8"
            >
              <div class="mr-6 font-bold">Get Started</div>
              <div class="h-4 w-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon
                    points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
                  ></polygon>
                </svg>
              </div>
            </a>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Monthly Free Exclusive</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Customer Support</p>
            </div>
          </li>
          <!-- Pricing Item -->
          <li
            class="flex max-w-md flex-col items-start justify-self-center border border-solid border-[#dfdfdf] p-8"
          >
            <div class="mb-4 rounded-md bg-[#f2f2f7] px-4 py-1.5">
              <p class="text-sm font-bold">PREMIUM</p>
            </div>
            <p class="mb-6 font-light text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit
            </p>
            <h2
              class="mb-5 text-left text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8"
            >
              $299<span class="text-sm font-light">/year</span>
            </h2>
            <a
              href="#"
              class="mb-5 flex w-full grid-cols-2 flex-row items-center justify-center border-2 border-solid border-black px-8 py-4 text-center font-semibold text-black transition [box-shadow:rgb(0,_0,_0)_-8px_8px] hover:[box-shadow:rgb(0,_0,_0)_0px_0px] md:mb-6 lg:mb-8"
            >
              <div class="mr-6 font-bold">Get Started</div>
              <div class="h-4 w-4">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Arrow Right</title>
                  <polygon
                    points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
                  ></polygon>
                </svg>
              </div>
            </a>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Premium Designs</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Exclusive Freebies</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Monthly Free Exclusive</p>
            </div>
            <div class="mt-2 flex flex-row items-center text-left">
              <svg
                class="mr-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_911_1122)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00008 0.666656C3.95008 0.666656 0.666748 3.94999 0.666748 7.99999C0.666748 12.05 3.95008 15.3333 8.00008 15.3333C12.0501 15.3333 15.3334 12.05 15.3334 7.99999C15.3334 3.94999 12.0501 0.666656 8.00008 0.666656ZM11.1787 6.75999C11.2373 6.69308 11.2818 6.61515 11.3098 6.53077C11.3378 6.44639 11.3486 6.35727 11.3416 6.26865C11.3346 6.18003 11.31 6.0937 11.2691 6.01474C11.2283 5.93578 11.1721 5.86579 11.1038 5.80888C11.0355 5.75198 10.9565 5.7093 10.8715 5.68336C10.7865 5.65743 10.6971 5.64876 10.6087 5.65787C10.5202 5.66698 10.4345 5.69369 10.3566 5.73641C10.2786 5.77914 10.21 5.83702 10.1547 5.90666L7.28808 9.34599L5.80475 7.86199C5.67901 7.74055 5.51061 7.67335 5.33581 7.67487C5.16102 7.67639 4.99381 7.7465 4.8702 7.87011C4.7466 7.99372 4.67648 8.16092 4.67496 8.33572C4.67345 8.51052 4.74064 8.67892 4.86208 8.80466L6.86208 10.8047C6.92759 10.8701 7.00601 10.9212 7.09236 10.9547C7.17871 10.9882 7.27108 11.0033 7.36359 10.9991C7.45611 10.9949 7.54673 10.9715 7.62969 10.9303C7.71265 10.8891 7.78611 10.8311 7.84541 10.76L11.1787 6.75999Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_911_1122">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p class="">Customer Support</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- Section FAQ -->
    <section>
      <!-- FAQ Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- FAQ Title -->
        <div
          class="mb-8 text-center md:mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h2 class="text-3xl font-bold md:text-5xl">Frequently Asked</h2>
          <p class="mx-auto mt-4 max-w-lg text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <!-- FAQ Content -->
        <div
          class="mb-12 flex flex-wrap justify-center gap-4 lg:grid-cols-2"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
          <!-- FAQ Item -->
          <div
            class="mb-6 border border-solid border-[#dfdfdf] p-8 lg:max-w-xl"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How this theme is different from others in market?
              </p>
              <div
                class="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center"
              >
                <div
                  x-bind:class="open ? 'transform rotate-90' : ''"
                  class="absolute h-5 w-0.5 bg-[#276ef1] transition-transform"
                ></div>
                <div class="h-0.5 w-5 bg-[#276ef1]"></div>
              </div>
            </div>
            <p
              class="mb-4 mt-4"
              x-show="open"
              x-transition:enter="transition ease-out duration-300"
              x-transition:enter-start="transform translate-y--10 opacity-0"
              x-transition:enter-end="transform translate-y-0 opacity-100"
              x-transition:leave="transition ease-in duration-300"
              x-transition:leave-start="transform translate-y-0 opacity-100"
              x-transition:leave-end="transform translate-y--10 opacity-0"
            >
              Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet
              turpis. Fusce at enim quis neque viverra convallis. Vivamus ut
              elementum leo, eget tempus nisl. Sed viverra enim ac turpis
              posuere consectetur. Sed enim nibh, consequat vitae lacus eu,
              ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet
              turpis.
            </p>
          </div>
        </div>
        <!-- FAQ Text -->
        <p class="text-center" data-aos="fade-up" data-aos-duration="900">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#">customer support team</a>.
        </p>
      </div>
    </section>

    <!-- Section CTA -->
    <section>
      <!-- CTA Container -->
      <div
        class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- CTA Content -->
        <div
          class="flex w-full flex-col items-center bg-[#f2f2f7] px-6 py-16 text-center md:py-24"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <!-- CTA Title -->
          <h2
            class="mb-6 flex-col text-3xl font-bold md:mb-10 md:text-5xl lg:mb-12 max-w-[600px]"
          >
            Lightning Fast Webflow Dev Made Easy
          </h2>
          <!-- CTA List -->
          <div class="mx-auto">
            <ul
              class="mb-6 flex flex-col flex-nowrap gap-3 md:mb-10 md:flex-row lg:mb-12"
            >
              <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p class="">300+ UI Blocks</p>
              </li>
              <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p class="">Fully responsive</p>
              </li>
              <li class="ml-2 mr-2 flex flex-row items-center md:mx-4">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358be3a3c2bb8076f2bad62_Vector-6.svg"
                  alt=""
                  class="mr-2 inline-block h-4 w-4"
                />
                <p class="">Just copy & paste</p>
              </li>
            </ul>
          </div>
          <!-- CTA Button -->
          <a
            href="#"
            class="mb-4 flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
          >
            <p class="mr-6 font-bold">Get Started</p>
            <svg
              fill="currentColor"
              class="h-4 w-4 flex-none"
              viewBox="0 0 20 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Arrow Right</title>
              <polygon
                points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"
              ></polygon>
            </svg>
          </a>
          <p class="">No credit card required.</p>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- TOP CONTAINER -->
        <div class="flex w-full flex-col lg:flex-row lg:justify-between">
          <!-- LEFT DIV -->
          <div class="flex flex-col lg:mr-20">
            <!-- LOGO -->
            <a href="#" class="inline-block max-w-full">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b61da1d90b7ae83b7209a_Group%2047874-3.png"
                alt=""
                class="inline-block max-h-10"
              />
            </a>
            <p
              class="font-inter my-4 max-w-[350px] text-base font-light text-gray-500"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut al
            </p>
            <!-- NEWSLETTER & EMAIL -->
            <div class="flex flex-col">
              <form action="" class="mb-10 mt-5 max-w-[421px]">
                <div class="relative">
                  <label for="email" class="font-inter font-medium text-black"
                    >SUBSCRIBE TO NEWSLETTER</label
                  >
                  <input
                    type="email"
                    class="font-inter relative mt-4 w-full rounded-md bg-[#f2f2f7] px-6 py-4 text-base"
                    placeholder="Enter your email"
                    name="email"
                  />
                  <button
                    type="submit"
                    class="absolute right-[15px] top-[55px]"
                  >
                    <img
                      src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358fcc48819ea6fe59c1d01_PaperPlaneTilt.svg"
                      alt=""
                      class=""
                    />
                  </button>
                </div>
              </form>
              <div>
                <h3
                  for="email"
                  class="font-inter mb-4 mt-8 font-medium text-black"
                >
                  EMAIL US
                </h3>
                <p class="font-inter text-base">support@tailspark.co</p>
              </div>
            </div>
          </div>
          <!-- RIGHT DIV -->
          <div class="mt-7 max-w-[700px] grow justify-end lg:flex lg:flex-row">
            <!-- FOOTER LINKS -->
            <div
              class="flex w-full flex-row flex-wrap lg:flex-nowrap lg:items-start lg:justify-end"
            >
              <!-- LINK BLOCK -->
              <div class="my-5 mr-8 flex flex-col space-y-5 lg:ml-10">
                <h2 class="font-inter font-medium text-black">SOLUTION</h2>
                <a href="" class="font-inter font-light text-gray-500"
                  >Marketing</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >Analytics</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >Commerce</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >Insights</a
                >
              </div>
              <!-- LINK BLOCK -->
              <div class="my-5 mr-8 flex flex-col space-y-5 lg:ml-10">
                <h2 class="font-inter font-medium text-black">SUPPORT</h2>
                <a href="" class="font-inter font-light text-gray-500"
                  >Pricing</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >Documentation</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >Guides</a
                >
                <a href="" class="font-inter font-light text-gray-500"
                  >API Status</a
                >
              </div>
              <!-- LINK BLOCK -->
              <div class="my-5 mr-8 flex flex-col space-y-5 lg:ml-10">
                <h2 class="font-inter font-medium text-black">COMPANY</h2>
                <a href="" class="font-inter font-light text-gray-500">About</a>
                <a href="" class="font-inter font-light text-gray-500">Blog</a>
                <a href="" class="font-inter font-light text-gray-500">Jobs</a>
                <a href="" class="font-inter font-light text-gray-500">Press</a>
                <a href="" class="font-inter font-light text-gray-500"
                  >Partners</a
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="mb-14 mt-16 w-full [border-bottom:1px_solid_rgb(100,_112,_132)]"
        ></div>
        <!-- BOTTOM CONTAINER -->
        <div class="mt-20 lg:flex lg:flex-row-reverse lg:justify-between">
          <!-- SOCIAL MEDIA ICONS -->
          <div class="lg: mb-8 mt-6 flex flex-row">
            <a href="" class="mr-4 text-black transition hover:text-gray-400">
              <svg
                class="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.25C9.4791 2.25005 7.05619 3.22647 5.23968 4.97439C3.42317 6.72231 2.35426 9.10586 2.25723 11.6249C2.1602 14.1439 3.0426 16.6026 4.71928 18.4851C6.39595 20.3676 8.73657 21.5275 11.25 21.7214V14.2501H9C8.80109 14.2501 8.61032 14.1711 8.46967 14.0304C8.32902 13.8898 8.25 13.699 8.25 13.5001C8.25 13.3012 8.32902 13.1104 8.46967 12.9698C8.61032 12.8291 8.80109 12.7501 9 12.7501H11.25V10.5001C11.2509 9.70472 11.5673 8.94218 12.1297 8.37977C12.6921 7.81736 13.4546 7.501 14.25 7.50009H15.75C15.9489 7.50009 16.1397 7.57911 16.2803 7.71976C16.421 7.86041 16.5 8.05118 16.5 8.25009C16.5 8.449 16.421 8.63977 16.2803 8.78042C16.1397 8.92107 15.9489 9.00009 15.75 9.00009H14.25C13.8523 9.00054 13.471 9.15872 13.1898 9.43993C12.9086 9.72114 12.7505 10.1024 12.75 10.5001V12.7501H15C15.1989 12.7501 15.3897 12.8291 15.5303 12.9698C15.671 13.1104 15.75 13.3012 15.75 13.5001C15.75 13.699 15.671 13.8898 15.5303 14.0304C15.3897 14.1711 15.1989 14.2501 15 14.2501H12.75V21.7214C15.2634 21.5275 17.604 20.3676 19.2807 18.4851C20.9574 16.6026 21.8398 14.1439 21.7427 11.6249C21.6457 9.10587 20.5768 6.72232 18.7603 4.9744C16.9438 3.22649 14.5209 2.25006 12 2.25Z"
                ></path>
              </svg>
            </a>
            <a href="" class="mx-4 text-black transition hover:text-gray-400">
              <svg
                class="fill-current"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                ></path>
                <path
                  d="M16.125 2.625H7.875C6.4831 2.62658 5.14865 3.18021 4.16443 4.16443C3.18021 5.14865 2.62658 6.4831 2.625 7.875V16.125C2.62658 17.5169 3.18021 18.8513 4.16443 19.8356C5.14865 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14865 19.8356 4.16443C18.8513 3.18021 17.5169 2.62658 16.125 2.625ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4987 13.1931 16.0241 14.3369 15.1805 15.1805C14.3369 16.0241 13.1931 16.4987 12 16.5ZM16.875 8.25C16.6525 8.25 16.435 8.18402 16.25 8.0604C16.065 7.93679 15.9208 7.76109 15.8356 7.55552C15.7505 7.34995 15.7282 7.12375 15.7716 6.90552C15.815 6.68729 15.9222 6.48684 16.0795 6.3295C16.2368 6.17217 16.4373 6.06502 16.6555 6.02162C16.8738 5.97821 17.1 6.00049 17.3055 6.08564C17.5111 6.17078 17.6868 6.31498 17.8104 6.49998C17.934 6.68499 18 6.9025 18 7.125C18 7.42337 17.8815 7.70952 17.6705 7.9205C17.4595 8.13147 17.1734 8.25 16.875 8.25Z"
                ></path>
              </svg>
            </a>
            <a href="" class="mx-4 text-black transition hover:text-gray-400">
              <svg
                class="fill-current"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5952 12.4998C22.1776 11.988 22.5489 11.2779 22.6367 10.5076C22.7245 9.73723 22.5226 8.96177 22.0703 8.33205C21.618 7.70233 20.9476 7.2634 20.1895 7.10064C19.4315 6.93788 18.64 7.06293 17.969 7.45147V5.46854C17.9694 4.83357 17.7763 4.21356 17.4153 3.69117C17.0544 3.16878 16.5427 2.76884 15.9486 2.54466C15.3546 2.32048 14.7063 2.28271 14.0902 2.4364C13.4741 2.59009 12.9195 2.92793 12.5003 3.40487C11.9885 2.82243 11.2784 2.45118 10.5081 2.36336C9.73772 2.27555 8.96225 2.47744 8.33253 2.92976C7.70282 3.38208 7.26388 4.05249 7.10112 4.81054C6.93836 5.5686 7.06342 6.36009 7.45197 7.03104H5.46904C4.83406 7.03063 4.21405 7.22379 3.69166 7.58476C3.16927 7.94573 2.76933 8.45736 2.54515 9.05144C2.32097 9.64552 2.28321 10.2938 2.4369 10.9099C2.59059 11.526 2.92843 12.0806 3.40538 12.4998C2.82293 13.0115 2.45168 13.7217 2.36386 14.492C2.27603 15.2624 2.47792 16.0378 2.93024 16.6676C3.38257 17.2973 4.05297 17.7362 4.81103 17.899C5.56909 18.0617 6.36059 17.9367 7.03154 17.5481V19.531C7.03113 20.166 7.22428 20.786 7.58525 21.3084C7.94622 21.8308 8.45785 22.2307 9.05193 22.4549C9.64602 22.6791 10.2943 22.7169 10.9104 22.5632C11.5265 22.4095 12.0811 22.0717 12.5003 21.5947C13.012 22.1772 13.7222 22.5484 14.4925 22.6362C15.2629 22.724 16.0383 22.5221 16.668 22.0698C17.2978 21.6175 17.7367 20.9471 17.8995 20.189C18.0622 19.431 17.9372 18.6395 17.5486 17.9685H19.5315C20.1665 17.969 20.7865 17.7758 21.3089 17.4148C21.8313 17.0539 22.2312 16.5422 22.4554 15.9481C22.6796 15.3541 22.7174 14.7058 22.5637 14.0897C22.41 13.4736 22.0721 12.919 21.5952 12.4998ZM8.59404 5.46854C8.59404 5.05414 8.75866 4.65671 9.05168 4.36369C9.34471 4.07066 9.74214 3.90604 10.1565 3.90604C10.5709 3.90604 10.9684 4.07066 11.2614 4.36369C11.5544 4.65671 11.719 5.05414 11.719 5.46854V7.03104H10.1565C9.74228 7.03057 9.34513 6.8658 9.05221 6.57287C8.75928 6.27995 8.59451 5.8828 8.59404 5.46854ZM3.90654 10.156C3.90701 9.74179 4.07178 9.34463 4.36471 9.05171C4.65763 8.75879 5.05478 8.59402 5.46904 8.59354H10.1565C10.5708 8.59402 10.9679 8.75879 11.2609 9.05171C11.5538 9.34463 11.7186 9.74179 11.719 10.156V11.7185H5.46904C5.05478 11.7181 4.65763 11.5533 4.36471 11.2604C4.07178 10.9675 3.90701 10.5703 3.90654 10.156ZM16.4065 19.531C16.4065 19.9454 16.2419 20.3429 15.9489 20.6359C15.6559 20.9289 15.2584 21.0935 14.844 21.0935C14.4296 21.0935 14.0322 20.9289 13.7392 20.6359C13.4462 20.3429 13.2815 19.9454 13.2815 19.531V17.9685H14.844C15.2583 17.969 15.6554 18.1338 15.9484 18.4267C16.2413 18.7196 16.4061 19.1168 16.4065 19.531ZM19.5315 16.406H14.844C14.4298 16.4056 14.0326 16.2408 13.7397 15.9479C13.4468 15.655 13.282 15.2578 13.2815 14.8435V13.281H19.5315C19.9459 13.281 20.3434 13.4457 20.6364 13.7387C20.9294 14.0317 21.094 14.4291 21.094 14.8435C21.094 15.2579 20.9294 15.6554 20.6364 15.9484C20.3434 16.2414 19.9459 16.406 19.5315 16.406Z"
                ></path>
              </svg>
            </a>
            <a href="" class="mx-4 text-black transition hover:text-gray-400">
              <svg
                class="fill-current"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9883 7.58391L21.0426 10.5297C20.4545 17.354 14.6994 22.6565 7.81089 22.6565C6.39249 22.6565 5.22357 22.4316 4.33651 21.9881C3.62063 21.6301 3.32738 21.246 3.25461 21.1367C3.18933 21.0388 3.14702 20.9274 3.13083 20.8108C3.11464 20.6943 3.12499 20.5755 3.16112 20.4635C3.19724 20.3515 3.2582 20.2491 3.33945 20.164C3.42069 20.0789 3.52012 20.0132 3.63031 19.9718C3.65544 19.9624 5.95923 19.0775 7.44821 17.3929C6.52206 16.7334 5.70694 15.9305 5.0335 15.0145C3.69483 13.1977 2.27901 10.0427 3.13598 5.32923C3.16148 5.18895 3.22489 5.05833 3.31932 4.95152C3.41376 4.8447 3.53562 4.76577 3.67171 4.72326C3.8078 4.68075 3.95293 4.67629 4.09137 4.71037C4.22981 4.74445 4.35629 4.81575 4.4571 4.91657C4.49153 4.9509 7.74246 8.15592 11.7166 9.19118L11.7171 8.59361C11.7256 7.34276 12.2303 6.14644 13.1204 5.26759C14.0105 4.38874 15.2132 3.89929 16.4641 3.90682C17.2766 3.91808 18.0724 4.1399 18.7737 4.55063C19.4749 4.96136 20.0576 5.54694 20.4649 6.25019L23.4359 6.25024C23.5904 6.25024 23.7414 6.29606 23.8699 6.3819C23.9984 6.46774 24.0985 6.58975 24.1577 6.73251C24.2168 6.87526 24.2323 7.03234 24.2021 7.18389C24.172 7.33543 24.0976 7.47464 23.9883 7.58391Z"
                ></path>
              </svg>
            </a>
          </div>
          <p class="font-inter text-sm text-gray-500 lg:mt-0">
            © Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>

<style></style>
