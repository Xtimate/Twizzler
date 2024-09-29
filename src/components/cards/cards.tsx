import { component$ } from '@builder.io/qwik';

export interface CardsProps {

}

export const Cards = component$<CardsProps>((props) => {
  return (
<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 bg-[#111827]">
  <div class="mx-auto max-w-3xl text-center">
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p class="mt-4 text-gray-500 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl class="mt-6 grid grid-rows-2 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Official Addons</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>
    <div class="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt class="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>
    </dl>
  </div>
  );
});
