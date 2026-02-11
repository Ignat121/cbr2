<template>
  <div class="group-buttons">
    <button>Продвижение</button>
    <button>Разработка</button>
    <button>Мобильные приложения</button>
    <button>Юзабилити - аудит</button>
  </div>
</template>

<style scoped lang="scss">
.group-buttons {
  display: flex;
  justify-content: space-between;

  @include mobile {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 17px 7px;
  }

  button {
    color: $white;
    background-color: $gray-300;
    height: 49px;
    width: 200px;
    border-radius: 7px;
    box-shadow: 8px 15px 29px 0px #171b2c69;

    @include mobile {
      height: 33px;
      width: 158px;
      font-size: 12px;
    }
  }
}
</style>
