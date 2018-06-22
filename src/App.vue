<template>
  <App>
    <PizzaBuilder
      :sauce="sauce"
      :size="size"
      :toppings="toppings"
      :onChangeSauce="changeSauce"
      :onChangeSize="changeSize"
      :onChangeToppings="changeToppings"
    />
  </App>
</template>

<script>
import styled from 'vue-styled-components';
import PizzaBuilder from './components/PizzaBuilder';
import { font } from './lib/theme';

const App = styled.div`
  font-family: ${font.sans};
  font-size: 16px;
`;

export default {
  data() {
    return {
      sauce: 'redsauce',
      size: 14,
      toppings: [],
    };
  },
  methods: {
    changeSauce(newVal) {
      this.sauce = newVal;
    },
    changeSize(newVal) {
      this.size = newVal;
    },
    changeToppings(newVal) {
      this.toppings = newVal;
    },
  },
  components: {
    App,
    PizzaBuilder,
  },
};
</script>
