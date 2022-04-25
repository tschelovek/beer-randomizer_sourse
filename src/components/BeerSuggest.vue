<template>
  <div class="suggest">
    <div class="btn-wrapper">
      <button class="btn__suggest">Что бы выбрать?</button>
    </div>
    <div class="suggest__main">
<!--      {{beer}}-->
    </div>
    <div class="suggest__characteristics">

    </div>
    <div class="suggest__ingredients">

    </div>
  </div>
</template>

<script setup>
// import {storeToRefs} from "pinia";
import {useBeerStore} from "@/stores/beer";

const store = useBeerStore();

// const {beer} = storeToRefs(store);

// const {fetchBeer} = mapActions(useBeerStore, ["fetchBeer"])

const {fetchBeer} = store;
// export default {
//   name: "BeerSuggest"
// }
</script>
