<script setup>
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

// Form validation
const schema = yup.object({
  username: yup.string().required().email().label("Email "),
  password: yup.string().required().min(8).label("Password"),
});

useForm({
  validationSchema: schema,
});

const { value: username, errorMessage: emailError } = useField("username");
const { value: password, errorMessage: passwordError } = useField("password");

import useAuth from "../composable/useAuth";
import useError from "../composable/useError";

const { isAuthenticated, login, signup, googleLogin } = useAuth();

const router = useRouter();

const logginIn = async () => {
  await login(username.value, password.value);
  goToHome();
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const googleAuth = async () => {
  await googleLogin();
  goToHome();
};

const goToHome = () => {
  // If user is authenticated, send them to the home page
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const { error, setError } = useError();

import { useTimeout, promiseTimeout } from "@vueuse/core";

const { ready, start } = useTimeout(3000, { controls: true });
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen-nonav bg-inherit"
  >
    <h2 class="text-6xl tracking-wide font-bold text-white pb-8">VisualDB</h2>
    <div
      class="flex shadow-2xl rounded-lg justify-center items-center overflow-hidden w-3/6 bg-primary"
    >
      <div class="h-128 bg-inherit pt-8">
        <button
          @click="googleAuth"
          class="bg-blue-600 hover:bg-blue-800 p-1 mt-5 rounded-full px-24 py-2"
        >
          <img
            src="../assets/googlelogo.svg"
            alt=""
            class="float-left pr-0.5"
          />
          <p class="pt-3 text-white w-48">Sign in with Google</p>
        </button>
        <p class="text-center my-4 font-medium">
          -------------------------- OR --------------------------
        </p>
        <form @submit.prevent="logginIn" class="flex flex-col space-y-4">
          <input
            name="username"
            type="text"
            class="border-2 p-2 pl-4 rounded-full w-full border-gray-500"
            placeholder="Username"
            v-model="username"
          />
          <span class="text-white text-center text-xs">{{ emailError }}</span>
          <input
            name="password"
            type="password"
            class="border-2 p-2 pl-4 rounded-full w-full border-gray-500"
            placeholder="Password"
            v-model="password"
          />
          <span class="text-white text-center text-xs">{{
            passwordError
          }}</span>

          <div class="flex space-x-2 pt-12">
            <button
              type="submit"
              @submit.prevent="logginIn"
              class="p-3 rounded-full w-full text-black bg-white hover:bg-gray-400 hover:text-white font-bold"
            >
              Login
            </button>
            <!-- <button
              @click="signingUp"
              class="border-2 border-gray-500 text-blue-800 py-4 rounded-lg w-1/2 hover:bg-gray-400 hover:text-white hover:border-gray-900"
            >
              Sign Up
            </button> -->
          </div>
        </form>
        <div class="pt-2">
          <span class="text-center w-full pr-1">New user?</span>
          <router-link :to="{ name: 'Register' }">
            <a class="underline">Sign Up!</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <!-- ////////////////////////////////////////////////////////////// -->
  <!-- <div
    class="flex flex-col justify-center items-center min-h-screen-nonav bg-inherit"
  >
    <h2 class="font-extralight text-6xl tracking-tighter text-white pb-12">
      Login or Sign Up
    </h2>
    <div
      class="flex shadow-2xl rounded-lg justify-center items-center bg-gray-300 overflow-hidden px-4"
    >
      <img class="h-64" src="../assets/bglogin.png" alt="Hello GB" />
      <form @submit.prevent="logginIn" class="flex flex-col space-y-4 pl-8 p-4">
        <button
          @click="google"
          class="bg-blue-600 hover:bg-blue-800 p-1 rounded-md"
        >
          <img src="../assets/googlelogo.svg" alt="" class="float-left" />
          <p class="pt-3 text-white">Sign in with Google</p>
        </button>
        <div>
          <p class="text-center text-xs m-0 p-0">
            ------------------ OR ------------------
          </p>
        </div>
        <input
          name="username"
          type="text"
          class="border-2 p-2 rounded-lg border-gray-500"
          placeholder="Username"
          v-model="username"
        />
        <span class="text-red-500 text-center text-xs">{{ emailError }}</span>
        <input
          name="password"
          type="password"
          class="border-2 p-2 rounded-lg border-gray-500"
          placeholder="Password"
          v-model="password"
        />
        <span class="text-red-500 text-center text-xs">{{
          passwordError
        }}</span>

        <div class="flex space-x-2">
          <button
            type="submit"
            @submit.prevent="logginIn"
            class="bg-green-600 text-green-100 py-4 rounded-lg w-1/2 hover:bg-green-800 hover:text-white"
          >
            Login
          </button>
          <button
            @click="signingUp"
            class="border-2 border-gray-500 text-blue-800 py-4 rounded-lg w-1/2 hover:bg-gray-400 hover:text-white hover:border-gray-900"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
    <div
      v-if="!ready && error"
      class="bg-red-300 w-1/4 absolute bottom-2 right-2 rounded-lg p-4 text-center text-red-800"
    >
      {{ error }}
    </div>
  </div> -->
</template>
