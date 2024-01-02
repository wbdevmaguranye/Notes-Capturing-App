<template>
  <div>
    <NCard class="card">
    <div v-if="!showConfirmEmailMessage">
        <h3>{{ authState }}</h3>
      <div class="input-container">
        <!-- {{ input.password }} -->
        <input placeholder="Email" v-model="input.email" />
        <input
          placeholder="Password"
          v-model="input.password"
          type="password"
        />
      </div>
      <!-- {{ user }} -->
      <NButton @click="handleSubmit">Submit</NButton>
   
      <p class="error" v-if="authError">{{ authError }}</p>
      <p class="p" @click="toggleAuthState">
        {{
          authState === "login"
            ? "Dont have an account? Create one now"
            : "Already has an account Login"
        }}
      </p>
    </div>
    <div v-else>
        <h3>Check email for confirmation message</h3>
    </div>
    </NCard>
  </div>
</template>

<script setup lang="ts">
const authState = ref<"login" | "signup">("login");
const authError = ref("");
const showConfirmEmailMessage = ref(false);
const input = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const { signUp, signIn, signOut, user } = useAuth();

const toggleAuthState = () => {
  if (authState.value === "login") {
    authState.value = "signup";
  } else {
    authState.value = "login";
   
  }
  authError.value=""
};
const handleSubmit = async () => {
  try {
    if (authState.value === "login") {
      // SIGNIN
      await signIn({ email: input.email, password: input.password });
      router.push("/myprofile")
    } else {
      // SIGNUP
      await signUp({ email: input.email, password: input.password });
      showConfirmEmailMessage.value=true;
    }
    input.email = "";
    input.password = "";
  } catch (err) {
    authError.value = err.message;
  }
};
</script>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
  background-color: rgb(243, 233, 233);
}
.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}
.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
}
.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}
.p {
  color: blue;
  font-size: 0.7rem;
  cursor: pointer;
}
.error {
  color: red;
}
</style>
