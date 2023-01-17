<template>
  <NuxtLayout>
    <div class="prose">
      <h1>Oops</h1>
      <p>{{ error.statusCode }}</p>
      <p>{{ error.message }}</p>
      <button
        @click="handleError"
        class="hover:cursor-pointer bg-red-500 text-white p-2"
      >
        First lesson
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect:
      "/course/chapter/1-chapter-1/lesson/1-introduction-to-typescript-with-vue-js-3",
  });
};
</script>
