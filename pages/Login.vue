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
    <!-- Section SING IN -->
    <section>
      <!-- Container -->
      <div cl ass="grid md:h-screen md:grid-cols-2">
        <!-- Component -->
        <div class="flex flex-col items-center justify-center bg-white">
          <!-- Wrapper -->
          <div
            class="max-w-lg px-5 pb-16 text-center md:px-10 md:pb-24 lg:pb-32"
          >
            <!-- Title -->
            <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-5xl">
              Start your 14-day free trial
            </h2>
            <!-- Form -->
            <form
              class="mx-auto mb-4 max-w-sm pb-4"
              name="wf-form-password"
              method="get"
            >
              <div class="relative">
                <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f190b7e37f878_EnvelopeSimple.svg"
                  class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                />
                <input
                  type="email"
                  class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                  maxlength="256"
                  name="name"
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div class="relative mb-4">
                <img
                  alt=""
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19601037f879_Lock-2.svg"
                  class="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
                />
                <input
                  type="password"
                  class="mb-4 block h-9 w-full border border-black bg-[#f2f2f7] px-3 py-6 pl-14 text-sm text-[#333333]"
                  placeholder="Password (min 8 characters)"
                  required=""
                />
              </div>
              <!-- Сheckbox -->
              <label class="mb-6 flex items-center pb-12 font-medium lg:mb-1">
                <input type="checkbox" name="checkbox" />
                <span
                  class="ml-4 inline-block cursor-pointer text-sm"
                  for="checkbox"
                  >I agree with the
                  <a href="#" class="font-bold text-[#0b0b1f]"
                    >Terms &amp; Conditions</a
                  >
                </span>
              </label>
              <!-- Button -->
              <a
                href="#"
                class="flex items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition [box-shadow:rgb(171,_196,_245)_-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]"
              >
                <p class="mr-6 font-bold">Join Flowspark</p>
                <svg
                  class="h-4 w-4 flex-none"
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
            </form>
            <p class="text-sm text-[#636262]">
              Already have an account?
              <a href="#" class="text-sm font-bold text-black">Login now</a>
            </p>
          </div>
        </div>
        <!-- Component -->
        <div class="flex flex-col items-center justify-center bg-[#f2f2f7]">
          <!-- Wrapper -->
          <div class="max-w-lg px-5 py-16 md:px-10 md:py-24 lg:py-32">
            <div
              class="mb-6 ml-2 flex h-14 w-14 items-center justify-center bg-[#276ef1] [box-shadow:rgb(171,_196,_245)_-8px_8px]"
            >
              <img
                src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f5ec37c8c32b17d1c725_Vector-9.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <p class="mb-8 text-[#647084] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim.
            </p>
            <p class="font-bold">John Robert</p>
            <p class="text-sm">Senior Webflow Developer</p>
          </div>
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
