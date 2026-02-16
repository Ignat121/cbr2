<template>
  <div class="container main-form">
    <div class="main-form__heading">
      <FormDecorForm class="main-form__heading__decor" />
      <h2>Расскажите о вашем проекте:</h2>
    </div>

    <form action="">
      <div class="main-form__input">
        {{ a }}
        <FormInputField v-model="a" label="Ваше имя*" />
        <FormInputField label="Email*" />
        <FormInputField :maska="'+7 (###) ### ####'" label="Телефон*" />
      </div>

      <div class="main-form__message">
        <label for="">
          <span>Сообщение*</span>
          <textarea name="" id=""></textarea>
        </label>
      </div>

      <FormMainCheck />

      <div class="main-form__send">
        <input type="submit" value="Обсудить проект" />
      </div>

      <div class="main-form__note">
        <p>
          Нажимая “Отправить”, Вы даете согласие на обработку персональных
          данных
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const a = ref();
</script>
<style scoped lang="scss">
.main-form {
  display: flex;
  flex-direction: column;
  margin-top: 100px;

  &__heading {
    display: flex;
    justify-content: space-between;
    &__decor {
      display: none;

      @include mobile {
        display: flex;
      }
    }
    h2 {
      color: $white;
      font-size: 48px;
      width: 45%;

      @include mobile {
        font-size: 24px;
        width: 55%;
      }
    }
  }

  &__input {
    display: flex;
    justify-content: space-between;
    margin-top: 89px;
    gap: 30px;

    @include mobile {
      flex-direction: column;
    }
  }

  &__message {
    margin-top: 40px;

    label {
      display: flex;
      position: relative;
    }
    span {
      position: absolute;
      top: -10px;
      left: 34px;
      color: $blue;
      padding: 0 5px 0 5px;
      pointer-events: none;
      background-color: $gray-300;
    }

    textarea {
      background-color: transparent;
      border-radius: 5px;
      border: 2px solid $blue;
      width: 100%;
      height: 139px;
    }
  }

  &__send {
    margin-top: 65px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      height: 62px;
      width: 269px;
      background-color: $blue-100;
      border-radius: 85px;
      color: $white;
      transition: background-color 500ms;

      @include mobile {
        height: 48px;
        width: 100%;
      }
    }

    input:hover {
      background-color: $gray-200;
    }
  }

  &__note {
    display: none;

    @include mobile {
      display: flex;
      text-align: center;
      margin-top: 26px;
      color: $white;
    }
  }
}
</style>
