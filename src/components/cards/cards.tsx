import { component$ } from '@builder.io/qwik';

export interface CardsProps {

}

export const Cards = component$<CardsProps>((props) => {
  return (
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-[#111827]">
<div>
  <dl class="flex flex-wrap flex-row gap-4 sm:grid-cols-3 lg:grid-cols-4">
    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">For the best experience, we only use the latest Ryzen processors available.</dt>

      <dd class="text-4xl k font-extrabold text-blue-600 md:text-5xl">Fast Processors</dd>
    </div>

    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">Thanks to NeoProtect all game servers are protected from DDoS attacks.</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">DDoS Protection</dd>
    </div>

    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">Your Minecraft server will be set up in seconds after payment, truly rapid.</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">Instant Setup</dd>
    </div>
    <dl class=" flex flex-wrap flex-row gap-4 sm: sm:grid-cols-3 lg:grid-cols-4">

    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">We are rated 4.7/5 on TrustPilot, making us one of the best hosting solutions.</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">Highly Reviewed</dd>
    </div>
    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">Our game servers utilize the latest and fastest SSD NVMe technology available.</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">Fast SSD NVMe Storage</dd>
    </div>
    <div class="flex flex-col flex-1 rounded-lg bg-blue-950/20 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-white">Our dedicated staff team is always ready to assist you.</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">Support 24/7</dd>
      <dl/>
    </div>
    </dl>
    </dl>
  </div>
  </div>

  );
});
