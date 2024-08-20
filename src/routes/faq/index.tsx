import { component$ } from '@builder.io/qwik';
import { Faq } from "../../components/faq/faq";
import { FaqBg } from '~/components/faq-bg/faq-bg';
 
export default component$(() => {
  return (
    <div>
    <FaqBg />
    <Faq />
    </div>
  );
});
