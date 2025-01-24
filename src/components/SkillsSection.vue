<template>
  <section id="skills" class="py-16 bg-white">
    <div class="w-full max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Skills</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <CommandLineIcon class="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-primary" />
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Bootstrap</h3>
        </div>
        <div class="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <CodeBracketIcon class="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-primary" />
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">PHP</h3>
        </div>
        <div class="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <CubeIcon class="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-primary" />
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Vue.js</h3>
        </div>
        <div class="flex flex-col items-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gray-50">
          <SwatchIcon class="w-12 h-12 sm:w-16 sm:h-16 mb-4 text-primary" />
          <h3 class="text-lg sm:text-xl font-semibold text-gray-900">Tailwind CSS</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { CommandLineIcon, CodeBracketIcon, CubeIcon, SwatchIcon } from '@heroicons/vue/24/outline'
</script>
