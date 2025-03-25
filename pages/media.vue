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
    <section class="relative overflow-hidden mb-8 md:mb-16">
      <div class="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 z-0"></div>
      <div class="container mx-auto px-4 py-8 md:py-16 relative z-10">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-secondary mb-4 md:mb-6"
        data-aos="fade-down">
      Media Center
    </h1>
    <p class="text-base md:text-lg lg:text-xl text-gray-600 text-center max-w-3xl mx-auto px-4"
       data-aos="fade-up"
       data-aos-delay="200">
      Stay updated with the latest news, events, and media coverage of our administration's activities and initiatives.
    </p>
  </div>
</section>


<section class="py-8 md:py-16 bg-gradient-to-b from-white to-secondary/5">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-left text-secondary mb-3 md:mb-4"
        data-aos="fade-down">Project Highlights</h2>
    <p class="text-sm md:text-base text-gray-600 text-left mb-8 md:mb-12 max-w-2xl"
       data-aos="fade-up"
       data-aos-delay="100">
      Transforming lives through impactful initiatives and sustainable development projects
    </p>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div v-for="(project, index) in projects" 
           :key="index"
           class="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md md:shadow-xl group"
           data-aos="fade-up"
           :data-aos-delay="index * 100">
        <div class="relative h-64">
          <img :src="project.url" :alt="project.title" 
               class="w-full h-full object-cover"/>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ project.description }}</p>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full" :class="project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'"></span>
              <span class="text-sm text-gray-500">{{ project.status }}</span>
            </div>
            <button class="text-accent hover:text-secondary transition-colors flex items-center space-x-1">
              <span>Learn More</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Latest Videos -->
    <section class="py-8 md:py-16 bg-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold text-secondary mb-8 md:mb-12"
        data-aos="fade-right">Latest Videos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
      <div v-for="(video, index) in videos" 
           :key="index"
           class="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden"
           data-aos="fade-up"
           :data-aos-delay="index * 100">
            <div class="aspect-video">
              <iframe class="w-full h-full"
                      :src="video.embedUrl"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen></iframe>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-secondary mb-2">{{ video.title }}</h3>
              <p class="text-gray-600">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News & Updates -->
    <section class="py-8 md:py-16 bg-gradient-to-b from-secondary/5 to-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold text-secondary mb-8 md:mb-12"
        data-aos="fade-right">News & Updates</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div v-for="(news, index) in newsUpdates" 
           :key="index"
           class="bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden group"
           data-aos="fade-up"
           :data-aos-delay="index * 100">
            <div class="aspect-[4/3] overflow-hidden">
              <img :src="news.imageUrl" :alt="news.title"
                   class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
            </div>
            <div class="p-6">
              <div class="flex items-center text-sm text-accent mb-4">
                <span class="mr-4">{{ news.date }}</span>
                <span class="px-3 py-1 bg-accent/10 rounded-full">{{ news.category }}</span>
              </div>
              <h3 class="text-xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors duration-300">
                {{ news.title }}
              </h3>
              <p class="text-gray-600 mb-4">{{ news.excerpt }}</p>
              <a href="#" class="text-accent font-semibold hover:underline">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = [
  {
    url: '/images/girl-child-education.jpg',
    title: 'Digital Learning Initiative',
    description: 'Implementing modern technology solutions in schools to enhance learning experiences.',
    category: 'Education',
    status: 'Ongoing'
  },
  {
    url: '/images/health.jpg',
    title: 'Healthcare Access Program',
    description: 'Expanding medical facilities and services across rural communities.',
    category: 'Healthcare',
    status: 'Completed'
  },
  {
    url: '/images/agriculture.jpg',
    title: 'Smart Farming Project',
    description: 'Modernizing agricultural practices with technology and sustainable methods.',
    category: 'Agriculture',
    status: 'Ongoing'
  }
]

const videos = [
  {
    embedUrl: 'https://www.youtube.com/embed/-QvdxhlHMuU?si=siJ1M-2-iklz4Kxx',
    title: 'Ekiti Cargo Airport.',
    description: 'Project Adviser Reviews Viability, Rapid Development Of Ekiti Cargo Airport.'
  },
]

const newsUpdates = [
  {
    imageUrl: '/images/muslims_news.jpg',
    date: 'March 25, 2025',
    category: 'Equality',
    title: ' More Appointments For Muslims In Ekiti Government',
    excerpt: 'Ekiti State Governor, Mr Biodun Oyebanji has assured the Muslim community that more of their members will be appointed into...'
  },
  {
    imageUrl: '/images/collaboration_news.jpg',
    date: 'March 20, 2025',
    category: 'Advocacy',
    title: ' Collaborative Revenue Mobilization Drive Across MDAs, LGAs',
    excerpt: 'Ekiti State Governor, Mr Biodun Oyebanji has restated importance of collaboration in revenue generation to foster ...'
  },
  {
    imageUrl: '/images/investment.jpg',
    date: 'March 20, 2025',
    category: 'Investment',
    title: 'Gov. Oyebanji Assures Investors Of Business Friendly Environment',
    excerpt: 'Ekiti State Governor, Mr Biodun Oyebanji has reaffirmed his administration’s resolve in ensuring a business-friendly...'
  },
]

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>