<template>
  <div class="container">
    <h1>Log in to {{ pageTitle }}</h1>
    <button
      @click="loginHandler"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounder"
    >
    </button>
  </div>
</template>

<script setup lang="ts">
const { title: pageTitle } = useCourse();
const supabase = useSupabaseClient();

const loginHandler = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.log(error);
  }
};
</script>
