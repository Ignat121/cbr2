<template>
  <div class="container header">
    <DecorHeader />
    <nav>
      <ul class="header__list">
        <li>Агентство</li>
        <li>Услуги</li>
        <li>Кейсы</li>
        <li>Блог</li>
        <li>Контакты</li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  gap: 190px;
  margin-top: 68px;

  @include mobile {
    display: none;
  }

  &__list {
    display: flex;
    gap: 60px;
    list-style: none;
    color: $white;

    @include mobile {
    }
  }
}
</style>
