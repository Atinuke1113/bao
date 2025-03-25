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

    <!-- Contact Section -->
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl md:text-5xl font-bold text-center text-secondary mb-4 md:mb-6"
    data-aos="fade-down">Get in Touch</h1>
    <p class="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8 md:mb-16 px-4"
    data-aos="fade-up"
    data-aos-delay="200">
    Have questions or feedback? We're here to help. Reach out to us through any of the channels below.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto px-4 md:px-6">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8"
       data-aos="fade-right">
    <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">Send us a Message</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
            <div>
              <label class="block text-gray-700 mb-2">Full Name</label>
              <input type="text" 
                     v-model="form.name"
                     class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors" 
                     required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Email Address</label>
              <input type="email" 
                     v-model="form.email"
                     class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors" 
                     required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Subject</label>
              <input type="text" 
                     v-model="form.subject"
                     class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors" 
                     required>
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Message</label>
              <textarea v-model="form.message"
                        rows="5"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-colors"
                        required></textarea>
            </div>
            <button type="submit" 
                    class="w-full bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors">
              Send Message
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-4 md:space-y-8" data-aos="fade-left">
          <div class="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8">
      <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">Contact Information</h2>
      <div class="space-y-4 md:space-y-6">
              <div class="flex items-start space-x-4">
                <div class="p-3 bg-accent/10 rounded-lg">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary">Office Address</h3>
                  <p class="text-gray-600 mt-1">Government House, Ado-Ekiti, Ekiti State, Nigeria</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="p-3 bg-accent/10 rounded-lg">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary">Email</h3>
                  <a href="mailto:info@ekitistate.gov.ng" class="text-accent hover:underline mt-1 block">
                    info@ekitistate.gov.ng
                  </a>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="p-3 bg-accent/10 rounded-lg">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary">Phone</h3>
                  <a href="tel:+2348000000000" class="text-accent hover:underline mt-1 block">
                    +234 800 000 0000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl p-6 md:p-8">
      <h2 class="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">Follow Us</h2>
      <div class="flex flex-wrap gap-4">
              <a href="#" class="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="p-3 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors">
                <svg class="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  })
})
</script>