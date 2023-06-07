<template>
  <div>
    <div class="page" v-loading="isLoading">
      <router-view></router-view>
      <TUICallKit class="kitBox" />
    </div>
  </div>
</template>

<script>
import {
  TUICallKit,
  TUICallKitServer,
  TUICallType,
} from "@tencentcloud/call-uikit-vue2";
import { genTestUserSig } from "@/assets/js/GenerateTestUserSig";
export default {
  name: "chat",
  components: {
    TUICallKit,
  },

  watch: {},
  data() {
    return {
      SDKAppID: 1400815285,
      userID: "",
      userSig: "",
      isLoading: true,
    };
  },
  created() {
    this.userID = this.$unit.getLocalStorage("userId");
    let SDKAppID = this.SDKAppID;
    let secretKey =
      "09340b5022c2d8236dd0ccf6b2d94c521ce5f3c4ea819e5804ee09c44714d250";
    let userID = this.userID;
    let obj = genTestUserSig({
      SDKAppID,
      secretKey,
      userID,
    });
    this.userSig = obj.userSig;
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.$bus.$off("callUserVideo");
    this.$bus.$off("callUsersVideo");
  },
  methods: {
    async init() {
      if (!this.userID) {
        return;
      }
      try {
        await TUICallKitServer.init({
          SDKAppID: this.SDKAppID,
          userID: this.userID,
          userSig: this.userSig,
          // tim: this.tim // 如果工程中已有 tim 实例，需在此处传入
        });
        this.isLoading = false;
        this.$bus.$on("callUserVideo", (e) => {
          try {
            // 1v1 通话
            TUICallKitServer.call({
              userID: e.userId,
              type: TUICallType.VIDEO_CALL,
            });
          } catch (error) {
            alert(`拨打失败，原因：${error},接受Id：${userID}`);
          }
        });
        this.$bus.$on("callUsersVideo", (e) => {
          try {
            // 群组通话
            TUICallKitServer.groupCall({
              userIDList: e.userIds,
              groupID: "g1",
              type: TUICallType.VIDEO_CALL,
            });
          } catch (error) {
            alert(`拨打失败，原因：${error},接受Id：${userID}`);
          }
        });
      } catch (error) {
        alert(`初始化失败，原因：${error}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.kitBox {
  position: fixed !important;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.page {
  min-height: 100vh;
}
</style>
