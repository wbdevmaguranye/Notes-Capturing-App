<template>
    <div>
   <div class="container">
    <!-- {{ supabase }}  -->
    <AuthCard />
   </div>
    </div>
  </template>
  <script setup lang="ts">
const {supabase} = useSupabase()
</script>
  <style scoped>
  .container{
    max-width: 50%;
    margin:  0 auto;
    display:  flex;
    justify-content:  center;
    align-items: center;
    height: 90vh;
  }
  </style>