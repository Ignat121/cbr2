<template>
  <div class="base">
    <TheHeader />
    <main class="base__main">
      <slot></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
.base {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__main {
    flex-grow: 1;
  }
}
</style>
