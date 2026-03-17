<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white pt-32 px-6">
    
    <div class="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
      
  
      <div class="flex justify-center">
        <div class="relative w-56 h-56 md:w-80 md:h-80">

          <!-- Glow Effect -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-transparent blur-2xl opacity-40"></div>

          <!-- Animated Ring -->
          <div class="absolute inset-0 rounded-full border-4 border-cyan-500 animate-pulse"></div>

          <!-- Profile Image -->
          <div class="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500 shadow-2xl shadow-cyan-500/30">
            <img 
              src="/profile.jpg" 
              alt="Sakthivel"
              class="w-full h-full "
            />
          </div>  

        </div>
      </div>

      <div>
        <h1 class="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm 
          <span class="text-cyan-400">Sakthivel</span>
        </h1>


        <p class="text-xl font-medium text-slate-300  mt-1">
          Full Stack Web Developer | Vue.js & Laravel Specialist
        </p>

    
        <div class="flex flex-wrap gap-3 mt-6">
          <span class="px-5 py-2 border border-cyan-500 rounded-full md:text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            Full Stack Developer
          </span>
          <span class="px-5 py-2 border border-cyan-500 rounded-full text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            Frontend Engineer
          </span>
          <span class="px-5 py-2 border border-cyan-500 rounded-full text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            Backend Developer
          </span>
          <span class="px-5 py-2 border border-cyan-500 rounded-full text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            Database Designer
          </span>
          <span class="px-5 py-2 border border-cyan-500 rounded-full text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            Rest API Developer
          </span>
          <span class="px-5 py-2 border border-cyan-500 rounded-full text-md hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300  hover:text-white transition duration-300">
            UI Builder
          </span>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

       
          <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-5 hover:bg-slate-800 transition">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-pink-500 text-lg">📍</span>
              <h3 class="font-semibold">Location</h3>
            </div>
            <p class="text-slate-300 text-sm">Thiruverambur, Trichy</p>
          </div>

          <!-- Expertise -->
          <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-5 hover:bg-slate-800 transition">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-yellow-400 text-lg">💼</span>
              <h3 class="font-semibold">Expertise</h3>
            </div>
            <p class="text-slate-300 text-sm">Web Development</p>
          </div>

          <!-- Contact -->
          <div class="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-5 hover:bg-slate-800 transition">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-blue-400 text-lg">✉️</span>
              <h3 class="font-semibold">Contact</h3>
            </div>
            <p class="text-slate-300 text-sm break-all">rajansakthivel15@gmail.com</p>
          </div>

        </div>
        <div>  
        </div>
      </div>

      <div class=""></div>
    </div>
  </div>
  <Skills/>
</template>

<script>


import Skills from './Skills.vue';
export default {
  name: "Home",
  components:{Skills}
}
</script> 