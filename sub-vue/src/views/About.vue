<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="setState">setGlobalState</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('global')
export default {
  methods: {
    ...mapActions([
      'setGlobalState'
    ]),
    setState () {
      this.setGlobalState({ user: { name: '张三' } })
    }
  }
}
</script>
