import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import  { Header } from "../components/header/header";
import  { Hero } from "../components/hero/hero"

export default component$(() => {
  return (
    <>
    <div class="bg-[#111827] scrollbar">
      <Header />
      <Hero />
    </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
