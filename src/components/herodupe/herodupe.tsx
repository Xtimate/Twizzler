import { component$ } from '@builder.io/qwik';

export interface HerodupeProps {

}

export const Herodupe = component$<HerodupeProps>((props) => {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 h-screen">
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="mb-10 space-y-4 px-6 md:px-0">
      <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">Pricing</h2>
    </div>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <div
        class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
        <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Starter</h2>
        <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
          <span class="text-3xl sm:text-4xl font-bold text-white">$3</span> / Month
        </p>
        <ul class="list-none list-inside mb-6 text-center text-gray-300">
          <li>2GB RAM</li>
          <li>1 CPU Core</li>
          <li>25GB Disk</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer"
          class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          href="https://example.com/starter-plan"><span class="relative text-sm font-semibold text-black">Get Started</span></a>
      </div>
      <div
        class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
        <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Pro</h2>
        <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
          <span class="text-3xl sm:text-4xl font-bold text-white">$5</span> / Month
        </p>
        <ul class="list-none list-inside mb-6 text-center text-gray-300">
          <li>4GB RAM</li>
          <li>2 CPU Cores</li>
          <li>50GB Disk</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer"
          class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          href="https://example.com/pro-plan"><span class="relative text-sm font-semibold text-black">Get Started</span></a>
      </div>
      <div
        class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
        <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Ultra</h2>
        <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
          <span class="text-3xl sm:text-4xl font-bold text-white">$7</span> / Month
        </p>
        <ul class="list-none list-inside mb-6 text-center text-gray-300">
          <li>6GB RAM</li>
          <li>2 CPU Cores</li>
          <li>100GB Disk</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer"
          class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          href="https://example.com/business-plan"><span class="relative text-sm font-semibold text-black">Get Started</span></a>
      </div>
      <div
        class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
        <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Ultimate</h2>
        <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
          <span class="text-3xl sm:text-4xl font-bold text-white">$10</span> / Month
        </p>
        <ul class="list-none list-inside mb-6 text-center text-gray-300">
          <li>8GB RAM</li>
          <li>2 CPU Cores</li>
          <li>200GB Disk</li>
        </ul>
        <a target="_blank" rel="noopener noreferrer"
          class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          href="https://example.com/business-plan"><span class="relative text-sm font-semibold text-black">Get Started</span></a>
      </div>
    </div>
  </div>
  <svg
    class="z-0 absolute inset-0 -z-10 h-screen w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <svg x="50%" y="-1" class="overflow-hidden fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        stroke-width="0"></path>
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
  </svg>
  <div
    class="absolute left-[calc(50%-4rem)] h-screen top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true">
    <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20 h-screen"
      style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
    </div>
  </div>
  </div>
  );
});
