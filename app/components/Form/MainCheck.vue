<template>
  <div class="check">
    <input type="checkbox" />
    <label for=""> Согласие на обработку персональных данных </label>
  </div>
</template>

<style scoped lang="scss">
.check {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 12px;

  @include mobile {
    display: none;
  }

  label {
    color: $white;
  }

  input {
    appearance: none;
    position: relative;
    width: 25px;
    height: 25px;
    background-color: transparent;
    border-radius: 2px;
    border: 2px solid $blue;
    transition: 500ms;
  }

  input::after {
    content: "\2713";
    color: $white;
    position: absolute;
    top: -4px;
    left: 3px;
    width: 0px;
    height: 0px;
    font-size: 25px;
    transition: 500ms;
    overflow: hidden;
  }

  input:checked::after {
    width: 30px;
    height: 30px;
    transition: 500ms;
  }
}
</style>
