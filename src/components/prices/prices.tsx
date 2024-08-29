import { component$ } from '@builder.io/qwik';

export interface PricesProps {

}

export const Prices = component$<PricesProps>((props) => {
  return (
  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-10">
    <div class="mb-10 space-y-4 px-6 md:px-0">
      <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">Pricing</h2>
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
  );
});
