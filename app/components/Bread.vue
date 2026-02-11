<template>
  <nav aria-label="хлебные крошки">
    <div class="container breadcrumbs">
      <a class="breadcrumbs__Main" href="">Главная</a>
      <span>/</span>
      <a lass="breadcrumbs__cases" href="">Кейсы</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.breadcrumbs {
  display: flex;
  gap: 5px;

  @include mobile {
    font-size: 12px;
  }

  a {
    color: $gray-200;
    text-decoration: none;
    transition: color 0.5s;
  }
  a:hover {
    color: $gray-100;
  }

  span {
    color: $gray-200;
  }
}
</style>
