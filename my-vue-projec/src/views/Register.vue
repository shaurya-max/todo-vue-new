<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="phoneNo">Phone No:</label>
        <input type="text" id="phoneNo" v-model="phoneNo" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      phoneNo: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        const response = await fetch('http://localhost:8000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            email: this.email,
            phoneNo: this.phoneNo,
            password: this.password
          })
        });

        const result = await response.json();

        if (response.ok) {
          this.$router.push('/login'); // Navigate to login after successful registration
        } else {
          console.error('Registration failed:', result);
          // Handle registration failure (e.g., display an error message)
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
