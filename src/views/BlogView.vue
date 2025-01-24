<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="w-full max-w-7xl mx-auto px-6 sm:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-12 px-4">Blog</h1>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <article v-for="post in blogPosts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div class="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center p-8">
            <component 
              :is="post.icon" 
              size="96" 
              class="text-primary" 
            />
          </div>
          <div class="p-8">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <CalendarIcon class="w-5 h-5 mr-2" />
              {{ post.date }}
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">{{ post.title }}</h2>
            <p class="text-gray-600 mb-6 text-lg">{{ post.excerpt }}</p>
            <router-link 
              :to="{ name: 'blog-post', params: { id: post.id }}" 
              class="text-primary hover:text-secondary font-semibold inline-flex items-center text-lg"
            >
              Read More
              <ArrowRightIcon class="w-5 h-5 ml-2" />
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'
import { blogPosts } from '@/data/blog-posts'
</script>
