<template>
  <dialog class="modal" id="modal">
    <div class="modal__wrapper">
      <img src="img/liver.jpg" alt="мемасик">
      <button type="button" class="btn modal__close" @click="closeModalHandler">
        <span>Закрыть</span>
      </button>
    </div>
  </dialog>
</template>

<script setup>

function closeModalHandler() {
  document.querySelector('#modal').close();
}

</script>

<style scoped>
.modal::backdrop {
  background: linear-gradient(135deg, gold, olivedrab);
  opacity: 0.8;
}
.modal__wrapper {
  display: flex;
  flex-flow: column;
}
.modal__wrapper {
  flex: 1;
}
</style>
