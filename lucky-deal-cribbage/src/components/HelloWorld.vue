<template>
  <div>
    <img
      src="../assets/welcome-cribbage.jpeg"
      class="logo"
      alt="welcome cribbage"
    />
  </div>
  <div class="card">
    <button type="button" @click="navigateToGamePage">
      Click to Get Started
    </button>
    <button type="button" @click="navigateToCribbageRundown">
      Quick Rundown
    </button>
  </div>

  <h1>Welcome to Lucky Deal Cribbage.</h1>

  <p class="read-the-docs">
    This is the cribbage game you've been looking for. Start off by creating an
    account. This account will keep track of games completed, high scores, total
    points scored, and more. Add friends to play against and work your way up
    different ranks!
  </p>
</template>

<script>
export default {
  methods: {
    navigateToGamePage() {
      this.$router.push("/game");
    },
    navigateToCribbageRundown() {
      this.$router.push("/rundown");
    },
  },
};
</script>

<style scoped>
/* Add scoped styles if needed */
</style>
