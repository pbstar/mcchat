<template>
  <div>
    <div class="body">
      <div class="top">
        <img :src="userInfo.photo" alt="" />
        <div class="tright">
          <h4>{{ userInfo.name }}</h4>
          <span>ID：{{ userID }}</span>
        </div>
      </div>
      <div class="strip"></div>
      <div class="box"></div>
      <div class="strip"></div>
      <div class="box"></div>
      <div class="strip2"></div>
      <div class="box"></div>
      <div class="strip2"></div>
      <div class="box"></div>
      <div class="strip"></div>
      <div class="strip2"></div>
      <div class="box" @click="toQuit">
        <span>退出登录</span>
      </div>
      <div class="strip"></div>
    </div>
    <footerBox page="2"></footerBox>
  </div>
</template>

<script>
import footerBox from "@/components/footer";
export default {
  name: "mine",
  components: {
    footerBox,
  },
  data() {
    return {
      userID: "",
      userInfo: "",
    };
  },
  created() {
    this.userID = this.$unit.getLocalStorage("userId");
    this.userInfo = this.$user.getUserInfo(this.userID);
  },
  methods: {
    toQuit() {
      this.$unit.clearLocalStorage();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  min-height: 100vh;
  background-color: #f3f3f3;
  .top {
    display: flex;
    padding: 50px 25px 20px;
    background-color: #fff;
    img {
      width: 60px;
      border-radius: 10px;
      margin-right: 10px;
    }
    .tright {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  .strip {
    width: 100%;
    height: 10px;
  }
  .strip2 {
    width: 100%;
    height: 1px;
  }
  .box {
    width: 100%;
    height: 45px;
    background-color: #fff;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
}
</style>
