<template>
  <div>
    <h2>Player One's Hand</h2>
    <div class="hand">
      <div
        v-for="(card, index) in cards"
        :key="index"
        :class="['card', { selected: selectedCards.includes(index) }]"
        @mouseover="hoverCard(index)"
        @mouseleave="unhoverCard(index)"
        @click="selectCard(index)"
      >
        <img :src="getCardImage(card)" :alt="card.Value + ' of ' + card.Suit" />
      </div>
    </div>
    <div v-if="selectedCards.length === 2" class="selected-indicator">
      <button @click="sendToCrib" class="btn">
        Send these 2 cards to the crib
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedCards: [],
    };
  },
  methods: {
    hoverCard(index) {
      this.$refs[`card-${index}`]?.classList.add("hovered");
    },
    unhoverCard(index) {
      this.$refs[`card-${index}`]?.classList.remove("hovered");
    },
    selectCard(index) {
      if (this.selectedCards.includes(index)) {
        this.selectedCards = this.selectedCards.filter(
          (cardIndex) => cardIndex !== index
        );
      } else if (this.selectedCards.length < 2) {
        this.selectedCards.push(index);
      }
    },
    sendToCrib() {
      const selectedCards = this.selectedCards.map(
        (index) => this.cards[index]
      );
      this.$emit("send-to-crib", selectedCards);
      this.selectedCards = [];
    },
    getCardImage(card) {
      return require(`../assets/cards/${card.Value}_of_${card.Suit}.png`);
    },
  },
};
</script>

<style scoped>
.hand {
  display: flex;
  justify-content: center;
}

.deck .card {
  border: solid 1px #aaa;
  border-radius: 9px;
  width: 95px;
  height: 150px;
  background-color: white;
  padding: 3px;
  margin: 5px;
  float: left;
  transition: box-shadow 0.3s, border 0.3s;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 9px;
}

.card.selected {
  border: 3px solid yellow;
}

.card:hover {
  box-shadow: 0 0 10px yellow;
}

.selected-indicator {
  margin-top: 10px;
}

.btn {
  background-color: yellow;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #ffd700;
}
</style>
