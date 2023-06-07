<template>
  <div>
    <div class="body">
      <headerBox></headerBox>
      <div class="midbox">
        <div
          class="mbox"
          v-for="(item, index) in userList"
          v-show="item.userId != userID"
          :key="index"
          @click="toTalk(item.userId)"
        >
          <div class="bleft">
            <img :src="item.photo" alt="" />
          </div>
          <div class="bright">
            <p>{{ item.name }}</p>
            <p class="p2">进来聊聊天</p>
          </div>
        </div>
        <div class="mbox mbox2" @click="toTalk2('1')">
          <div class="bleft">
            <div class="img" v-for="(item, index) in userList" :key="index">
              <img :src="item.photo" alt="" />
            </div>
          </div>
          <div class="bright">
            <p>ikun一家人</p>
            <p class="p2">进来聊聊天</p>
          </div>
        </div>
      </div>
      <footerBox page="1"></footerBox>
    </div>
  </div>
</template>

<script>
import headerBox from "@/components/header";
import footerBox from "@/components/footer";
export default {
  name: "message",
  components: {
    headerBox,
    footerBox,
  },
  data() {
    return {
      userID: "",
      userList: [],
    };
  },
  created() {
    this.userID = this.$unit.getLocalStorage("userId");
    this.userList = this.$user.getUserList();
  },
  methods: {
    toTalk(id) {
      this.$router.push({
        name: "talk",
        query: {
          talkId: id,
          talkType: "1",
        },
      });
    },
    toTalk2(id) {
      this.$router.push({
        name: "talk",
        query: {
          talkId: id,
          talkType: "2",
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  min-height: 100vh;
  background-color: #f3f3f3;
}
.midbox {
  // margin-top: 30px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  .mbox {
    display: flex;
    height: 60px;
    align-items: center;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    .bleft {
      height: 59px;
      img {
        width: 40px;
        border-radius: 5px;
        margin: 10px;
      }
    }
    .bright {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 14px;
      .p2 {
        font-size: 12px;
        color: #888;
      }
    }
  }
  .mbox2 {
    .bleft {
      height: 39px;
      width: 39px;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      margin: 10px;
      background-color: #eee;
      overflow: hidden;
      padding-left: 1px;
      padding-top: 1px;
      border-radius: 5px;
      overflow: hidden;
      .img {
        width: 11px;
        height: 11px;
        margin-right: 1px;
        margin-bottom: 1px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 11px;
          height: 12px;
          border-radius: 1px;
          margin: 0;
        }
      }
    }
  }
}
</style>
