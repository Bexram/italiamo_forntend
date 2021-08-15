<template>
  <div class="main">
    <h1 v-for="(content, index) in CONTENT"
    :key="index" >
      {{content.tag_name==='H1'?content.content:''}}
    </h1>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  name: 'HelloWorld',
  methods: {
    ...mapActions([
      "GET_CONTENT",
    ])
  },


  mounted() {
    this.GET_CONTENT()
  },


  computed:{
    ...mapGetters([
      'CONTENT'
    ])

  },

}
</script>


<style scoped>

</style>
