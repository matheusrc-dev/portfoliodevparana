<template>
  <section id="projects" class="py-16 bg-gray-50">
    <div class="w-full max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
          <div class="bg-gray-100 p-6 flex justify-center items-center">
            <component :is="project.icon" class="w-16 h-16 sm:w-20 sm:h-20 text-primary" />
          </div>
          <div class="p-6">
            <h3 class="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{{ project.title }}</h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-gray-100 rounded-full text-xs sm:text-sm text-gray-700">
                {{ tech }}
              </span>
            </div>
            <a :href="project.link" target="_blank" class="text-primary hover:text-secondary font-semibold inline-flex items-center text-sm sm:text-base">
              View Project
              <ArrowTopRightOnSquareIcon class="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ShoppingCartIcon, ClipboardDocumentListIcon, UserCircleIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Vue.js and Tailwind CSS",
    icon: ShoppingCartIcon,
    technologies: ["Vue.js", "Tailwind CSS", "TypeScript"],
    link: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application",
    icon: ClipboardDocumentListIcon,
    technologies: ["Vue.js", "PHP", "MySQL"],
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A responsive portfolio website template",
    icon: UserCircleIcon,
    technologies: ["Vue.js", "Bootstrap", "SCSS"],
    link: "#"
  }
]
</script>
