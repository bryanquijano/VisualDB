<template>
  <div class="">
    <div class="flex container mx-auto mt-20 border-b border-gray-200 pb-10">
      <img src="../assets/joker.jpg" alt="" class="w-64 h-auto" />
      <div class="text-white ml-24">
        <h2 class="text-4xl font-semibold">Joker</h2>
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            class="w-4 h-4 fill-yellow-500 mt-1"
          >
            <path
              d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
              data-name="star"
            />
          </svg>
          <span class="ml-2 text-gray-500"
            >47% | 2020-10-01 Science fiction, thriller, drama</span
          >
        </div>
        <p class="mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit sint
          maiores error nostrum quasi. Odit, totam aspernatur perspiciatis alias
          repellat nesciunt dolores vitae illum! Quo dignissimos cumque quia
          sunt, exercitationem facere! Temporibus maxime perferendis autem rerum
          aperiam ad quas, non deleniti, vel enim dolorem, perspiciatis
          doloribus cum. Inventore, fugit aliquid.
        </p>
        <div class="mt-4">
          <span class="">featured cast</span>
          <div class="flex gap-10">
            <div class="mt-5 flex flex-col">
              <span class="text-lg">scott silver </span>
              <span class="text-gray-400">writer</span>
            </div>

            <div class="mt-5 flex flex-col">
              <span class="text-lg">bruce berman </span>
              <span class="text-gray-400">executive producer</span>
            </div>
          </div>
        </div>
        <div class="mt-5">
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-4 hover:bg-yellow-600"
          >
            <span class="text-black">play trailer</span></a
          >
          <a
            href="#"
            class="rounded bg-yellow-500 px-5 py-4 hover:bg-yellow-600 ml-5"
          >
            <span class="text-black">favorite</span></a
          >
        </div>
      </div>
    </div>
    <Cast />
  </div>
</template>

<script>
import Cast from "./Cast.vue";
export default {
  components: {
    Cast,
  },
};
</script>

<style></style>
