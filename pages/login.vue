<template>
  <div class="h-screen bg-slate-700 grid place-content-center text-white gap-8">
    <h1 class="text-2xl">Login</h1>

    <form class="grid gap-4" @submit.prevent="handleLogin">
      <div class="grid gap-2">
        <label>Email</label>
        <input
          type="text"
          v-model="userInput.email"
          class="text-black px-2 py-1 rounded"
        />
      </div>

      <div class="grid gap-2">
        <label>Password</label>
        <input
          type="password"
          v-model="userInput.password"
          class="text-black px-2 py-1 rounded"
        />
      </div>

      <button class="mt-4 bg-black px-4 py-2 rounded">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { $axios } = useNuxtApp()

const userInput = reactive({
  email: "",
  password: "",
})

const handleLogin = async () => {
  const response = await $axios({
    url: "/login",
    method: "POST",
    data: {
      email: userInput.email,
      password: userInput.password,
    },
  })

  // Set received access to cookie
  const accessToken = useCookie("accessToken")
  accessToken.value = response?.data?.accessToken

  // // FIXME: testing
  // const accessToken = useCookie("accessToken")
  // accessToken.value = "placeholder"

  // Redirect to home page
  navigateTo("/")
}
</script>
