<template>
  <div
    class="dropdown dropdown-end hidden [@supports(color:oklch(0%_0_0))]:block"
    title="Change Theme"
  >
    <div
      class="btn btn-ghost"
      role="button"
      tabindex="0"
    >
      <Icon
        class="text-base md:hidden"
        name="mdi:color"
      />
      <span class="hidden font-normal md:inline">Theme</span>
      <svg
        class="hidden h-2 w-2 fill-current opacity-60 md:inline-block"
        height="12px"
        viewBox="0 0 2048 2048"
        width="12px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <div
      class="dropdown-content bg-base-200 text-base-content rounded-box top-px h-[28.6rem] max-h-[calc(100vh-10rem)] w-56 overflow-y-auto border border-white/5 shadow-2xl outline outline-1 outline-black/5 mt-16"
      tabindex="0"
    >
      <div class="grid grid-cols-1 gap-3 p-3">
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('light')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="light"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">light</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4 [&amp;_svg]:visible"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('dark')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="dark"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">dark</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('cupcake')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="cupcake"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">cupcake</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('bumblebee')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="bumblebee"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">bumblebee</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('emerald')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="emerald"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">emerald</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('corporate')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="corporate"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">corporate</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('synthwave')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="synthwave"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">synthwave</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('retro')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="retro"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">retro</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('cyberpunk')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="cyberpunk"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">cyberpunk</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('valentine')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="valentine"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">valentine</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('halloween')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="halloween"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">halloween</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('garden')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="garden"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">garden</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('forest')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="forest"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">forest</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('aqua')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="aqua"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">aqua</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('lofi')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="lofi"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">lofi</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('pastel')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="pastel"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">pastel</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('fantasy')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="fantasy"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">fantasy</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('wireframe')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="wireframe"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">wireframe</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('black')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="black"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">black</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('luxury')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="luxury"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">luxury</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('dracula')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="dracula"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">dracula</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('cmyk')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="cmyk"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">cmyk</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('autumn')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="autumn"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">autumn</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('business')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="business"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">business</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('acid')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="acid"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">acid</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('lemonade')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="lemonade"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">lemonade</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('night')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="night"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">night</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('coffee')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="coffee"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">coffee</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('winter')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="winter"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">winter</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('dim')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="dim"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">dim</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('nord')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="nord"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">nord</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <button
          class="outline-base-content text-start outline-offset-4"
          data-act-class="[&amp;_svg]:visible"
          @click="setTheme('sunset')"
        >
          <span
            class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer font-sans"
            data-theme="sunset"
          >
            <span class="grid grid-cols-5 grid-rows-3">
              <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
                <svg
                  class="invisible h-3 w-3 shrink-0"
                  fill="currentColor"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
                <span class="flex-grow text-sm">sunset</span>
                <span class="flex h-full shrink-0 flex-wrap gap-1">
                  <span class="bg-primary rounded-badge w-2"></span>
                  <span class="bg-secondary rounded-badge w-2"></span>
                  <span class="bg-accent rounded-badge w-2"></span>
                  <span class="bg-neutral rounded-badge w-2"></span>
                </span>
              </span>
            </span>
          </span>
        </button>
        <!---->
        <a
          class="outline-base-content overflow-hidden rounded-lg"
          href="/theme-generator/"
        >
          <div class="hover:bg-neutral hover:text-neutral-content w-full cursor-pointer font-sans">
            <div class="flex gap-2 p-3">
              <svg
                class="h-4 w-4 fill-current"
                height="24"
                viewBox="0 0 512 512"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"></path>
                <line
                  x1="90.25"
                  x2="124.19"
                  y1="90.25"
                  y2="124.19"
                ></line>
                <path
                  d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"
                ></path>
                <path d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"></path>
                <line
                  x1="293.89"
                  x2="259.95"
                  y1="90.25"
                  y2="124.19"
                ></line>
                <path
                  d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"
                ></path>
                <line
                  x1="124.19"
                  x2="90.25"
                  y1="259.95"
                  y2="293.89"
                ></line>
                <path
                  d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"
                ></path>
                <path
                  d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"
                ></path>
                <path
                  d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"
                ></path>
              </svg>
              <div class="flex-grow text-sm font-bold">Make your theme!</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const setTheme = (theme: string) => {
  document.documentElement.setAttribute('data-theme', theme)
}
</script>
