<template>
  <div class="deck">
    <h1>A Deck of Cards</h1>
    <div id="deck">
      <div v-for="(card, index) in deck" :key="index" class="card">
        <div class="value">{{ card.Value }}</div>
        <div :class="['suit', card.Suit]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suits: ["spades", "diamonds", "clubs", "hearts"],
      values: [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
      ],
      deck: [],
    };
  },
  created() {
    this.deck = this.getDeck();
    this.shuffleThreeTimes();
    this.dealCards();
  },
  methods: {
    getDeck() {
      let deck = [];
      for (let i = 0; i < this.suits.length; i++) {
        for (let x = 0; x < this.values.length; x++) {
          let card = { Value: this.values[x], Suit: this.suits[i] };
          deck.push(card);
        }
      }
      return deck;
    },
    shuffleDeck() {
      for (let i = this.deck.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]; // Swap elements
      }
    },
    shuffleThreeTimes() {
      for (let i = 0; i < 3; i++) {
        this.shuffleDeck();
      }
    },
    dealCards() {
      const playerOneCards = this.deck.splice(0, 6);
      const playerTwoCards = this.deck.splice(0, 6);
      this.$emit("deal-cards", { playerOneCards, playerTwoCards });
    },
  },
};
</script>

<style scoped>
.deck {
  display: flex;
  flex-wrap: wrap;
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
}

.card .value {
  font-size: 15pt;
  font-family: sans-serif;
  color: black;
}

.card .suit {
  background-image: url(../assets/card-suit.png);
  height: 100px;
  width: 90px;
}

.card .diamonds {
  background-position-y: 100px;
}

.card .hearts {
  background-position-x: 90px;
}

.card .clubs {
  background-position-x: 90px;
  background-position-y: 100px;
}

.btn {
  margin-top: 10px;
}
</style>
