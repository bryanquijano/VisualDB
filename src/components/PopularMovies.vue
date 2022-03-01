<template>
  <div class="mt-5 text-yellow-500 font-bold text-2xl mb-4">POPULAR MOVIES</div>
  <div
    class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8"
  >
    <MovieItem />
    <MovieItem />
    <MovieItem />
    <MovieItem />
  </div>
</template>

<script>
import MovieItem from "../components/items/MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
};
</script>
