<template>
  <label class="main-field" for="">
    <span>test1</span>
    <input type="text" />
  </label>
</template>

<style scoped lang="scss">
.main-field {
  position: relative;

  input {
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid $blue;
    padding: 15px;
  }

  span {
    position: absolute;
    left: 34px;
    top: -10px;
    pointer-events: none;
    background-color: $gray-300;
    padding-left: 5px;
    padding-right: 5px;
    color: $blue;
  }
}
</style>
