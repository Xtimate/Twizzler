import { component$ } from '@builder.io/qwik';
import { Herodupe } from '~/components/herodupe/herodupe';
import { Header } from '~/components/header/header';

export default component$(() => {
  return (
    <div class="overflow-y-hidden">
    <Header />
    <Herodupe />
    </div>
  );
});
