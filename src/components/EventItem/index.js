import LoadedEventItem from "./LoadedEventItem.vue";
import LoadingEventItem from "./LoadingEventItem.vue";

export default {
  components: { LoadedEventItem, LoadingEventItem },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    event: {
      type: Object,
      default: null
    }
  },
  render(createElement) {
    return this.isLoading
      ? createElement(LoadingEventItem)
      : createElement(LoadedEventItem, {
          props: { event: this.event },
          on: { click: () => this.$emit("click") }
        });
  }
};
