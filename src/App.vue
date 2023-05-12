<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginForm/> <!-- Add this line to use the LoginForm component -->
  </div>
</template>

<script>
import LoginForm from './components/Login.vue' // Import the LoginForm component

export default {
  name: 'App',
  components: {
    LoginForm // Register the LoginForm component
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
