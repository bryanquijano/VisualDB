<script setup>
import { useRouter } from "vue-router";
import useAuth from "../composable/useAuth";

const { isAuthenticated, logout } = useAuth();

const router = useRouter();

// When user logs out, redirect them to the home page
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>

<template>
  <div class="bg-gray-800 text-white border-b-4 border-gray-600">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-3xl font-thin tracking-tighter">
        VisualDB
        <span class="text-sm tracking-wider">v0.0.1</span>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <!-- Static method -->
          <router-link to="/">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Index
            </li>
          </router-link>
          <!-- Dynamic method -->
          <router-link :to="{ name: 'Home' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Home
            </li>
          </router-link>
          <router-link :to="{ name: 'About' }">
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              About
            </li>
          </router-link>
          <!-- Another method -->
          <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/login', name: 'Login' }"
          >
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Login
            </li>
          </router-link>
          <router-link
            v-if="!isAuthenticated"
            :to="{ path: '/register', name: 'Register' }"
          >
            <li
              class="py-8 px-4 hover:cursor-pointer text-white hover:text-gray-700 hover:bg-gray-300"
            >
              Sign Up
            </li>
          </router-link>
          <div v-else class="flex">
            <router-link :to="{ name: 'Secret' }">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-700"
              >
                Secret
              </li>
            </router-link>
            <button @click="loggingOut">
              <li
                class="py-8 px-4 hover:cursor-pointer hover:bg-gray-300 hover:text-gray-700"
              >
                Logout
              </li>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </div>
</template>
