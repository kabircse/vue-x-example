<template>
  <div class="container">
      <AddUser/>
    <UserList/>
  </div>
</template>

<script>
import AddUser from './components/AddUser.vue'
import UserList from './components/UserList.vue'

export default {
  name: 'App',
  components: {
    AddUser,
    UserList
  }
}
</script>

<style lang="scss">
  @import 'bootstrap';
</style>
