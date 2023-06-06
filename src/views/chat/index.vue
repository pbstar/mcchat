<template>
  <div>
    <router-view @call="call"></router-view>
    <TUICallKit class="kitBox" />
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
  beforeDestroy() {},
  methods: {
    async init() {
      try {
        await TUICallKitServer.init({
          SDKAppID: this.SDKAppID,
          userID: this.userID,
          userSig: this.userSig,
          // tim: this.tim // 如果工程中已有 tim 实例，需在此处传入
        });
      } catch (error) {
        alert(`初始化失败，原因：${error}`);
      }
    },
    async call(userID) {
      if (this.userID == userID) {
        alert("不能打电话给自己");
        return;
      }
      userID = userID.toString();
      try {
        // 1v1 通话
        await TUICallKitServer.call({
          userID,
          type: TUICallType.VIDEO_CALL,
        });
        // 群组通话
        // TUICallKitServer.groupCall({ userIDList: ["xxx"], groupID: "xxx", type: TUICallType.VIDEO_CALL });
      } catch (error) {
        alert(`拨打失败，原因：${error},接受Id：${userID}`);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.kitBox {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
</style>
