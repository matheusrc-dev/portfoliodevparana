<template>
  <section id="contact" class="py-16 bg-white">
    <div class="w-full max-w-6xl mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">Contact Me</h2>
      <div class="max-w-lg mx-auto">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
              required
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
              required
            />
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface FormData {
  name: string;
  email: string;
  message: string;
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Here you would typically handle the form submission
  console.log('Form submitted:', formData)
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.message = ''
}
</script>
