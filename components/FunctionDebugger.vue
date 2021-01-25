<template>
  <div>
    <slot name="title"></slot>
    <slot name="subtitle"></slot>

    <div class="input">
      <small>Input:</small>
      <div>{{ editor.input }}</div>
    </div>

    <div :id="`editor${index + 1}`" class="editor">{{ editor.callback.toString() }}</div>

    <div class="result">
      <small>Result:</small>

      <div v-if="editor.input.length === 2">
        {{ editor.callback(editor.input[0], editor.input[1]) }}
      </div>

      <div v-else>
        {{ editor.callback(editor.input) }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editor: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
