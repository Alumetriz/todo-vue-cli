<template>
  <form action='#' class='add-task__form'>
    <div>
      <label for='task-title'></label>
      <input type='text' name='task-title' id='task-title' :placeholder='placeHolder'>
    </div>
    <div>
      <label for='task-descr'></label>
      <textarea name='task-descr' id='task-descr' placeholder='Description'></textarea>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      placeHolder: 'Input task title'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>