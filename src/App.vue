<template>
  <div class="app">
    <Reaction
      v-for="type in reactionTypes"
      :num="reactions[type]"
      :type="type"
      :key="type"
    />
  </div>
</template>

<script>
import Reaction from './Reaction.vue';
import poll from './poll.js'
import reactionTypes from './reactionTypes';

export default {
  components:{
    Reaction,
  },
  data: () => ({
    reactions: reactionTypes.reduce((acc, key) => ({
      ...acc,
      [key]: 0
    }), {}),
  }),
  computed: {
    reactionTypes: () => reactionTypes,
  },
  methods: {
    poll() {
      poll().then(rs => {
        this.reactions = rs;
        setTimeout(this.poll, 2000);
      });
    },
  },
  mounted() {
    this.poll();
  },
};
</script>

<style>
html, body{
  font-family: Microsoft JhengHei;
  background-color: white;
  overflow: hidden;
}
</style>

<style scoped>
.btn{
  font-size: 24px;
  color: #666;
  cursor: pointer;
  float: right;
}
.btn:hover{
  color: #333;
  text-decoration: underline;
}
</style>