<template>
<div class="x-iframe">
  <iframe :src="src" ></iframe>
</div>
</template>

<script>
import { Base64 } from 'js-base64';

export default {
  name: 'x-iframe',
  props: {
    url: { type: String, default: '' },
    encode: { type: Boolean, default: false }
  },
  data() {
    return {
      src: this.encode ? Base64.decode(this.url) : this.url
    };
  }
};
</script>

<style lang="stylus">
.x-iframe {
  width 100%
  height 100%
  display flex
  justify-content center

  iframe {
    border 0
  }
}
</style>
