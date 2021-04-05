<template>
  <div>
    <h1>Localstorage Stories</h1>
    <p>
      This week we will look an app that is going to allow people to write, save, edit, and show a
      story they write. <br />
      Find an example below &#128071;
    </p>

    <hr />

    <h1>Story Editor</h1>
    <div class="error-message" v-if="errors">{{ errors }}</div>
    <label>Story Name: <input aria-label="name" v-model="storyName" /></label>

    <section>
      <button @click="execute('load')">Find / Edit</button>
      <button @click="execute('save')">Save</button>
    </section>

    <textarea v-model="storyEditor" placeholder="Write a totally awesome story here."></textarea>

    <h1>{{ storyName }}</h1>
    <section>{{ storyEditor }}</section>
  </div>
</template>

<script>
export default {
  layout: 'reading',
  data: () => ({
    storyName: null,
    storyEditor: null,
    errors: null,
  }),
  methods: {
    execute(action) {
      const { storyName, storyEditor } = this;

      if (action === 'save') {
        if (!storyName) {
          this.showError('Story name is required.');
          this.storyName = null;
          this.storyEditor = null;
          return;
        }

        if (!storyEditor) {
          this.showError('Story content is required.');
          this.clearFields();
          return;
        }

        localStorage.setItem(storyName, storyEditor);
      }

      if (action === 'load') {
        const storedStory = localStorage.getItem(storyName);

        if (!storyName) {
          this.showError('Story name is required.');
          this.clearFields();
          return;
        }

        if (!storedStory) {
          this.showError(`There is no story named "${storyName}"`);
          this.clearFields();
          return;
        }

        this.storyEditor = storedStory;
      }
    },

    clearFields() {
      this.storyName = null;
      this.storyEditor = null;
    },

    showError(errorMessage) {
      this.errors = `❗ ${errorMessage}`;
      setTimeout(() => {
        this.errors = null;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
h1,
p,
input,
button {
  margin-bottom: 15px;
}

input.error {
  border: 1px solid #d20000;
}

input.error::after {
  content: 'Story name is required.';
  display: block;
  height: auto;
  width: auto;
}

#story_title {
  text-transform: capitalize;
}

#story_display {
  font-size: 14px;
}

.error-message {
  background-color: #feffe0;
  color: #d20000;
  font-size: 14px;
  font-weight: 500;
}
</style>
