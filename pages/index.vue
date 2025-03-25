<template>
  <div class="overflow-hidden">
    <section class="hero bg-secondary text-white py-20 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div class="max-w-3xl animate-fade-in-left">
            <h1 class="text-5xl font-bold mb-6 animate-slide-up">Governor Biodun Abayomi Oyebanji</h1>
            <p class="text-xl mb-4 animate-slide-up delay-200">Serving the People of Ekiti State.</p>
            <p class="text-lg mb-8 animate-slide-up delay-300 leading-relaxed">
              Committed to transforming Ekiti State through sustainable development, 
              innovative governance, and inclusive growth. Our administration focuses on 
              six pillars of development: Youth Development and Job Creation, Human Capital 
              Development, Agriculture and Rural Development, Infrastructure and Industrialization, 
              Arts, Culture and Tourism, and Governance.
            </p>
            <div class="flex gap-4 animate-slide-up delay-400">
              <NuxtLink
                to="/about"
                class="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-dark transition-all duration-300 hover:scale-105 inline-block"
              >
                Learn More
              </NuxtLink>
              <NuxtLink
                to="/"
                class="bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-block"
              >
                View Initiatives
              </NuxtLink>
            </div>
          </div>
          <div class="relative h-[500px] animate-fade-in-right">
            <div class="absolute inset-0 bg-accent/20 rounded-lg transform -rotate-3"></div>
            <div class="absolute inset-0 bg-white rounded-lg transform rotate-3 overflow-hidden">
              <img
                src="@/assets/images/new-bao.jpeg"
                alt="Governor Portrait"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center text-secondary animate-fade-in">Key Initiatives</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary transform hover:-translate-y-2 transition-all duration-300">
            <h3 class="text-xl font-bold mb-4 text-primary">Education</h3>
            <p class="text-gray-600">Improving educational opportunities for all residents.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-secondary transform hover:-translate-y-2 transition-all duration-300">
            <h3 class="text-xl font-bold mb-4 text-secondary">Economy</h3>
            <p class="text-gray-600">Creating jobs and fostering economic growth.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-accent transform hover:-translate-y-2 transition-all duration-300">
            <h3 class="text-xl font-bold mb-4 text-accent">Infrastructure</h3>
            <p class="text-gray-600">Building a stronger, more connected state.</p>
          </div>
        </div>
      </div>
    </section>

    
    <!-- New Achievements Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-secondary text-center">Key Achievements</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-6 animate-fade-in">
            <div class="text-4xl font-bold text-primary mb-2">150+</div>
            <div class="text-gray-600">Projects Completed</div>
          </div>
          <div class="p-6 animate-fade-in delay-200">
            <div class="text-4xl font-bold text-secondary mb-2">₦50B+</div>
            <div class="text-gray-600">Investments Attracted</div>
          </div>
          <div class="p-6 animate-fade-in delay-300">
            <div class="text-4xl font-bold text-accent mb-2">200k+</div>
            <div class="text-gray-600">Jobs Created</div>
          </div>
          <div class="p-6 animate-fade-in delay-400">
            <div class="text-4xl font-bold text-primary mb-2">16</div>
            <div class="text-gray-600">LGAs Impacted</div>
          </div>
        </div>
      </div>
    </section>


    <!-- New Call to Action Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6">Join Our Journey</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Join us in building a better Ekiti State. Subscribe to our newsletter for updates.</p>
        <div class="max-w-md mx-auto flex gap-4">
          <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 rounded-lg text-gray-800" />
          <button class="bg-accent hover:bg-accent-dark px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-in;
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}
</style>