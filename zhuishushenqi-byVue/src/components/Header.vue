<template>
    <div class="header">
        <p>{{title}}</p>
    </div>
</template>
<script>
export default {
  name: "header",
  data() {
    return {};
  },
  computed: {
    title() {
      return this.$store.state.header.title;
    },
  }
};
</script>
<style>

@import "../style/main.less";
.header {
  width: 100%;
  height: 50px;
  background-color: #b93321;
  top: 0;
}
.header > p {
  color: #ffffff;
  display: inline-block;
  height: 0.66667rem;
  line-height: 0.66667rem;
  margin-top: 0.2rem;
  text-align: center;
  font-size: 14px;
  background-image: linear-gradient(0deg, transparent 100%, transparent 0),
    linear-gradient(90deg, transparent 50%, #c84635 0),
    linear-gradient(180deg, transparent 100%, transparent 0),
    linear-gradient(270deg, transparent 50%, #9b2b1d 0);
  background-size: 0 0, 1px 100%, 0 0, 1px 100%;
  background-repeat: no-repeat;
  background-position: top, 100%, bottom, 0;
}
@media (max-width: 414px) {
  .header {
    position: fixed;
  }
}
@media (min-width: 414px) {
  .search-head {
    width: 100%;
    position: absolute;
  }
}
</style>