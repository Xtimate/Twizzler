import { component$ } from '@builder.io/qwik';
import { FaqBg } from '~/components/faq-bg/faq-bg';
import { Header } from '~/components/header/header';
 
export default component$(() => {
  return (
    <div class="overflow-y-hidden">
    <Header />
    <FaqBg />
    </div>
  );
});
