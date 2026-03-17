<template>
    <section class="min-h-screen bg-gradient-to-b from-black via-[#021014] to-black text-white flex items-center justify-center px-4">
        <div class="w-full max-w-2xl text-center">
            
            <h1 class="text-3xl md:text-5xl font-bold bg-cyan-500 to-cyan-300 text-transparent bg-clip-text">Let's Connect & Collabrate </h1>

            <p class="text-gray-400 mt-4 text-sm md:text-base"> Whether it’s a new project, a collaboration, or just to say Hi —I’d love to hear from you!</p>

            <div class="flex justify-center gap-4 md:gap-6 flex-wrap">
                <a v-for="(icon,i) in icons" :key="i"class="social-icon ">
                    <img :src="icon.img" alt="icon.name" class="w-12 h-12">
                </a>
            </div>
            
            <form class="mt-8 space-y-8">
                <input type="text" placeholder="Enter Your Name" class="input-box">
                <input type="text" placeholder="Your Mail or Phone" class="input-box">
                <input type="text" placeholder="Subject" class="input-box">
                <textarea rows="4" placeholder="Your Message" class="input-box"></textarea>

                <button class="send-btn">Send Message</button>
            </form>
        </div>

    </section>
</template>
<script>
export default{
    name:"Contact",
    data()
    {
      return{
        icons:[
            {name:"",img:"/git.png"},
            {name:"",img:"/linkedin.png"},
            {name:"",img:"/gmail.png"},
            {name:"",img:"/instagram.png"},
            {name:"",img:"/facebook.png"},
        ]
      }
    }
}
</script>