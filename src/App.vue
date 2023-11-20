<template>
    <modal-window :showModal="modalVisible"></modal-window>

    <header class="header">
      <div class="wrapper">
        <div class="header__wrapper">
          <header-component></header-component>
          <add-task @handle-click="openModal"></add-task>
        </div>
      </div>
    </header>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import AddTask from "@/components/AddTask.vue";

export default {
  components: {
    'header-component': HeaderComponent,
    'modal-window': ModalWindow,
    'add-task': AddTask,
  },
  data() {
    return {
      modalVisible: false,
    }
  },
  methods: {
    openModal() {
      this.modalVisible = true;
    },
  }
}
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #151515;
  position: relative;
}

.header {
  background-color: #363636;
  position: relative;
}

.wrapper {
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
