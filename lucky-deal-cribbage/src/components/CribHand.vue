<template>
  <div class="crib">
    <h3>Crib</h3>
    <div class="hand">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <img :src="getCardImage(card)" :alt="card.Value + ' of ' + card.Suit" />
      </div>
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
  methods: {
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
}

.card img {
  width: 100%;
  height: 100%;
  border-radius: 9px;
}

.crib {
  margin-top: 20px;
  text-align: center;
}
</style>
