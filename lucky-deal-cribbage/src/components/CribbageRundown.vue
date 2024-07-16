<template>
  <div class="cribbage-rules">
    <div class="header">
      <h1>Cribbage Rules</h1>
      <button class="home-button" @click="goHome">Home</button>
    </div>
    <h2>Objective</h2>
    <p>
      The objective of cribbage is to be the first player to score 121 points,
      which are earned through various card combinations.
    </p>
    <h2>Setup</h2>
    <ul>
      <li>
        <strong>Players:</strong> Typically 2, but can also be played with 3 or
        4 players.
      </li>
      <li><strong>Deck:</strong> Standard 52-card deck.</li>
      <li><strong>Cribbage Board:</strong> Used for scoring.</li>
    </ul>
    <h2>Gameplay</h2>
    <ol>
      <li>
        <strong>Deal:</strong> Each player is dealt 6 cards. In a 2-player game,
        each player keeps 4 cards and discards 2 into the crib, which will be an
        extra hand scored by the dealer.
      </li>
      <li>
        <strong>Cut:</strong> The non-dealer cuts the deck, and the dealer
        reveals the top card of the lower portion of the deck, known as the
        "starter" or "cut" card. This card is used by both players for forming
        combinations.
      </li>
      <li>
        <strong>Pegging:</strong>
        <ul>
          <li>
            Players take turns laying down one card at a time, adding to a
            running total but not exceeding 31.
          </li>
          <li>
            Points are scored during this phase for combinations such as pairs,
            runs, and totals of 15.
          </li>
        </ul>
      </li>
      <li>
        <strong>Counting Hands:</strong>
        <ul>
          <li>
            After all cards are played, players count their hands and the
            starter card for combinations.
          </li>
          <li>The dealer also counts the crib.</li>
        </ul>
      </li>
    </ol>
    <h2>Scoring</h2>
    <ul>
      <li>
        <strong>15s:</strong> Any combination of cards that adds up to 15 scores
        2 points.
      </li>
      <li><strong>Pairs:</strong> A pair scores 2 points.</li>
      <li>
        <strong>Runs:</strong> A run of three or more consecutive cards scores
        points equal to the number of cards in the run.
      </li>
      <li>
        <strong>Flush:</strong> Four cards of the same suit (excluding the
        starter) score 4 points, five cards (including the starter) score 5
        points.
      </li>
      <li>
        <strong>Nobs:</strong> A jack in the hand that matches the suit of the
        starter card scores 1 point.
      </li>
    </ul>
    <h2>Winning</h2>
    <p>
      The first player to reach or exceed 121 points wins the game. If a player
      pegs out (reaches 121 points) during the pegging phase, the game ends
      immediately.
    </p>
    <p>
      If you have any specific questions about certain aspects of the game, feel
      free to ask!
    </p>
  </div>
</template>

<script>
export default {
  name: "CribbageRules",
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.cribbage-rules {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.home-button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home-button:hover {
  background-color: #2980b9;
}

.cribbage-rules h2 {
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
}

.cribbage-rules p,
.cribbage-rules ul,
.cribbage-rules ol {
  line-height: 1.6;
  margin-bottom: 20px;
}

.cribbage-rules ul,
.cribbage-rules ol {
  padding-left: 20px;
}

.cribbage-rules li {
  margin-bottom: 10px;
}
</style>
