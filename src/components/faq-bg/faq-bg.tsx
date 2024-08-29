import { component$ } from '@builder.io/qwik';

export interface FaqBgProps {

}

export const FaqBg = component$<FaqBgProps>((props) => {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 h-screen">
      <div class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl mt-10">
        <h2>FAQ</h2>
      </div>
  <svg
    class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <svg x="50%" y="-1" class="overflow-visible fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        stroke-width="0"></path>
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
  </svg>
  <div
    class=" absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true">
    <div class="h-screen aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
      style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
    </div>
  </div>
  <div class="mt-[-50px] flex h-screen items-center w-screen">
    <div class="w-screen flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
    <div class="space-y-4 w-96">
  <details
    class="w-full group border-s-4 border-green-500 bg-[#292f3d] p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary class="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 class="text-lg font-medium text-white">
      Why Choose MineWorldhost?
      </h2>

      <span class="shrink-0 rounded-full p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p class="mt-4 leading-relaxed text-white">
    We run on powerfull intel i7 CPU which makes your gameplay super fast!
    </p>
  </details>

  <details
    class="group border-s-4 border-green-500 bg-[#292f3d] p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary class="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 class="text-lg font-medium text-white">
      When will my MineWorldHost Server be ready?
      </h2>

      <span class="shrink-0 rounded-full bg-[#292f3d] p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </summary>
    <p class="mt-4 leading-relaxed text-white">
    It will be created instantly and refresh your page if you dont see so!
    </p>
  </details>
</div>
      </div>
    </div>
  </div>
  );
});
