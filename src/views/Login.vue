<script setup>
import { useAuthStore } from "../store/auth-store";

const authStore = useAuthStore();

import { ref } from "vue";
</script>
<template>
  <div
    id="Login"
    class="flex items-center justify-center w-[100vw] h-[100vh] bg-white"
  >
    <div
      class="bg-black w-[350px] h-[60%] rounded-2xl flex items-center justify-center"
    >
      <div class="flex flex-col items-center justify-center">
        <div class="text-white text-3-xl mb-8">Login</div>

        <button
          @click="authStore.login"
          class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
