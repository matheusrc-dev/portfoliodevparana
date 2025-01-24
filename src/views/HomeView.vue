<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-1">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>
