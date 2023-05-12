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
    axios.post('http://192.168.1.183:5000/login', {
      username: this.username,
      password: this.password
    })
          .then(response => {
            // Handle successful login response
            console.log(response.data.message);
            // You can perform additional actions, such as redirecting the user
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
  