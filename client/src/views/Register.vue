<template>
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">Register</h1>
        <form @submit.prevent="register" class="mb-8">
          <div class="mb-4">
            <input
              type="text"
              v-model="fullName"
              placeholder="Full Name"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-4">
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div class="mb-4">
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <button
            type="submit"
            class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        <p class="text-center">
          Already have an account? 
          <router-link to="/login" class="text-indigo-600"> Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { API_URL } from '../config/index.js'

const fullName = ref('');
const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-up`, {
      full_name: fullName.value,
      email: email.value,
      password: password.value,
    });

    sessionStorage.setItem('userId', response.data.user.id);
    sessionStorage.setItem('access_token', response.data.access_token);
    sessionStorage.setItem('refresh_token', response.data.refresh_token);

    router.push('/tasks');
  } catch (error) {
    console.error('Registration failed:', error.response ? error.response.data : error.message);
    alert('Registration failed. Please check your details. ' + (error.response ? error.response.data.message : ''));
  }
};
</script>
