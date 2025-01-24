<template>
  <div class="min-h-screen bg-gray-50 py-16">
    <div class="w-full max-w-4xl mx-auto px-6 sm:px-8">
      <router-link 
        to="/blog" 
        class="inline-flex items-center text-primary hover:text-secondary mb-8 text-lg font-medium"
      >
        <ArrowLeftIcon class="w-5 h-5 mr-2" />
        Back to Blog
      </router-link>

      <article v-if="post" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="aspect-w-16 aspect-h-9 bg-gray-100 flex items-center justify-center mb-8 rounded-lg p-8">
          <component 
            :is="post.icon" 
            size="128" 
            class="text-primary" 
          />
        </div>
        <div class="p-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-8">{{ post.title }}</h1>
          <div class="flex items-center text-gray-500 mb-8 text-lg">
            <CalendarIcon class="w-6 h-6 mr-2" />
            {{ post.date }}
          </div>
          <div class="prose prose-lg max-w-none" v-html="post.content"></div>
        </div>
      </article>

      <div v-else class="text-center py-16">
        <h1 class="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
        <router-link 
          to="/blog" 
          class="inline-flex items-center text-primary hover:text-secondary"
        >
          Return to Blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { CalendarIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import CodeIcon from '@/assets/icons/code-icon.vue'
import { blogPosts } from '@/data/blog-posts'

const route = useRoute()
const post = computed(() => {
  return blogPosts.find(p => p.id === Number(route.params.id))
})
</script>
