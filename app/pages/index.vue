<script setup lang="ts">
import Card from "~/components/projects/Card.vue";
</script>

<template>
  <div class="main-bread">
    <Bread />
  </div>

  <section class="container cases">
    <h1>Кейсы</h1>

    <div class="cases__group">
      <GroupButtons />
    </div>

    <div>
      <Card />
    </div>
  </section>

  <div>
    <FormWebForm />
  </div>
</template>

<script setup lang="ts"></script>
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

  &__group {
    margin-bottom: 52px;
  }
}
</style>
