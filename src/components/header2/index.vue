<template>
  <div>
    <div class="fbox">
      <div class="sbox">
        <div>
          <i class="el-icon-arrow-left" @click="toLeft()"></i>
        </div>
        <span>{{ title }}</span>
        <div class="right">
          <i class="el-icon-phone-outline" @click="toPhone()"></i>
          <i class="el-icon-video-camera" @click="toVideo()"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerBox2",
  props: {
    title: {
      type: String,
      default: "聊天",
    },
    talkType: {
      type: String,
      default: "1",
    },
    talkId: {
      type: String,
      default: "",
    },
    userIds: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    toLeft() {
      this.$router.push({
        name: "message",
      });
    },
    toPhone() {
      if (this.talkType == 1) {
        this.$bus.$emit("callUser", {
          userId: this.talkId,
          type: 2,
        });
      } else if (this.talkType == 2) {
        this.$bus.$emit("callUsers", {
          userIds: this.userIds,
          type: 2,
        });
      }
    },
    toVideo() {
      if (this.talkType == 1) {
        this.$bus.$emit("callUser", {
          userId: this.talkId,
          type: 1,
        });
      } else if (this.talkType == 2) {
        this.$bus.$emit("callUsers", {
          userIds: this.userIds,
          type: 1,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.fbox {
  width: 100%;
  height: 40px;
  .sbox {
    background-color: #fafafa;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    width: 100%;
    height: 40px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    div {
      width: 60px;
      font-size: 18px;
    }
  }
  .right {
    display: flex;
    i {
      margin-left: 12px;
    }
  }
}
</style>
