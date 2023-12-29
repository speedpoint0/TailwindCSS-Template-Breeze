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
      <div
        class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- Component -->
        <div
          class="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2"
        >
          <!-- Hero Content -->
          <div class="flex max-w-[720px] flex-col items-start">
            <!-- Hero Title -->
            <h1 class="mb-4 text-4xl font-bold md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p class="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <!-- Hero Button -->
            <a
              href="#"
              class="mb-8 flex flex-row bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mb-12 md:mr-6 lg:mb-16 lg:mr-8"
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
            <!-- Hero Comment -->
            <div
              class="max-w-xs rounded-br-full rounded-tl-full rounded-tr-full bg-[#f2f2f7] px-8 py-4"
            >
              <p class="mb-4 text-xs text-[#636262]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus
              </p>
              <div
                class="flex flex-col items-start sm:flex-row sm:justify-between"
              >
                <div class="flex">
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a0f4f5f1f0a93f8aba0d7_Ellipse 17-1.png"
                    alt=""
                    class="mr-2 inline-block h-7 w-7 sm:h-7"
                  />
                  <p class="text-sm font-bold">Aleeyah</p>
                </div>
                <div class="flex">
                  <p class="mr-2 text-sm font-bold">5.0</p>
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    class="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    class="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    class="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    class="mr-1.5 inline-block w-4"
                  />
                  <img
                    src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                    alt=""
                    class="mr-1.5 inline-block w-4"
                  />
                </div>
              </div>
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

    <!-- Section Facts -->
    <section>
      <!-- Facts Container -->
      <div
        class="mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- Facts Title -->
        <h2 class="mb-12 text-center text-3xl font-bold md:text-5xl">
          We get results
        </h2>
        <!-- Facts Content -->
        <div
          class="grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6"
        >
          <div class="relative rounded-md p-8 md:p-10">
            <h3 class="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              1.5M
            </h3>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
            <!-- Devider -->
            <div
              class="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block"
            ></div>
          </div>
          <div class="relative rounded-md p-8 md:p-10">
            <h3 class="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              41%
            </h3>
            <!-- Devider -->
            <div
              class="absolute bottom-0 left-auto right-0 top-[29%] hidden h-2/5 [border-right:1px_solid_rgb(230,_230,_230)] sm:block"
            ></div>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
          </div>
          <div class="relative rounded-md p-8 md:p-10">
            <h3 class="mb-4 text-3xl font-bold text-[#276ef1] md:text-5xl">
              3657+
            </h3>
            <p class="text-sm text-[#647084]">
              Lorem ipsum dolor sit amet, &nbsp;elit ut aliquam, purus sit amet
              luctus venenatis elit ut aliquam, purus sit amet luctus
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Pricing -->
    <section>
      <!-- Pricing Container-->
      <div
        class="mx-auto w-full max-w-7xl px-5 pb-16 md:px-10 md:pb-24 lg:pb-32"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <!-- Pricing Title -->
        <h2 class="text-center text-3xl font-bold md:text-5xl">Get Started</h2>
        <p
          class="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16"
        >
          30 days money-back guarantee
        </p>
        <!-- Pricing Content -->
        <ul class="grid w-full grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
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

    <!-- Section Features -->
    <section class="bg-black">
      <!-- Features Container -->
      <div
        class="mx-auto max-w-7xl px-5 py-16 text-white md:px-10 md:py-24 lg:py-32"
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
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635b549aee8eff95f9c0e45a_Frame%2048028-3.png"
              alt=""
              class="inline-block h-full w-full max-w-[640px]"
            />
          </div>
          <!-- Features Content -->
          <div class="flex flex-col items-start lg:justify-center">
            <h2 class="mb-4 text-3xl font-bold md:text-5xl">
              Understand sales performance better
            </h2>
            <p class="mb-6 max-w-[480px] md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              class="flex flex-row items-center border-[1.5px] border-solid border-white px-8 py-4 font-semibold text-white"
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
        </div>
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
          <p class="text-sm font-bold uppercase text-[#276ef1]">FAQS</p>
          <h2 class="text-3xl font-bold md:text-5xl">Frequently Asked</h2>
          <p class="mx-auto mt-4 max-w-lg text-[#647084]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
        </div>
        <!-- FAQ Content -->
        <div
          class="mb-12 flex flex-col items-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <!-- FAQ Item -->
          <div
            class="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between lg:w-[830px] md:w-[630px]"
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
              class="my-4"
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
            class="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between lg:w-[830px] md:w-[630px]"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                What is your policy on distributon of Flowspark assets?
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
              class="my-4"
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
            class="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between lg:w-[830px] md:w-[630px]"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">
                How can I contribute to Flowspark?
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
              class="my-4"
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
            class="mb-6 max-w-4xl border-b-[2px] border-[#dfdfdf] p-8"
            x-data="{ open: false }"
          >
            <div
              class="flex cursor-pointer justify-between lg:w-[830px] md:w-[630px]"
              x-on:click.prevent="open = !open"
            >
              <p class="text-xl font-bold">What other themes do you have?</p>
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
              class="my-4"
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
        <p class="text-center">
          Can’t find the answer you’re looking for? Reach out to our
          <a href="#">customer support team</a>.
        </p>
      </div>
    </section>

    <footer class="block bg-black">
      <!-- Container -->
      <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <!-- Component -->
        <div
          class="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start"
        >
          <div
            class="max-[767px]: w-full max-w-[650px] max-[991px]:mr-4 max-[991px]:flex-initial"
          >
            <h2 class="text-3xl text-white font-bold md:text-5xl">
              Lightning Fast Webflow Dev made easy
            </h2>
          </div>
          <div
            class="max-[767px]: max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:mt-8"
          >
            <div class="mb-4 flex max-w-[272px] items-start justify-start">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e257ec977d799ff999_MapPin-2.svg"
                alt=""
                class="mr-3 inline-block"
              />
              <p class="text-[#636262] max-[479px]:text-sm">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </p>
            </div>
            <div class="mb-4 flex max-w-[272px] items-start justify-start">
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f6e24e55dd49a541fd06_EnvelopeSimple-3.svg"
                alt=""
                class="mr-3 inline-block"
              />
              <p class="text-[#636262] max-[479px]:text-sm">
                support@flowspark.co
              </p>
            </div>
          </div>
        </div>
        <div class="mb-14 mt-16 w-full [border-bottom:0.3px_solid_white]"></div>
        <div
          class="flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse"
        >
          <div
            class="max-[991px]: text-center font-semibold max-[991px]:py-1 max-[479px]:mb-4 sm:text-center"
          >
            <a
              href="#"
              class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              >About</a
            >
            <a
              href="#"
              class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              >Features</a
            >
            <a
              href="#"
              class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              >Works</a
            >
            <a
              href="#"
              class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              >Support</a
            >
            <a
              href="#"
              class="inline-block py-1.5 pr-6 font-normal text-[#636262] transition hover:text-[#276EF1] sm:py-2 sm:pr-6 lg:pr-12"
              >Help</a
            >
          </div>
          <div class="max-[991px]:flex-none">
            <p class="text-[#636262] max-[479px]:text-sm">
              © Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
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
