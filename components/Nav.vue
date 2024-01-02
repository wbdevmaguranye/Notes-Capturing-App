<template>
 <nav >
    <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/myprofile">My Profile</NuxtLink></li>
        <li class="logout" v-if="isLoggedIn()" @click="signOut">Logout</li>
    </ul>
 </nav>
</template>

<script setup lang="ts">
const {signOut,isLoggedIn} = useAuth();

</script>

<style>
nav{
    background: black; 
    height: 10vh;
}
ul{
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0.5rem;
}
li{
    color: white;
    margin-right: 3rem;
    padding: 2rem;
}
.logout{
margin-left: auto;
cursor: pointer;
}
</style>