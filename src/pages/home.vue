<script>
import SearchBar from "../components/SearchBar.vue";
import PopularMovies from "../components/PopularMovies.vue";

export default {
  components: {
    SearchBar,
    PopularMovies,
  },
};
</script>

<template>
  <div class="h-screen">
    <!-- navbar stuff -->
    <div>
      <SearchBar />
    </div>
    <!-- main page stuff -->
    <PopularMovies />

    <!-- <p class="text-white text-xl pt-3">Welcome to the home page</p> -->
  </div>
</template>
