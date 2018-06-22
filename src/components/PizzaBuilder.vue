<template>
<div>
  <FormGroup>
    <Heading>🍕 Sauce</Heading>
    <div>
      <select v-model="tempSauce">
        <option value="redsauce">{{ 'redsauce' | sauce }}</option>
        <option value="whitesauce">{{ 'whitesauce' | sauce }}</option>
        <option value="none">{{ 'none' | sauce }}</option>
      </select>
    </div>
    🍕 You’ve selected <strong>{{ sauce | sauce }}</strong>.
  </FormGroup>
  <FormGroup>
    <Heading>📏 Pizza Size</Heading>
    <div>
      <label>
        <input type="radio" name="size" v-model.number="tempSize" value="14">
        14"
      </label>
      <label>
        <input type="radio" name="size" v-model.number="tempSize" value="16">
        16"
      </label>
      <label>
        <input type="radio" name="size" v-model.number="tempSize" value="18">
        18"
      </label>
    </div>
    You’ve selected <strong>{{ size | size }}</strong>.
  </FormGroup>
  <FormGroup>
    <Heading>🍅 Toppings</Heading>
    <div>
      <input type="search" placeholder="Filter" v-model="query" />
      <Topping v-for="option in filteredToppings" :key="option">
        <input type="checkbox" name="toppings" v-model="tempToppings" :value="option">
        {{option}}
      </Topping>
      <div v-if="!filteredToppings.length">
        No toppings found!
        <button @click="clearSearch">Clear</button>
      </div>
    </div>
    <div v-if="toppings.length">
      You’ve selected <strong>{{ toppings.join(', ') }}</strong>.
    </div>
    <div v-else>
      You haven’t selected any toppings!
    </div>
  </FormGroup>
</div>
</template>

<script>
import styled from 'vue-styled-components';
import { font } from '../lib/theme';

const FormGroup = styled.div`
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

const Heading = styled.h2`
  font-size: ${font.up1};
`;

const Topping = styled.label`
  display: block;
`;

export default {
  data() {
    return {
      tempSauce: 'redsauce',
      tempSize: 14,
      tempToppings: [],
      toppingOptions: [
        'Mushroom',
        'Pepperoni',
        'Peppers',
        'Olives',
        'Anchovies',
        'Sausage',
        'Veggie',
        'Parmesian',
        'Extra Cheese',
      ],
      query: '',
    };
  },
  computed: {
    filteredToppings() {
      const queryLower = this.query.toLowerCase().trim();
      return this.toppingOptions.filter(
        option => option.toLowerCase().indexOf(queryLower) >= 0,
      );
    },
  },
  methods: {
    clearSearch() {
      this.query = '';
    },
  },
  watch: {
    tempSauce(newVal) {
      this.onChangeSauce(newVal);
    },
    tempSize(newVal) {
      this.onChangeSize(newVal);
    },
    tempToppings(newVal) {
      this.onChangeToppings(newVal);
    },
  },
  props: {
    onChangeSauce: Function,
    onChangeSize: Function,
    onChangeToppings: Function,
    sauce: String,
    size: Number,
    toppings: Array,
  },
  components: {
    FormGroup,
    Heading,
    Topping,
  },
};
</script>
