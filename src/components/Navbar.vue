<template>
  <nav class="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <router-link to="/" class="text-xl font-bold text-primary">Portfolio</router-link>
        <div class="hidden md:flex space-x-8">
          <template v-for="link in navLinks" :key="link.href">
            <router-link 
              v-if="link.type === 'route'"
              :to="link.href"
              class="text-gray-700 hover:text-primary transition-colors duration-300"
            >
              {{ link.text }}
            </router-link>
            <a 
              v-else
              :href="link.href"
              class="text-gray-700 hover:text-primary transition-colors duration-300"
              @click="scrollToSection(link.href)"
            >
              {{ link.text }}
            </a>
          </template>
        </div>
        <button @click="toggleMenu" class="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white">
        <template v-for="link in navLinks" :key="link.href">
          <router-link 
            v-if="link.type === 'route'"
            :to="link.href"
            class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
            @click="isMenuOpen = false"
          >
            {{ link.text }}
          </router-link>
          <a 
            v-else
            :href="link.href"
            class="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-300"
            @click="scrollToSection(link.href)"
          >
            {{ link.text }}
          </a>
        </template>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

interface NavLink {
  href: string
  text: string
  type: 'route' | 'anchor'
}

const navLinks: NavLink[] = [
  { href: '#home', text: 'Home', type: 'anchor' },
  { href: '#skills', text: 'Skills', type: 'anchor' },
  { href: '#projects', text: 'Projects', type: 'anchor' },
  { href: '#contact', text: 'Contact', type: 'anchor' },
  { href: '/blog', text: 'Blog', type: 'route' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    const navHeight = 64 // height of navbar in pixels
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
  
  // Close mobile menu if open
  isMenuOpen.value = false
}
</script>
