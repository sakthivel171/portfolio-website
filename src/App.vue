<template>
  <div class=" bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 min-h-screen text-white">
    <Navbar />
    <div class="mt-10">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: { Navbar}
}
</script>
