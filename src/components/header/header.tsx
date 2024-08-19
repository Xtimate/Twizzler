import { component$ } from '@builder.io/qwik';

export interface HeaderProps {

}

export const Header = component$<HeaderProps>((props) => {
  return (
    <div>
          <nav class="z-10">
        <ul class="sticky flex flex-row items-center px-6 py-4 text-indigo-100 bg-indigo-900 rounded-lg">
            <li class="pr-8">
                <a href="/">Home</a>
            </li>
            <li class="pr-8">
                <a href="" target="_blank">FAQ</a>
            </li>
            <li class="pr-8">
                <a href="" target="_blank">Pricing</a>
            </li>
            <li class="text-red-200">
                <a href="" class="ml-2">Email</a>
                w
            </li>
        </ul>
    </nav>
    </div>
  );
});
