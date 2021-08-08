<template>
  <div class="container">
      <AddUser/>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'

export default {
  name: 'App',
  components: {
    AddUser
  }
}
</script>

<style lang="scss">
  @import 'bootstrap';
</style>
