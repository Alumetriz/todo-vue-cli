<template>
  <div class="add-task__modal" v-if="showModal">
    <div class="modal__wrapper">
      <button class="close-btn"><i class='fas fa-times'></i></button>
    </div>

    <h2 class='modal-title'>{{ modalTitle }}</h2>

    <div class='buttons__wrapper'>
      <div class='first-column'>
        <button class='set-deadline'>
          <i class='far fa-clock'></i>
        </button>

        <button class='set-tag'>
          <i class='fas fa-tag'></i>
        </button>

        <button class='set-priority'>
          <i class='far fa-flag'></i>
        </button>
      </div>

      <div class='second-column'>
        <button class='send-task'>
          <i class='far fa-paper-plane'></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'showModal': Boolean,
  },
  data() {
    return {
      modalTitle: 'Add Task',
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>