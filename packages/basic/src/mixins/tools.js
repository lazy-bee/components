import Vue from 'vue';

export const oneOf = (options) => (value) => options.includes(value);

export default {
  methods: {
    getTextColor(bg = '#ffffff') {
      if (bg.indexOf('rgba') !== -1) {
        bg = this.rgbaToHex(bg);
      }

      var hexCode = bg.replace('#', '');

      var c_r = parseInt(hexCode.substr(0, 2), 16);
      var c_g = parseInt(hexCode.substr(2, 2), 16);
      var c_b = parseInt(hexCode.substr(4, 2), 16);

      var fore = Math.round((c_r * 299 + c_g * 587 + c_b * 114) / 1000);

      return fore > 125 ? '#000000' : '#ffffff';
    },

    rgbaToHex(rgba) {
      var parts = rgba.substring(rgba.indexOf('(')).split(','),
        r = parseInt(this.trim(parts[0].substring(1)), 10),
        g = parseInt(this.trim(parts[1]), 10),
        b = parseInt(this.trim(parts[2]), 10),
        a = parseFloat(
          this.trim(parts[3].substring(0, parts[3].length - 1))
        ).toFixed(2);

      return (
        '#' +
        r.toString(16) +
        g.toString(16) +
        b.toString(16) +
        (a * 255).toString(16).substring(0, 2)
      );
    },

    trim(string) {
      return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
    },

    hasClass(el, cls) {
      if (!el || !cls) return false;
      if (cls.indexOf(' ') !== -1)
        throw new Error('className should not contain space.');
      if (el.classList) {
        return el.classList.contains(cls);
      } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
      }
    },

    addClass(el, cls) {
      if (!el) return;
      var curClass = el.className;
      var classes = (cls || '').split(' ');

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
          el.classList.add(clsName);
        } else if (!this.hasClass(el, clsName)) {
          curClass += ' ' + clsName;
        }
      }
      if (!el.classList) {
        el.className = curClass;
      }
    },

    removeClass(el, cls) {
      if (!el || !cls) return;
      var classes = cls.split(' ');
      var curClass = ' ' + el.className + ' ';

      for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
          el.classList.remove(clsName);
        } else if (this.hasClass(el, clsName)) {
          curClass = curClass.replace(' ' + clsName + ' ', ' ');
        }
      }
      if (!el.classList) {
        el.className = this.trim(curClass);
      }
    }
  }
};
