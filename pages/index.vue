<template>
  <div
    class="bg-slate-700 text-6xl h-screen text-white grid place-content-center gap-8"
  >
    <h1>Home Page</h1>

    <div
      class="text-xl text-red-400 cursor-pointer text-center"
      @click="handleLogout"
    >
      Logout
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
})

const handleLogout = () => {
  const accessToken = useCookie("accessToken")
  accessToken.value = null

  navigateTo("/login")
}
</script>
