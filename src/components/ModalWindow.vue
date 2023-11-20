<template>
  <div class="modal-overlay" v-if="showModal"></div>
  <div class="modal" v-if="showModal">
    <div class="modal__wrapper">
      <button class="close-btn" @click="handleClick"><i class='fas fa-times'></i></button>
      <h2 class='modal-title'>{{ modalTitle }}</h2>

      <add-task-form v-if="modalType === 'Add-task'"></add-task-form>

      <div class='buttons__wrapper'>
        <div class='options__wrapper'>
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
  </div>
</template>

<script>
import AddTaskForm from "@/components/AddTaskForm.vue";

export default {
  components: {
    'add-task-form': AddTaskForm
  },
  props: {
    'showModal': Boolean,
  },
  data() {
    return {
      modalTitle: 'Add Task',
      modalType: 'Add-task'
    }
  },
  methods: {
    handleClick() {
      this.$emit('handle-click');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 1240px;
  padding: 0 20px;
  width: 100%;
  z-index: 4;
}

.modal__wrapper {
  position: relative;
  background-color: #363636;
  border-radius: 15px;
  width: 100%;
  padding: 60px 40px;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  align-items: center;

  height: 70vh;
  overflow-y: auto;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.74);
  backdrop-filter: blur(3px);

  z-index: 3;
}

.modal-title {
  font-size: 25px;
  color: #E8E8E8;
}

.close-btn {
  font-size: 36px;
  color: red;
  background: none;
  border: none;
  cursor: pointer;

  position: absolute;
  top: 1rem;
  right: 1rem;
}

.buttons__wrapper {
  display: flex;
  justify-content: space-between;
}

.set-deadline,
.set-tag,
.set-priority,
.send-task {
  font-size: 25px;

  background: none;
  border: none;
  cursor: pointer;
}

.set-deadline,
.set-tag,
.set-priority {
  color: #FFFFFF;
  transition: all 0.3s linear;
}

.set-deadline:hover,
.set-tag:hover,
.set-priority:hover {
  color: #8687E7;
}

.send-task {
  color: #8687E7;
  transition: all 0.3s linear;
}

.send-task:hover {
  color: #FFFFFF;
}

.options__wrapper {
  display: flex;
  gap: 50px;
}
</style>