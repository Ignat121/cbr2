<template>
  <div class="main-bread">
    <Bread />
  </div>

  <section class="container cases">
    <h1>Кейсы</h1>
    <GroupButtons class="cases__gr-bt" />
  </section>

  <FormWebForm />
</template>

<style scoped lang="scss">
.main-bread {
  margin-top: 65px;
}

.cases {
  display: flex;
  flex-direction: column;
  margin-top: 130px;

  h1 {
    color: $white;
    margin-bottom: 65px;
  }

  &__gr-bt {
    margin-bottom: 52px;
  }
}
</style>
