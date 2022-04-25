<template>
  <div class="user">
    <div class="user__img-wrapper">
      <img :src="avatar" :alt="store.fullUserName" title="Фотография пользователя" class="user__img">
    </div>
    <div class="user__description">
      <div class="user__description__row">
        <span class="user__description__title">Имя: </span>
        <span class="user__description__text">
          {{ store.fullUserName }}
        </span>
      </div>
      <div class="user__description__row">
        <span class="user__description__title">Возраст: </span>
        <span class="user__description__text">{{store.age}}</span>
      </div>
      <div class="user__description__row">
        <span class="user__description__title">Должность: </span>
        <span class="user__description__text">
          {{ employment }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import {storeToRefs} from 'pinia';
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const {employment, avatar} = storeToRefs(store);

onMounted(() => {
  store.fetchUser();
})

</script>

<style scoped>
.user {
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
}
.user__img {
  max-width: 100%;
}
.user__description {
  text-align: left;
}
.user__description__row {
  margin-top: 0.5rem;
}
.user__description__title {
  font-size: 1.125rem;
  font-weight: 700;
}
.user__description__text {
  font-size: 1.25rem;
}
@media only screen and (max-width: 640px) {
  .user {
    flex-flow: column;
    align-items: unset;
  }
}
</style>
