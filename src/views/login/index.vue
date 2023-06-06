<template>
  <div>
    <div class="fbox">
      <p class="p1">
        欢迎登陆
        <span style="color: #03d9af; font-family: serif; font-weight: bold"
          >mcchat</span
        >
      </p>
      <p class="p2">请选择用户登录</p>
      <div class="midbox">
        <div
          class="mbox"
          v-for="(item, index) in userList"
          :key="index"
          @click="toLogin(item)"
        >
          <img :src="item.photo" alt="" />
          <span>{{ item.name }}</span>
        </div>
        <div style="width: 90px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      userList: [
        {
          name: "用户1",
          userId: "uesr1",
          photo: "http://oss.mcweb.club/img/chat/1.jpg",
        },
        {
          name: "用户2",
          userId: "uesr2",
          photo: "http://oss.mcweb.club/img/chat/2.jpg",
        },
        {
          name: "用户3",
          userId: "uesr3",
          photo: "http://oss.mcweb.club/img/chat/3.jpg",
        },
        {
          name: "用户4",
          userId: "uesr4",
          photo: "http://oss.mcweb.club/img/chat/4.jpg",
        },
        {
          name: "用户5",
          userId: "uesr5",
          photo: "http://oss.mcweb.club/img/chat/5.jpg",
        },
        {
          name: "用户6",
          userId: "uesr6",
          photo: "http://oss.mcweb.club/img/chat/6.jpg",
        },
        {
          name: "用户7",
          userId: "uesr7",
          photo: "http://oss.mcweb.club/img/chat/7.jpg",
        },
        {
          name: "用户8",
          userId: "uesr8",
          photo: "http://oss.mcweb.club/img/chat/8.jpg",
        },
      ],
    };
  },
  methods: {
    toLogin(e) {
      this.$unit.setLocalStorage("userId", e.userId);
      this.$router.push({
        name: "message",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.fbox {
  display: flex;
  flex-direction: column;
  padding: 50px 35px;
  .p1 {
    line-height: 100px;
    font-size: 26px;
  }
  .p2 {
    color: #888;
  }

  .midbox {
    margin-top: 30px;
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
}
</style>
