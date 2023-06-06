<template>
  <div>
    <!-- <headerBox></headerBox>
    <div class="body"></div>
    <footerBox></footerBox> -->
    <p>打电话给：</p>
    <div class="midbox">
      <div
        class="mbox"
        v-for="(item, index) in userList"
        :key="index"
        @click="tocall(item)"
      >
        <img :src="item.photo" alt="" />
        <span>{{ item.name }}</span>
      </div>
      <div style="width: 90px"></div>
    </div>
    <el-button type="primary" @click="tuichu">退出</el-button>
  </div>
</template>

<script>
// import headerBox from "@/components/header";
// import footerBox from "@/components/footer";
export default {
  name: "home",
  components: {
    // headerBox,
    // footerBox,
  },
  data() {
    return {
      userList: [],
    };
  },
  created() {
    this.userList = this.$user.getUserList();
  },
  methods: {
    toList() {
      this.$router.push("list");
    },
    tocall(e) {
      this.$emit("call", e.userId);
    },
    tuichu() {
      this.$unit.clearLocalStorage();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  min-height: calc(100vh - 450px);
  background: #f8fafb;
}
.midbox {
  // margin-top: 30px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .mbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    background-color: #f1f1f1;
    margin-right: 12px;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 10px;
    font-size: 14px;
    img {
      width: 50px;
      border-radius: 5px;
      margin-bottom: 5px;
      margin-top: 3px;
    }
  }
}
</style>
