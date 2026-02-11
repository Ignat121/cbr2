<template>
  <button @click="isOpen = !isOpen" class="burger">
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div v-show="isOpen" class="container burger__menu">
    <nav>
      <a href="">Агенство</a>
      <a href="">Услуги</a>
      <a href="">Кейсы</a>
      <a href="">Блог</a>
      <a href="">Контакты</a>
    </nav>

    <span></span>

    <div class="burger__contacts">
      <h2>Контакты:</h2>
      <div>
        <p>+7 999 123 45 67</p>
        <p>hello@cyberia.studio</p>
        <p>ул.Ярных, д.35, оф.10</p>
      </div>
    </div>
    <span></span>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false);
</script>

<style scoped lang="scss">
.burger {
  display: none;
  flex-direction: column;
  z-index: 2;
  align-items: center;
  justify-content: space-evenly;
  height: 32px;
  width: 32px;

  @include mobile {
    display: flex;
  }

  span {
    width: 80%;
    height: 2px;
    background-color: $white;
  }

  &__menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #20212c;
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    nav {
      display: flex;
      flex-direction: column;
      margin-top: 82px;
      gap: 30px;
    }
    a {
      color: $white;
    }

    span {
      height: 3px;
      width: 100%;
      background-color: #2b2d3a;
      margin-top: 47px;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    color: $gray-200;
    margin-top: 38px;
    gap: 42px;

    div {
      display: flex;
      flex-direction: column;
      gap: 19px;
    }
  }
}
</style>
