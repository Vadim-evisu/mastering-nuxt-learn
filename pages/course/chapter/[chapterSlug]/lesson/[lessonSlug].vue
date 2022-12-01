<template>
  <h2>Lesson</h2>
  <p>This is a lesson</p>
  <p>{{ $route.params.chapterSlug }}</p>
  <p>{{ $route.params.lessonSlug }}</p>
  <hr />
  <p>{{ chapter }}</p>
  <p>{{ lesson }}</p>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find(
    (chapter) => chapter.slug === route.params.chapterSlug
  );
});

const lesson = computed(() => {
  return chapter.value.lessons.find(
    (lesson) => lesson.slug === route.params.lessonSlug
  );
});
</script>
