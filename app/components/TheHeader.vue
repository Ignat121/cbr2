<template>
  <div class="container header">
    <DecorHeader />
    <nav class="header__menu">
      <ul class="header__menu__list">
        <li><a href="">Агентство</a></li>
        <li><a href="">Услуги</a></li>
        <li><a href="">Кейсы</a></li>
        <li><a href="">Блог</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
    </nav>

    <button class="burger">
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  gap: 191px;
  margin-top: 68px;

  &__menu {
    @include mobile {
      position: fixed;
      top: 0;
      right: -100%;
      width: 80%;
      height: 100vh;
      background: #333;
      padding: 80px 20px 20px;
      transition: right 0.5s ease;
      z-index: 100;
    }

    &__list {
      display: flex;
      gap: 60px;
      list-style: none;
      color: $white;

      @include mobile {
        display: none;
      }
    }
  }

  .burger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    @include mobile {
      display: flex;
    }

    &__line {
      width: 100%;
      height: 3px;
      background: $white;
      transition: 0.3s;
    }
  }
}
</style>
