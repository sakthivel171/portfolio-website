<template>
  <section class="relative mt-14 min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#050816] to-black overflow-hidden text-white">

    <!-- Floating Skills -->
    <div class="relative h-[420px] w-6xl flex justify-center items-center">

      <div
        v-for="(skill, index) in visibleSkills"
        :key="index"
        class="skill-circle"
        :style="skill.position"
      >
        <img :src="skill.icon" class="w-8 h-8 object-contain" />
        <p class="text-xs mt-2 text-gray-300">{{ skill.name }}</p>
      </div>

    </div>

    <!-- Bottom Cards -->
    <div class="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">

      <div
        v-for="(section, i) in sections"
        :key="i"
        class="bg-[#0c1324] border border-cyan-800 rounded-xl p-6
                hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)]
                transition-all duration-300"
      >
        <h3 class="text-lg font-semibold mb-4 text-cyan-400">
          {{ section.title }}
        </h3>

        <ul class="space-y-2 text-gray-300 text-sm">
          <li v-for="(item, j) in section.items" :key="j">
            • {{ item }}
          </li>
        </ul>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  name: "SkillsSection",

  data() {
    return {
      topSkills: [
        {
          name: "OpenCV",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
          position: "top:5%; left:10%; animation-delay:0s;"
        },
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          position: "top:8%; left:45%; animation-delay:1s;"
        },
        {
          name: "PyTorch",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
          position: "top:12%; right:10%; animation-delay:2s;"
        },
        {
          name: "C",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
          position: "top:40%; left:5%; animation-delay:3s;"
        },
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          position: "top:45%; left:40%; animation-delay:1.5s;"
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
          position: "top:42%; right:5%; animation-delay:2.5s;"
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
          position: "bottom:10%; left:20%; animation-delay:3.5s;"
        },
        {
          name: "TensorFlow",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
          position: "bottom:10%; right:20%; animation-delay:4s;"
        }
      ],

      sections: [
        {
          title: "Programming Languages",
          items: ["Python", "C", "C++", "Java"]
        },
        {
          title: "Web Technologies",
          items: ["HTML", "CSS", "JavaScript", "React"]
        },
        {
          title: "Databases & Tools",
          items: ["MySQL", "MongoDB", "Git"]
        },
        {
          title: "Frameworks & Libraries",
          items: ["TensorFlow", "PyTorch", "OpenCV"]
        },
        {
          title: "Core Concepts",
          items: [
            "Data Structures & Algorithms",
            "Machine Learning",
            "Deep Learning",
            "YOLO Object Detection",
            "Explainable AI (XAI)"
          ]
        },
        {
          title: "Soft Skills",
          items: [
            "Teamwork",
            "Problem Solving",
            "Creativity",
            "Adaptability",
            "Communication"
          ]
        }
      ],

      screenWidth: window.innerWidth
    };
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

  mounted() {
    window.addEventListener("resize", this.updateWidth);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  },

  methods: {
    updateWidth() {
      this.screenWidth = window.innerWidth;
    }
  }
};
</script>

<style scoped>
.skill-circle {
  position: absolute;
  width: 95px;
  height: 95px;
  border-radius: 9999px;
  background: rgba(93, 132, 247, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  animation: float 5s ease-in-out infinite; /* faster */
}

.skill-circle:hover {
  border-color: rgba(0, 255, 255, 1);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.9);
  transform: scale(1.1);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
}
</style>