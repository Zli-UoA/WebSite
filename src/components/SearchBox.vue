<template>
    <div class="wrapper">
        <font-awesome-icon class="icon" :icon="['fas', 'search']" />
        <input
            class="input"
            type="text"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
            :value="value" >
    </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      input: '',
    };
  },
};
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 490px;
        height: 64px;
        padding: 16px 32px;
        box-sizing: border-box;
        border-radius: 100px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .icon {
        font-size: 24px;
        padding: 4px;
        margin-right: 16px;
        color: var(--color-black-50);
    }

    .input {
        width: 100%;
        height: 32px;
        border: none;
        font-size: 24px;
        outline: none;
        padding: 0;
    }

    .input::placeholder {
        color: var(--color-black-50);
    }
</style>
