<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="fixed w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <div class="container mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <img src="@/assets/images/logo.png" alt="BAO Logo" class="h-16 xs:h-18 w-auto">
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1 lg:space-x-4">
            <NuxtLink v-for="item in navItems" 
                      :key="item.path"
                      :to="item.path"
                      class="px-3 lg:px-4 py-2 text-sm lg:text-base text-gray-600 hover:text-accent rounded-lg transition-colors"
                      :class="{ 'text-accent bg-accent/5': isCurrentPath(item.path) }">
              {{ item.name }}
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" 
                  class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Toggle menu">
            <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform -translate-y-2 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
        >
          <div v-if="isMenuOpen" 
               class="md:hidden py-2 border-t"
               @click.self="closeMenu">
            <div class="space-y-1">
              <NuxtLink v-for="item in navItems" 
                        :key="item.path"
                        :to="item.path"
                        class="block px-4 py-3 text-base text-gray-600 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors"
                        :class="{ 'text-accent bg-accent/5': isCurrentPath(item.path) }"
                        @click="closeMenu">
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </transition>
      </div>
    </nav>

    <!-- Spacer -->
    <div class="h-16 sm:h-20"></div>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-accent-light/20 mt-12">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center text-secondary-dark">
          © {{ new Date().getFullYear() }} Governor's Office. All rights reserved.
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
const route = useRoute()

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Media', path: '/media' },
  { name: 'Initiatives', path: '/initiative' },
  { name: 'Contact', path: '/contact' }
]

const isCurrentPath = (path) => route.path === path

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

// Close mobile menu when route changes
watch(route, closeMenu)

// Close mobile menu when screen size changes to desktop
onMounted(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)')
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) closeMenu()
  })
})
</script>


   
