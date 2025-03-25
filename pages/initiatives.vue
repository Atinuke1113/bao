<template>
  <div class="min-h-screen">
    <!-- Decorative header pattern -->
    <div class="h-28 relative overflow-hidden bg-gradient-to-r from-[#008751] to-[#00522F]">
      <div class="absolute inset-0">
        <div class="absolute inset-0 opacity-10">
          <div class="w-full h-full grid grid-cols-12 gap-2">
            <div v-for="i in 12" :key="i" class="h-full bg-white/20 transform -skew-x-12"></div>
          </div>
        </div>
        <div class="absolute top-0 left-1/4 w-24 h-24 bg-white/10 rounded-full animate-float-slow"></div>
        <div class="absolute bottom-0 right-1/3 w-32 h-32 bg-white/5 rounded-full animate-float-medium"></div>
        <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float-fast"></div>
      </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-secondary/5 py-16">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-secondary text-center mb-6"
          v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }">
          Key Initiatives
        </h1>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12"
        v-motion
       :initial="{ opacity: 0, y: 50 }"
       :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200, ease: 'easeOut' } }">
          Transforming Ekiti State through strategic initiatives and sustainable development programs
        </p>
      </div>
    </section>

    <!-- Initiatives Grid -->
<section class="py-16">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(_, index) in 4" :key="index"
           class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500"
           v-motion
           :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }"
           :enter="{ opacity: 1, x: 0, y: 0, transition: { duration: 800, delay: index * 200 } }"
           :hover="{ y: -8, transition: { duration: 300 } }"></div>
      <!-- Youth Development Initiative -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="h-64 overflow-hidden">
          <img src="~/assets/images/infrastructure.jpg" alt="Youth Development" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-bold text-secondary mb-4">Youth Development & Job Creation</h3>
          <p class="text-gray-600 mb-6">Empowering the youth through skills acquisition, entrepreneurship programs, and job creation initiatives.</p>
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Digital Skills Training Programs</span>
            </div>
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Start-up Support Schemes</span>
            </div>
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Tech Innovation Hubs</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Agriculture Initiative -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="h-64 overflow-hidden">
          <img src="~/assets/images/infrastructure.jpg" alt="Agriculture" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
        <div class="p-6">
          <h3 class="text-2xl font-bold text-secondary mb-4">Agriculture & Rural Development</h3>
          <p class="text-gray-600 mb-6">Modernizing agriculture and improving rural infrastructure for sustainable growth.</p>
          <div class="space-y-4">
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Modern Farming Techniques</span>
            </div>
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Rural Infrastructure Development</span>
            </div>
            <div class="flex items-center">
              <span class="text-accent mr-2">✓</span>
              <span>Farmer Support Programs</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Infrastructure Development -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="h-64 overflow-hidden">
          <img src="~/assets/images/infrastructure.jpg" alt="Infrastructure" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
        <div class="p-6">
          <!-- ... existing content ... -->
        </div>
      </div>

      <!-- Education -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <div class="h-64 overflow-hidden">
          <img src="~/assets/images/infrastructure.jpg" alt="Education" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
        </div>
        <div class="p-6">
          <!-- ... existing content ... -->
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Statistics Section -->
    <section class="py-16 bg-secondary text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="(stat, index) in statistics" 
            :key="index"
            class="text-center p-6">
            <div class="text-4xl font-bold mb-2">
              {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
            </div>
            <div class="text-lg">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-secondary text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0 }">
        Implementation Timeline</h2>
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20"></div>
          <div class="space-y-12">
            <div v-for="(phase, index) in timeline" :key="index"
                 class="relative"
                 v-motion
             :initial="{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }"
             :enter="{ opacity: 1, x: 0, transition: { duration: 800, delay: index * 300 } }">
              <div class="flex items-center">
                <div class="w-1/2" :class="{ 'text-right pr-8': index % 2 === 0, 'pl-8': index % 2 !== 0 }">
                  <h3 class="text-xl font-bold text-secondary mb-2">{{ phase.title }}</h3>
                  <p class="text-gray-600">{{ phase.description }}</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const statistics = [
  { value: '50,000', suffix: '+', label: 'Youth Trained', prefix: '' },
  { value: '25', suffix: 'B', label: 'Investment in Agriculture', prefix: '₦' },
  { value: '100', suffix: '+', label: 'Rural Communities Developed', prefix: '' }
]

const timeline = [
  {
    title: 'Phase 1: 2023',
    description: 'Initial implementation of youth development programs and agricultural initiatives.'
  },
  {
    title: 'Phase 2: 2024',
    description: 'Infrastructure development and education system enhancement.'
  },
  {
    title: 'Phase 3: 2025',
    description: 'Expansion of successful programs and new initiative launches.'
  },
  {
    title: 'Phase 4: 2026',
    description: 'Comprehensive evaluation and sustainability planning.'
  }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.floating {
  animation: float 3s ease-in-out infinite;
}
</style>
