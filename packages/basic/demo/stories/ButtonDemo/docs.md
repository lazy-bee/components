## Sample Code

### Example A

```html
<template>
  <x-button v-bind="buttonSchemeA"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeA: {
          content: 'download',
          prependIcon: 'cloud_download',
          borderRadius: 4
        }
      };
    }
  };
</script>
```

### Example B

```html
<template>
  <x-button v-bind="buttonSchemeB"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeB: {
          content: 'Read More',
          appendIcon: 'keyboard_arrow_right',
          borderRadius: 4,
          color: '#0149FF'
        }
      };
    }
  };
</script>
```

### Example C

```html
<template>
  <x-button v-bind="buttonSchemeC"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeC: {
          content: 'add',
          borderRadius: 4,
          square: true,
          size: 'small'
        }
      };
    }
  };
</script>
```

### Example D

```html
<template>
  <x-button v-bind="buttonSchemeD" class="buttonSchemeD"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeD: {
          content: 'submit',
          borderRadius: 4,
          color: '#0149FF',
          block: true
        }
      };
    }
  };
</script>

<style scoped>
  .buttonSchemeD {
    box-shadow: 0 10px 18px -5px rgba(1, 7, 255, 0.23);
  }
</style>
```

### Example E

```html
<template>
  <x-button v-bind="buttonSchemeE" class="buttonSchemeE"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeE: {
          content: 'delete_outline',
          color: '#525862',
          borderRadius: 4,
          outline: true,
          square: true,
          size: 'small'
        }
      };
    }
  };
</script>

<style scoped>
  .buttonSchemeE {
    border-color: $silver-two;
    &.v-btn {
      &:hover {
        color: #fff !important;
        background: $secondary-01 !important;
        border-color: $secondary-01;
      }
    }
  }
</style>
```

### Example F

```html
<template>
  <x-button v-bind="buttonSchemeF" class="buttonSchemeF"></x-button>
</template>

<script>
  export default {
    data() {
      return {
        buttonSchemeF: {
          content: 'edit',
          color: '#F7F9FA',
          borderRadius: 4,
          square: true,
          size: 'small'
        }
      };
    }
  };
</script>

<style scoped>
  .buttonSchemeF {
    color: $bluey-grey !important;
  }
</style>
```
