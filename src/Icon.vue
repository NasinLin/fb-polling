<template>
  <div class="icon" :style="style"/>
</template>

<script>
import reactionTypes from './reactionTypes'
export default {
  props: ['type'],
  computed: {
    style() {
      const idx = reactionTypes.indexOf(this.type);
      return {
        backgroundPosition: `${7.31 + 17.06 * idx}% 55.88%`,
      };
    },
  },
};
</script>

<style scoped>
.icon{
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
  background-image: url('./assets/reactions.jpg');
  background-repeat: no-repeat;
  background-size: auto 405%;
}
</style>