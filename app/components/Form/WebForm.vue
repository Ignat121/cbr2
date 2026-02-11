<template>
  <div class="container main-form">
    <h2></h2>

    <form action="">
      <div class="main-form__input">
        <FormInputField />
        <FormInputField />
        <FormInputField />
      </div>

      <div class="main-form__message">
        <label for="">
          <textarea name="" id=""></textarea>
        </label>
      </div>

      <div>
        <label for="">
          <input type="checkbox" />
        </label>
      </div>

      <div>
        <input type="submit" value="Обсудить проект" />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.main-form {
  display: flex;
  flex-direction: column;

  &__input {
    display: flex;
    justify-content: space-between;
  }
}
</style>
