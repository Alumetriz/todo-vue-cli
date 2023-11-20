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
.add-task__form {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.add-task__form input,
.add-task__form textarea {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid #797979;
  border-radius: 5px;
  //border: none;
  color: white;
  font-size: 20px;
  width: 100%;
  min-height: 50px;

  box-shadow: none;
  resize: vertical;

  padding: 10px;
}

.add-task__form input:focus,
.add-task__form textarea:focus {
  border: 1px solid white;
  border-radius: 5px;
  outline: none;
}
</style>