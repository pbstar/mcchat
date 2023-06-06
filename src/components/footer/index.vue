<template>
  <div>
    <div class="fbox"></div>
  </div>
</template>

<script>
export default {
  name: "footerBox",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.fbox {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 20px;
  z-index: 1001;
}
</style>
