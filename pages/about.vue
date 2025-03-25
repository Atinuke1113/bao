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
    <section class="relative overflow-hidden mb-8 md:mb-10">
  <div class="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 z-0"></div>
  <div class="container mx-auto px-4 py-8 md:py-16 ">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-secondary mb-4 md:mb-6"
        data-aos="fade-down">About BAO</h1>
        <p class="text-base md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-6 max-w-3xl mx-auto"
       data-aos="fade-up"
       data-aos-delay="200">
          A distinguished leader and the Executive Governor of Ekiti State, Biodun Oyebanji brings over two decades of invaluable experience in public service, education, and banking. His journey from academia to governance exemplifies his commitment to excellence and public service. As a native of Ikogosi-Ekiti, he understands the grassroots needs and aspirations of Ekiti people.
        </p>
        <div class="space-y-6 mb-8"
             v-motion
             :initial="{ opacity: 0, y: 50 }"
             :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span class="text-accent text-2xl">🎓</span>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Academic Excellence</p>
              <p class="text-gray-600">BSc Political Science (Ekiti State University), MSc Political Science (University of Ibadan)</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span class="text-accent text-2xl">⚖️</span>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Public Service</p>
              <p class="text-gray-600">Secretary of the Ekiti State Development Fund in 1994, State governor's Chief of Staff in 2003, Chairman of the governing board, Citizenship and Leadership Training centre in 2009, Commissioner for integration & Intergovernmental Affairs in 2010 and Secretary to the state governmen in 2018.</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <span class="text-accent text-2xl">🏆</span>
            </div>
            <div>
              <p class="text-gray-700 font-semibold">Key Achievements</p>
              <p class="text-gray-600">Led Ekiti State's COVID-19 Response, Implemented Educational Reforms, Economic Development Initiatives</p>
            </div>
          </div>
        </div>
        <p class="text-gray-600 italic"
           v-motion
           :initial="{ opacity: 0 }"
           :enter="{ opacity: 1, transition: { duration: 800, delay: 600 } }">
          "My commitment is to build on our heritage of excellence and create a more prosperous future for all Ekiti citizens through innovative governance and sustainable development."
        </p>
      </div>
      
          <div class="relative"
               v-motion
               :initial="{ opacity: 0, scale: 0.8 }"
               :enter="{ opacity: 1, scale: 1, transition: { duration: 1000 } }">
            <div class="aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img src="/images/nes-award.jpg" alt="BAO" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
   <section class="py-8 md:py-16 bg-gradient-to-b from-white to-secondary/5">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg"
           data-aos="fade-up">
        <h3 class="text-xl md:text-2xl font-bold text-secondary mb-4">Vision</h3>
        <p class="text-gray-600">Creating a prosperous and sustainable Ekiti State where every citizen has access to quality education, healthcare, and economic opportunities. We envision a state that leads in innovation, agriculture, and human capital development.</p>
      </div>
      <div class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg"
           data-aos="fade-up">
        <h3 class="text-xl md:text-2xl font-bold text-secondary mb-4">Mission</h3>
        <p class="text-gray-600">Implementing innovative solutions and policies that drive sustainable development, foster economic growth, and improve the quality of life for all Ekiti citizens through transparent governance, strategic partnerships, and community engagement.</p>
      </div>
    </div>
  </div>
</section>


<!-- Awards & Recognition Section -->
<section class="py-8 md:py-16 bg-gradient-to-br from-secondary/5 via-white to-secondary/5">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-secondary mb-8 md:mb-12"
        data-aos="fade-down">Awards & Recognition</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      <div v-for="award in awards"
           :key="award.title"
           class="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg group hover:shadow-xl transition-all">
        <div class="relative mb-8 overflow-hidden rounded-lg">
          <img :src="award.image" :alt="award.title" 
               class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"/>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
            <div class="absolute bottom-4 left-4">
              <span class="text-white/90 text-sm">{{ award.date }}</span>
            </div>
          </div>
        </div>
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <div class="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span class="text-4xl">{{ award.icon }}</span>
            </div>
            <div class="flex flex-col items-end">
              <span class="text-accent font-bold text-lg">{{ award.year }}</span>
              <span class="text-gray-500 text-sm">{{ award.issuer }}</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors duration-300">
            {{ award.title }}
          </h3>
          <p class="text-gray-600 mb-6">{{ award.description }}</p>
          <div class="space-y-3">
            <div v-for="(highlight, idx) in award.highlights" :key="idx" 
                 class="flex items-center text-sm text-gray-600">
              <span class="w-2 h-2 bg-accent rounded-full mr-3"></span>
              {{ highlight }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Core Values Section -->
    <section class="py-8 md:py-16 overflow-hidden">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-secondary mb-12 md:mb-20 xs:mb-24"
        data-aos="fade-down">Core Values</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6">
      <div v-for="value in coreValues" 
           :key="value.title"
           class="bg-white p-6 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
           data-aos="fade-up">
            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div class="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
                <span class="text-2xl">{{ value.icon }}</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-secondary mt-8 mb-4 text-center">{{ value.title }}</h3>
            <p class="text-gray-600 text-center">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Timeline -->
    <section class="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-secondary/5 to-white">
  <div class="container mx-auto px-4">
    <h2 class="text-2xl sm:text-2xl md:text-3xl font-bold text-center text-secondary mb-8 sm:mb-12 md:mb-16">Key Milestones</h2>
    
    <!-- Timeline for medium and larger screens -->
    <div class="hidden md:block relative">
      <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary/20"></div>
      <div class="space-y-12 md:space-y-16">
        <div v-for="(milestone, index) in milestones" 
             :key="index"
             class="relative"
             :data-aos="'fade-up'"
             :data-aos-delay="index * 100">
          <div class="flex items-center" :class="{ 'flex-row-reverse': index % 2 !== 0 }">
            <div class="w-1/2 px-4 sm:px-6 md:px-8">
              <div class="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div class="text-accent font-bold mb-2">{{ milestone.date }}</div>
                <h3 class="text-lg sm:text-xl font-bold text-secondary mb-2">{{ milestone.title }}</h3>
                <p class="text-sm sm:text-base text-gray-600">{{ milestone.description }}</p>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vertical timeline for mobile -->
    <div class="md:hidden space-y-6">
      <div v-for="(milestone, index) in milestones" 
           :key="index"
           class="relative pl-8 border-l-2 border-secondary/20"
           :data-aos="'fade-up'"
           :data-aos-delay="index * 100">
        <div class="absolute left-0 top-0 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full"></div>
        <div class="bg-white p-4 rounded-xl shadow-lg">
          <div class="text-accent font-bold mb-2">{{ milestone.date }}</div>
          <h3 class="text-lg font-bold text-secondary mb-2">{{ milestone.title }}</h3>
          <p class="text-sm text-gray-600">{{ milestone.description }}</p>
        </div>
      </div>
    </div>
  </div>
</section>

    <!-- Interactive Stats -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(stat, index) in stats" 
               :key="index"
               class="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
               v-motion
               :initial="{ opacity: 0, scale: 0.5 }"
               :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: index * 100 } }"
               @mouseenter="startCount(index)">
            <div class="text-4xl font-bold text-secondary mb-2">
              <CountUp
                :endVal="stat.value"
                :duration="2.5"
                :options="{ suffix: stat.suffix }"
                ref="counters"
              />
            </div>
            <div class="text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import CountUp from 'vue-countup-v3'

const coreValues = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Striving for the highest standards in everything we do'
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Maintaining transparency and ethical conduct'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Embracing new ideas and creative solutions'
  },
  {
    icon: '🌱',
    title: 'Sustainability',
    description: 'Ensuring long-term positive impact'
  }
]

const milestones = [
  {
    date: 'January 2023',
    title: 'Education',
    description: 'Successfully recruited over 2,000 teachers, N14 billion spent on renovation and construction work in 203 public secondary schools. Also payment of examinations fees exceeding N1.2 billion for over 150,000 students across junior and senior secondary school exams'
  },
  {
    date: 'June 2023',
    title: 'Security',
    description: 'Facilitated the deployment of additional troops from the Nigerian Army 32 Artillery Brigade in response to traditional rulers’ request for more security reinforcement and the establishment of the Agro Marshals Corps as a grassroots security system to protect the forests and keep suspected kidnappers at bay.'
  },
  {
    date: 'December 2023',
    title: 'Agricultural Revolution',
    description: 'Implemented modern farming techniques benefiting over 1000 farmers'
  }
]

const awards = [
  {
    image: '/images/silverbird.jpg',
    title: 'Silverbird Man of the Year Award',
    description: 'In recognition of impactful leadership and good governance.',
    icon: '🏆',
    year: '2025',
    issuer: 'Silverbird',
    highlights: [
      'Innovative governance initiatives',
      'Transparent administration practices',
      'Impactful public sector reforms'
    ]
  },
  {
    image: '/images/outstand.jpg',
    title: 'Most Outstanding Governor of the Year',
    description: 'Honoured for his giant development strides in infrastructure, good governance and promoting peace in the 28 year-old state.',
    icon: '🌟',
    year: '2024',
    issuer: 'EDGE Awards',
    highlights: [
      'Developmental approach to governance',
      'Uplifting the standard of living in the state.',
      'inclusive leadership'
    ]
  },
  {
    image: '/images/nes-award.jpg',
    title: 'Governor of the Year',
    description: 'Awarded for exemplary public service and contributions to state development.',
    icon: '🎯',
    year: '2023',
    issuer: 'Daily Independent Newspaper',
    highlights: [
      'Community Development',
      'Good Governance',
      'Political Stability and Peace'
    ]
  }
]

const stats = [
  { value: 50000, suffix: '+', label: 'Lives Impacted' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 25, suffix: 'B', label: 'Investment Secured' },
  { value: 300, suffix: '+', label: 'Team Members' }
]

const counters = ref([])
const startCount = (index) => {
  counters.value[index]?.start()
}

import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #2563eb, #4f46e5);
  -webkit-background-clip: text;
  color: transparent;
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
