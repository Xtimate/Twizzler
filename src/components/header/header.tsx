import { component$ } from '@builder.io/qwik';

export interface HeaderProps {

}

export const Header = component$<HeaderProps>((props) => {
  return (
    <nav>
    <div class="sticky overflow-hidden top-0">
      <div class="justify-between h-16 px-10 shadow items-center sticky bg-black mt">
        <div class="flex items-center space-x-8">
          <h1 class="text-xl lg:text-2xl font-bold cursor-pointer text-white mt-4">MineWorldHost</h1>
          <div class="grow"></div>
          <div class="ml-auto hidden md:flex justify-around space-x-5 mt-5">
            <a href="/" class="hover:text-indigo-600 text-white">Home</a>
            <a href="/prices" class="hover:text-indigo-600 text-white">Prices</a>
            <a href="/faq" class="hover:text-indigo-600 text-white">FAQ</a>
            <a href="https://dash.mineworldhost.com/" class="hover:text-indigo-600 text-white">Dashboard</a>
            <a href="https://panel.mineworldhost.com/" class="hover:text-indigo-600 text-white">Panel</a>
            </div>
        </div>
        <div class="flex space-x-4 items-center">
        </div>
      </div>
    </div>
  </nav>
  );
});
