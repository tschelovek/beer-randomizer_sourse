<template>
  <div class="suggest">
    <div class="btn-wrapper">
      <button type="button" class="suggest__btn btn" @click="oneMoreBeer">
        <span>Что бы выбрать?</span>
      </button>
    </div>
    <div v-if="beerCounter > 0" class="suggest__container">
      <div class="suggest__main">
        <div class="suggest__wrapper_row">
          <span class="suggest__description__title_big">Бренд: </span>
          <span class="suggest__description__text_big">{{ brand }}</span>
        </div>
        <div class="suggest__wrapper_row">
          <span class="suggest__description__title_big">Название: </span>
          <span class="suggest__description__text_big">{{ name }}</span>
        </div>
        <div class="suggest__wrapper_row">
          <span class="suggest__description__title_big">Сорт: </span>
          <span class="suggest__description__text_big">{{ style }}</span>
        </div>
      </div>
      <div class="suggest__characteristics">
        <div class="suggest__title_big">Характеристики:</div>
        <div class="suggest__wrapper_left">
          <div class="suggest__wrapper_row">
            <span class="suggest__description__title">Кислотность: </span>
            <span class="suggest__description__text">{{ ibu }}</span>
          </div>
          <div class="suggest__wrapper_row">
            <span class="suggest__description__title">Алкоголь: </span>
            <span class="suggest__description__text">{{ alcohol }}</span>
          </div>
          <div class="suggest__wrapper_row">
            <span class="suggest__description__title">Экстрактивность: </span>
            <span class="suggest__description__text">{{ blg }}</span>
          </div>
        </div>
        <div class="suggest__characteristics">
          <div class="suggest__title_big">Ингредиенты:</div>
          <div class="suggest__wrapper_left">
            <div class="suggest__wrapper_row">
              <span class="suggest__description__title">Хмель: </span>
              <span class="suggest__description__text">{{ hop }}</span>
            </div>
            <div class="suggest__wrapper_row">
              <span class="suggest__description__title">Дрожжи: </span>
              <span class="suggest__description__text">{{ yeast }}</span>
            </div>
            <div class="suggest__wrapper_row">
              <span class="suggest__description__title">Солод: </span>
              <span class="suggest__description__text">{{ malts }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import {storeToRefs, mapActions} from "pinia";
import {useUserStore} from "@/stores/user";

const store = useUserStore();
const {
  beerCounter,
  brand,
  name,
  style,
  hop,
  yeast,
  malts,
  ibu,
  alcohol,
  blg
} = storeToRefs(store);

const {oneMoreBeer} = mapActions(useUserStore, ["oneMoreBeer"])

</script>

<style scoped>
.suggest {
  margin-top: 1rem;
}
.suggest__container {
  margin: 1rem auto;
  max-width: 680px;
}
.suggest__wrapper_row {
  margin-top: 0.5em;
}
.suggest__description__title {
  font-size: 0.875rem;
  font-weight: 700;
  color: #666666;
}
.suggest__description__title_big {
  margin-top: 0.5em;
  font-weight: 700;
  color: #666666;
}
.suggest__description__text_big {
  font-size: 1.25rem;
}
.suggest__title_big {
  margin-top: 1em;
  font-size: 1.125rem;
  font-weight: 700;
}
</style>
