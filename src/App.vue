<template>
  <BaseHeader/>
  <main>
    <div class="container">
      <h1>BeerRandomizer – Ваш личный пивной сомелье!</h1>
      <BeerUser/>
      <BeerSuggest/>
    </div>
  </main>
  <BaseModal/>
</template>

<script>
import BeerUser from "./components/BeerUser.vue";
import BeerSuggest from "./components/BeerSuggest.vue";
import BaseHeader from "@/components/BaseHeader";
import BaseModal from "@/components/BaseModal";

export default {
  name: 'App',
  components: {
    BaseHeader,
    BeerSuggest,
    BeerUser,
    BaseModal,
  }
}
</script>

<style>
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/Montserrat-Regular.ttf') format("truetype");
}
@font-face {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  src: url('./fonts/Montserrat-Bold.ttf') format("truetype");
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin: 0 auto;
  max-width: 890px;
  padding: 0 15px;
}
.btn {
  margin-top: 1rem;
  padding: 1em;
  position: relative;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  border: none;
  background-color: lightblue;
  cursor: pointer;
  overflow: hidden;
  z-index: 5;
}
.btn:focus {
  outline: none;
}
.btn span {
  position: relative;
  z-index: 10;
  transition: color 0.5s;
}
.btn::after {
  content: '';
  position: absolute;
  top: 4px;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(.09,.87,.88,.72);
  background: linear-gradient(white 8px, darkgoldenrod 8px);
}
.btn:hover::after {
  transform: translateY(0)
}
.btn:hover span {
  color: white
}
@media only screen and (max-width: 480px) {
  h1 {
    font-size: 1.5rem
  }
}
</style>
