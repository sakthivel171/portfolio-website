<template>
<!-- <section class="mt-16">
    <div class="relative h-[420px] w-full px-52">
        <div v-for="(skill,index) in visibleSkills" :key="index" class="skill-circle" :style="skill.position">
            <img :src="skill.icon" :alt="skill.name" class="w-10 h-10 object-contain">
            <p>{{ skill.name }}</p>
        </div>
    </div>
</section> -->

<section class="py-20 px-4 lg:px-20 min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center">
      <span class="px-4 py-1 text-md tracking-widest border border-cyan-500 bg-cyan-300/20 text-cyan-400 rounded-full">TECHNICAL SKILLS</span>
      <h2 class="text-5xl font-extrabold mt-6">Full Stack <span class="text-cyan-400">Developer</span></h2>
      
      <p class="text-gray-400 mt-4 max-w-xl mx-auto"> Bridging the gap between robust backend architecture and interactive
        frontend experiences.</p>
      </div>
    </div>
    <div class=" grid lg:grid-cols-3 py-6 gap-8">
        <div v-for="(section,i) in sections" :key="i" class="bg-[#120a2e] border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition">
          <div class="flex justify-between items-center mb-6">
            <span class="text-gray-500 text-sm">0{{index+1}}</span>
            <span class="text-xl">{{ section.icon }}</span>
          </div>

          <h3 class="text-xl font-semibold">{{ section.title }}</h3>
          <div class="flex flex-wrap mt-3 gap-2">
           <span v-for="(skill,i ) in section.items" class="px-3 py-1 text-sm lg:text-md border border-cyan-700 bg-cyan-200/20 rounded-md text-cyan-300">{{ skill }}</span>
          </div>
        </div>

        <div class="bg-[#0d1a3a] border border-cyan-600 rounded-2xl p-8">
          <div class="flex justify-between mb-2">
            <span class="text-xl">💡</span>
          </div>

          <h3 class="font-semibold text-xl mb-4">Deliverables</h3>

          <ul class="space-y-1 text-gray-300">
            <li class="flex items-center gap-2">
              <span class="text-cyan-400 font-bold text-2xl">•</span>
              Authentication & Authorization
            </li>
          </ul>

          <ul class="space-y-1 text-gray-300">
            <li class="flex items-center gap-2">
              <span class="text-cyan-400 font-bold text-2xl">•</span>
              API Integration
            </li>
          </ul>

          <ul class="space-y-1 text-gray-300">
            <li class="flex items-center gap-2">
              <span class="text-cyan-400  text-2xl">•</span>
              Payment Gateway Integration
            </li>
          </ul>

          <ul class="space-y-1 text-gray-300">
            <li class="flex items-center gap-2">
              <span class="text-cyan-400 font-bold text-2xl">•</span>
              Database Design
            </li>
          </ul>

          <ul class="space-y-1 text-gray-300">
            <li class="flex itemd-center gap-2">
              <span class="text-cyan-400 font-bold text-2xl">•</span>
              Responsive UI Development
            </li>
          </ul>

        </div>
    </div>
</section>
</template>

<script>
export default {
    name:'skillSection',

    data(){
        return{
            topSkills:[
                {
                    name:"HTML",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                    position:"top:5%; left:10%; animation-delay:0s"
                },
                {
                    name:"CSS",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                    position:""
                },
                {
                    name:"Tailwind CSS",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
                    position:"top:12%; right:10%; animation-delay:2s;"
                },
                {
                    name:"javascript",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                    position:""
                },
                {
                    name:"Vue.js",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
                    position:""
                },
                                {
                    name:"",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
                    position:""
                },
                {
                    name:"PHP",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
                    position:""
                },
                {
                    name:"Laravel",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
                    position:""
                },
                {
                    name:"Aws",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                    position:""
                },
                {
                    name:"MySQL",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    position:""
                },
                {
                    name:"Rest Api",
                    icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
                    position:""
                },

            ],
            sections: [
              {
                title: "Frontend",
                icon:"",
                items: ["HTML","CSS","Tailwind CSS","JavaScript","Vue.js"]
              },
              {
                title:"Backend",
                icon:"",
                items:["PHP","Laravel","Rest API"]
              },
               {
                title:"Database & Cloud",
                icon:"",
                items:["MYSQL","AWS"]
              },
              {
                title:"Workflow",
                icon:"",
                items:["Git", "GitHub", "VS Code", "Debugging"]
              },

            ],

        }
    },
    
  computed: {
    visibleSkills() {
      // small screen → only 5
      if (this.screenWidth < 768) {
        return this.topSkills.slice(0, 5);
      }
      return this.topSkills;
    }
  },
}
</script>

