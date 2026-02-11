<template>
  <div class="container main-footer">
    <div class="main-footer__description">
      <DecorFooter />
      <p>Веб-разработка и усиление IT-команд</p>
    </div>

    <div class="main-footer__information">
      <a href=""> +7 999 123 45 67 </a>
      <a href="">Агентство</a>
      <a href="">Блог</a>

      <a href=""> hello@cyberia.ru </a>
      <a href="">Услуги</a>
      <a href="">Контакты</a>

      <p>ул.Ярных, д.35, оф.10</p>
      <a href="">Кейсы</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-footer {
  display: flex;
  margin-top: 131px;
  margin-bottom: 151px;
  color: $white;

  @include mobile {
    flex-direction: column;
    align-items: center;
  }
  &__description {
    display: flex;
    flex-direction: column;
    gap: 29px;
    margin-right: 157px;

    @include mobile {
      align-items: center;
      margin-right: 0;
      margin-bottom: 38px;
    }
    p {
      width: 70%;

      @include mobile {
        width: 85%;
        text-align: center;
      }
    }
  }

  &__information {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 23px 56px;

    @include mobile {
      justify-content: space-between;
      justify-items: center;
      gap: 23px 1px;
      font-size: 12px;
    }
  }
}
</style>
