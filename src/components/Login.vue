<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Make API request to the backend for authentication
        axios.post('/login', {
          username: this.username,
          password: this.password
        })
          .then(response => {
            // Handle successful login response
            console.log(response.data.message);
            // You can perform additional actions, such as redirecting the user
          })
          .catch(error => {
            // Handle error response
            console.error(error.response.data.message);
            // You can display an error message to the user
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  