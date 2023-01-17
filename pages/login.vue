<template>
  <div class="container">
    <h1>Log in to {{ title }}</h1>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounder">
      Login with Github
    </button>
  </div>
</template>

<script setup lang="ts">
const { title } = useCourse();
</script>
