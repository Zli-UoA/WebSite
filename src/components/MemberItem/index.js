import LoadedMemberItem from "./LoadedMemberItem.vue";
import LoadingMemberItem from "./LoadingMemberItem.vue";

export default {
  components: { LoadedMemberItem, LoadingMemberItem },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    member: {
      type: Object,
      default: null
    }
  },
  render(createElement) {
    return this.isLoading
      ? createElement(LoadingMemberItem)
      : createElement(LoadedMemberItem, {
          props: { member: this.member },
          on: { click: () => this.$emit("click") }
        });
  }
};
