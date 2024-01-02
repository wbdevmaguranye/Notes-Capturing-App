<template>
  <div>
    <div class="container">
      <h3>
        My Notes
        <!-- Ndoda id pano{{ user.value.id }} -->
      </h3>
      <NotesForm />
     <!-- {{ notesResponse }} -->
      <!-- I want this {{  user.id }} -->
      <div v-if="notesResponse.data" class="card-container">
<NCard v-for="note in notesResponse.data" :key="notesResponse.id" class="card">
<h2>{{ note.title }}</h2>
<p>{{ note.note }}</p>
</NCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {supabase} = useSupabase()
const {user} = useAuth();

const {data:notesResponse} = await useAsyncData('mynotesdata', async () => supabase.from('mynotesdata').select().eq("user_id", user.value.id));
// console.log("ba zoe notes",manotes.value)
// if(process.client){
//   notesResponse.value = await supabase .from("mynotesdata").select().eq("user_id", user.value.id);
// }
definePageMeta({
  middleware:"auth",
})
</script>

<style scoped>
.container{
  max-width: 50%;
  margin:  0 auto;
 padding: 3rem 0;
  height: 90vh;
  
}
h3{
font-size: 3rem;
}
.card{
  padding: 1rem;
  margin-top: 1.5rem;
  background-color: rgb(243, 233, 233);
}
.card h2{
  font-weight: bold;
  font-size: 1.5rem;

}
.card-container{
  margin-top: 1.5rem;
}
</style>