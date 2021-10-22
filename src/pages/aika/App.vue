<template>
  <navElement/>
  <botPage/>
</template>

<script>
import navElement from '../../components/nav.vue'
import botPage from '../../components/botPage.vue'

export default {
  name: 'App',
  components: {
    navElement,
    botPage
  }
}
</script>