## Sample Code

### Example A

```html
<template>
  <x-button v-bind="buttonSchemeA"></x-button>
  <x-dialog v-bind="dialogSchemeA" v-model="dialogSchemeA.value">
    <div class="slot-header" slot="slot-header"></div>
    <customForm />
  </x-dialog>
</template>

<script>
  import customForm from './Form.vue';

  export default {
    components: { customForm },
    data() {
      return {
        buttonSchemeA: {
          content: 'Contact Us',
          borderRadius: 4,
          click: () => {
            this.dialogSchemeA.value = true;
          }
        },
        dialogSchemeA: {
          value: false,
          closeSign: true,
          cancelText: 'CANCEL',
          confirmText: 'SUBMIT'
        }
      };
    }
  };
</script>

<style lang="stylus" scoped>
  >>>.v-dialog {
    border-radius: 10px;

    .slot-header {
      height: 50px;
      background: $primary-01;
    }

    .close-sign {
      .v-icon {
        color: white !important;
      }
    }
  }
</style>
```

### Example B

```html
<template>
  <x-button v-bind="buttonSchemeB"></x-button>
  <x-dialog v-bind="dialogSchemeB" v-model="dialogSchemeB.value">
    <div class="slot-header" slot="slot-header"></div>
    <customTerms />
    <div slot="slot-btn"></div>
  </x-dialog>
</template>

<script>
  import customTerms from './Terms.vue';

  export default {
    components: { customTerms },
    data() {
      return {
        buttonSchemeB: {
          content: 'Terms of Service',
          borderRadius: 4,
          click: () => {
            this.dialogSchemeB.value = true;
          }
        },
        dialogSchemeB: {
          value: false,
          closeSign: true,
          cancelText: 'Cancel',
          confirmText: 'Submit'
        }
      };
    }
  };
</script>

<style lang="stylus" scoped>
  >>>.v-dialog {
    border-radius: 10px;

    .slot-header {
      height: 50px;
      background: $primary-01;
    }

    .close-sign {
      .v-icon {
        color: white !important;
      }
    }
  }
</style>
```
