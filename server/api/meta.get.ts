import course from "~/server/courseData"
import { Lesson, Chapter, Course } from '~/types/course';

course as Course;

type OutlineBase = {
  title: string;
  slug: string;
  number: number;
}

type OutlineLesson = OutlineBase & {
  path: string;
}

type OutlineChapter = OutlineBase & {
  lesson: OutlineLesson[];
}

type CourseMeta = {
  title: string;
  chapters: OutlineChapter[];
}