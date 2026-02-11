<template>
  <button class="burger">
    <span class="burger__line"></span>
    <span class="burger__line"></span>
    <span class="burger__line"></span>
  </button>
</template>

<style scoped lang="scss">
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
</style>
