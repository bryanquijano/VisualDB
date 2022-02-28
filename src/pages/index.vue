<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen-nonav space-y-12"
  >
    <h2 class="font-extralight text-6xl tracking-tighter text-white">
      Welcome <span v-if="isAuthenticated">{{ user }}</span>
    </h2>
    <img src="../assets/bgindex.png" alt="Hello GB" class="w-1/2" />
  </div>
</template>
