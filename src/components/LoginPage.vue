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
//   import { router } from '../router.js';
  import router from '../router.js';

  
  export default {
    name: 'LoginPage',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
  login() {
    axios.post('192.168.1.183:5000/login', {
      username: this.username,
      password: this.password
    })
      .then(response => {
        console.log(response.data.message);
        router.push('/dashboard'); // Replace '/dashboard' with your desired route
      })
      .catch(error => {
        if (error.response && error.response.data) {
          // handle error with response data
          console.error(error.response.data.message);
        } else {
          // handle generic error
          console.error('An error occurred:', error.message);
        }
      });
  }
}
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  