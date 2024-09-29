import { component$ } from '@builder.io/qwik';

export interface HeroProps {

}

export const Hero = component$<HeroProps>((props) => {
  return (
    <div class="relative isolate overflow-hidden bg-gray-900 scroll-smooth z-10">
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
    class="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true">
    <div class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
      style="clip-path:polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)">
    </div>
  </div>
  <div class="mt-[-50px] flex h-screen items-center justify-center">
    <div class="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
      <h1 class="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
        MineWorldHost
        <div></div>
        <span class="text-sky-500">your go-to</span> Minecraft
        <div></div>
        <span class="text-sky-500">host</span>
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-300">The best Minecraft Host you could imagine!</p>
    </div>
  </div>
</div>
  );
});
