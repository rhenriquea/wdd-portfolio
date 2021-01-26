<template>
  <div>
    <slot name="title"></slot>
    <slot name="subtitle"></slot>

    <div class="input">
      <small>Input:</small>
      <div>{{ editor.input }}</div>
    </div>

    <div :id="`editor${index + 1}`" class="editor">{{ functionDefs[editor.callback.name] }}</div>

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
import { functionDefs } from '../utils/exercisesFunctions';

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
  data: () => ({
    editorFn: functionDefs,
  }),
};
</script>
