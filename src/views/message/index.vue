<template>
  <div>
    <headerBox></headerBox>
    <div class="body"></div>
    <footerBox></footerBox>
  </div>
</template>

<script>
import headerBox from "@/components/header";
import footerBox from "@/components/footer";
export default {
  name: "home",
  components: {
    headerBox,
    footerBox,
  },
  data() {
    return {};
  },
  methods: {
    toList() {
      this.$router.push("list");
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  min-height: calc(100vh - 450px);
  background: #f8fafb;
}
</style>
