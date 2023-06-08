<template>
  <div>
    <div class="fbox">
      <div class="sbox">
        <div></div>
        <span>chat.mcweb.club</span>
        <div>
          <i class="el-icon-circle-plus-outline" @click="toRight()"></i>
          <audio
            ref="myaudio"
            src="@/assets/mp3/你干嘛.mp3"
            preload="preload"
            muted="muted"
            x5-video-player-fullscreen="true"
            x5-playsinline
            playsinline
            webkit-playsinline
          ></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerBox",
  data() {
    return {};
  },
  created() {},
  methods: {
    toRight() {
      this.$refs.myaudio.play();
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
      width: 18px;
      font-size: 18px;
    }
  }
}
</style>
