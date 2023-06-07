<template>
  <div>
    <div class="body">
      <headerBox2
        :title="talkName"
        :talkType="talkType"
        :talkId="talkId"
        :userIds="userIds"
      ></headerBox2>
    </div>
  </div>
</template>

<script>
import headerBox2 from "@/components/header2";
// import footerBox from "@/components/footer";
export default {
  name: "talk",
  components: {
    headerBox2,
    // footerBox,
  },
  data() {
    return {
      userID: "",
      talkId: "",
      talkType: "1",
      talkName: "聊天",
      userList: [],
      userIds: [],
    };
  },
  created() {
    this.userID = this.$unit.getLocalStorage("userId");

    this.talkType = this.$route.query.talkType;
    this.talkId = this.$route.query.talkId;
    if (this.talkType == 1) {
      this.talkInfo = this.$user.getUserInfo(this.talkId);
      this.talkName = this.talkInfo.name;
    } else if (this.talkType == 2) {
      this.userList = this.$user.getUserList();
      for (let i = 0; i < this.userList.length; i++) {
        if (this.userList[i].userId != this.userID) {
          this.userIds.push(this.userList[i].userId);
        }
      }
      this.talkName = "ikun一家人";
    }
  },
  methods: {
    toTalk(id) {
      this.$router.push({
        name: "talk",
        query: {
          talkUserId: id,
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
