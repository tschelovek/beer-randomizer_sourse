<template>
  <header>
    <div class="container">
      <a href="#" class="logo__link">
        <img src="img/icons/glass.svg" class="logo__img" alt="icon" title="Бокал пива">
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "BaseHeader"
}
</script>

<style scoped>
.logo__link {
  max-width: 30px;
}
.logo__img {
  width: 40px;
}
</style>
