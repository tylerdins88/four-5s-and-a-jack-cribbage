<template>
  <div>
    <button v-if="!showDeck" @click="startGame">Click the Deck to Start</button>
    <CardDeck v-if="showDeck" @deal-cards="dealCards" />
    <PlayerOne
      v-if="gameStart"
      :cards="playerOneCards"
      @send-to-crib="addToCrib"
    />
    <PlayerTwo
      v-if="gameStart"
      :cards="playerTwoCards"
      @send-to-crib="addToCrib"
    />
    <CribHand v-if="crib.length > 0" :cards="crib" />
  </div>
</template>

<script>
import CardDeck from "./components/CardDeck.vue";
import PlayerOne from "./components/PlayerOne.vue";
import PlayerTwo from "./components/PlayerTwo.vue";
import CribHand from "./components/CribHand.vue";

export default {
  data() {
    return {
      showDeck: false,
      gameStart: false,
      playerOneCards: [],
      playerTwoCards: [],
      crib: [],
    };
  },
  methods: {
    startGame() {
      this.showDeck = true;
      this.gameStart = true;
    },
    dealCards({ playerOneCards, playerTwoCards }) {
      this.playerOneCards = playerOneCards;
      this.playerTwoCards = playerTwoCards;
    },
    addToCrib(cards) {
      this.crib = this.crib.concat(cards);
    },
  },
  components: {
    CardDeck,
    PlayerOne,
    PlayerTwo,
    CribHand,
  },
};
</script>

<style scoped>
.hand {
  display: flex;
  justify-content: center;
}

.card {
  border: solid 1px #aaa;
  border-radius: 9px;
  width: 95px;
  height: 150px;
  background-color: white;
  padding: 3px;
  margin: 5px;
  position: relative;
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 9px;
}
</style>
