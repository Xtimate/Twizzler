import { component$ } from '@builder.io/qwik';
import { Prices } from '~/components/prices/prices';
import { Bg } from '~/components/bg/bg';
import { Hero } from '~/components/hero/hero';
import { Herodupe } from '~/components/herodupe/herodupe';

export default component$(() => {
  return (
    <div>
    <Herodupe />
    <Prices />
    </div>
  );
});
