<template>
  <div class="container">
    <h1>Log in to {{ pageTitle }}</h1>
    <button
      @click="loginHandler"
      class="bg-blue-500 text-white font-bold py-2 px-4 rounder"
    >
      Login
    </button>
  </div>
</template>

<script setup lang="ts">
const { title: pageTitle } = useCourse();
const { query } = useRoute();
const supabase = useSupabaseClient();
const user = useSupabaseUser();

watchEffect(async () => {
  if (user.value) {
    await navigateTo(query.redirectTo as string, { replace: true });
  }
});

const loginHandler = async () => {
  const redirectTo = `${window.location.origin}${query.redirectTo}`;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: { redirectTo },
  });

  if (error) {
    console.log(error);
  }
};
</script>
