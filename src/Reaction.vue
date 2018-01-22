<template>
  <div class="reaction">
    <span class="num">{{num}}</span>
    <Icon :type="type"/>
    <input type="text" v-model="text"/>
  </div>
</template>

<script>
import Icon from './Icon.vue'
export default {
  props: ['type', 'num'],
  components: {
    Icon,
  },
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style scoped>
.reaction{
  margin: 55px 0;
}
.num, .icon, input{
  vertical-align: middle;
}
.num{
  display: inline-block;
  font-size: 30px;
  width: 50px;
  text-align: right;
}
input{
  background: none;
  border: none;
  outline: none;
  font-size: 30px;
  width: 150px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  color: #333;
  padding: 4px 10px;
  font-family: Microsoft JhengHei;
}
</style>