<template>
  <div class="add-task__wrapper">
    <button class="add-task__btn" @click="handleClick">+</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('handle-click');
    }
  }
}
</script>


<style lang="scss" scoped>
.add-task__btn {
  font-size: 45px;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  border-radius: 50%;
  border: none;
  width: 64px;
  height: 64px;
  background-color: #8687E7;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  cursor: pointer;
}
</style>