<template>
  <label class="main-field" for="">
    <span :class="{ filled: value.length > 0 }">{{ label }}</span>
    <input v-model="value" v-maska="maska" type="text" />
  </label>
</template>

<script setup lang="ts">
import { vMaska } from "maska/vue";
const { maska = undefined, label } = defineProps<{
  maska?: string;
  label: string;
}>();

const value = defineModel<string>({ default: "" });
</script>

<style scoped lang="scss">
.main-field {
  position: relative;

  @include mobile {
    &:has(input:focus) {
      span {
        top: -10px;
      }
    }
  }

  input {
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid $blue;
    padding: 15px;
    color: $white;

    @include mobile {
      width: 100%;
    }
  }

  span {
    position: absolute;
    top: -10px;
    pointer-events: none;
    background-color: $gray-300;
    padding-left: 5px;
    padding-right: 5px;
    color: $blue;

    @include mobile {
      top: 15px;
      left: 5px;
      transition: all ease 0.3s;

      &.filled {
        top: -10px;
      }
    }
  }
}
</style>
