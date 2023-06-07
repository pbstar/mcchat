<template>
  <div>
    <div class="fbox iphone_bottom">
      <div
        :class="page == item.value ? 'active' : ''"
        v-for="(item, index) in list"
        :key="index"
        @click="toPage(item)"
      >
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerBox",
  props: {
    page: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      list: [
        {
          value: 1,
          text: "消息",
          route: "message",
        },
        {
          value: 2,
          text: "我的",
          route: "mine",
        },
      ],
    };
  },
  methods: {
    toPage(e) {
      if (e.value == this.page) {
        return;
      }
      this.$router.push({
        name: e.route,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.fbox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  border-top: 1px solid #eee;
  div {
    width: 50%;
    height: 100%;
    text-align: center;
    line-height: 46px;
    cursor: pointer;
  }
  .active {
    font-weight: bold;
    color: #222;
  }
}
</style>
