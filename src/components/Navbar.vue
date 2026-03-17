<template>
  <div class=" bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <!-- nav -->
     <nav class="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
      <div class="w-full mx-auto px-8">
        <div class="flex items-center justify-between h-16">
          <!-- logo -->
           <div class="flex items-center space-x-2">
             <div class="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
              <span class="text-white font-bold text-lg">SK</span>
            </div>

            <div>
              <h1 class="text-white font-bold text-lg">SAKTHIVEL</h1>
              <p class="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
           </div>

           <!-- desktop menu -->
           <div class="hidden md:flex space-x-14">
             <router-link v-for="item in menu" :key="item.name" :to="item.path" class="nav-link" >{{ item.name }}</router-link> 
            </div>       
            <button class="md:hidden text-white" @click="toggleMenu">☰</button>
        </div>    
        <div class="mobile-menu" :class="{ open:isMenuOpen }"  >
            <router-link v-for="item in menu" :key="item.name" :to="item.path" @click="isMenuOpen=false">{{ item.name }}</router-link>
        </div>          
      </div>
     </nav>
  </div>
</template>

<script>
export default{
  name:'navbar',
  data(){
    return{
      isMenuOpen:false,
      menu: [
       {name:'Home',path:'/'},
       {name:'Projects',path:'/'},
       {name:'Skills',path:'/skills'},
       {name:'About',path:'/about'},
       {name:'Contact',path:'/Contact'},
      ]
    }
  },
  methods:{
    toggleMenu(){
      this.isMenuOpen=!this.isMenuOpen
    }
  }
}
</script>

<style>
.nav-link {
  color: white;
  font-size: 16px;
  transition: 0.3s;
  font-weight: 600;
}
.nav-link:hover {
  color: #22d3ee;
}

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  background: rgba(2,6,23,0.95);
  border-top: 1px solid #1e293b;
}

.mobile-menu a {
  padding: 12px;
  color: #e5e7eb;
  border-bottom: 1px solid #1e293b;
}

/* Open state */
.mobile-menu.open {
  display: flex;
}

@media (min-width: 768px) {
  .mobile-menu {
    display: none !important;
  }
}
</style>