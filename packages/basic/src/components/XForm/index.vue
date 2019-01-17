<template>
<v-form
  class="pa-4"
  ref="form"
  v-if="authority !== 'invisible'"
>
  <template v-for="item in items" >
    <v-text-field
      :key="item.name"
      v-if="['text', 'password'].indexOf(item.type) !== -1"
      v-bind="item"
      v-model="models[item.name]"
      :rules="item.rules"
      :rows="item.rows || 1"
      auto-grow
      @input="(val) => { item.oninput && item.oninput(val) }"
      @change="(val) => { item.onchange && item.onchange(val) }"
    >
    </v-text-field>

    <v-checkbox
      :key="item.name"
      v-if="item.type === 'checkbox'"
      v-bind="item"
      v-model="models[item.name]"
      :rules="item.rules"
      @change="(val) => { item.onchange && item.onchange(val) }"
    >
    </v-checkbox>

    <v-radio-group
      hide-details
      :key="item.name"
      v-if="item.type === 'radio'"
      v-bind="item"
      v-model="models[item.name]"
      :rules="item.rules"
      @change="(val) => { item.onchange && item.onchange(val) }"
    >
      <v-radio
        v-for="option in item.options"
        :key="option.label"
        :label="option.label"
        :value="option.value"
      ></v-radio>
    </v-radio-group>

    <v-select
      :key="item.name"
      v-if="item.type === 'select'"
      v-bind="item"
      v-model="models[item.name]"
      :items="item.options"
      item-text="label"
      item-value="value"
      @input="(val) => { item.oninput && item.oninput(val) }"
      @change="(val) => { item.onchange && item.onchange(val) }"
    >
      <template slot="selection" slot-scope="data">
        <div v-if="item.multiple == true">
          <v-chip
            :selected="data.selected"
            :key="JSON.stringify(data.item)"
            close
            outline
            :color="item.chipColor"
            class="chip--select-multi"
            @input="data.parent.selectItem(data.item)"
          >
            {{ data.item.label }}
          </v-chip>
        </div>

        <div v-else >
          {{ data.item.label }}
        </div>
      </template>
    </v-select>

    <v-dialog
      :key="item.name"
      v-if="item.type === 'date'"
      v-model="models[item.name + '-menu']"
      :class="item.class"
      lazy
      full-width
      width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="models[item.name]"
        :label="item.label"
        :append-icon="item.appendIcon"
        :prepend-icon="item.prependIcon"
        readonly
        hide-details
        @change="(val) => { item.onchange && item.onchange(val) }"
      ></v-text-field>
      <v-date-picker
        v-model="models[item.name]"
        v-bind="item"
        @input="(val) => { item.oninput && item.oninput(val) }"
      >
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="models[item.name + '-menu'] = false">OK</v-btn>
      </v-date-picker>
    </v-dialog>

    <v-dialog
      :key="item.name"
      v-if="item.type === 'time'"
      v-model="models[item.name + '-menu']"
      :class="item.class"
      lazy
      full-width
      width="290px"
    >
      <v-text-field
        slot="activator"
        v-model="models[item.name]"
        :label="item.label"
        :append-icon="item.appendIcon"
        :prepend-icon="item.prependIcon"
        readonly
        hide-details
        @change="(val) => { item.onchange && item.onchange(val) }"
      ></v-text-field>
      <v-time-picker
        v-model="models[item.name]"
        v-bind="item"
        @input="(val) => { item.oninput && item.oninput(val) }"
      >
        <v-spacer></v-spacer>
        <v-btn flat color="primary" @click="models[item.name + '-menu'] = false">OK</v-btn>
      </v-time-picker>
    </v-dialog>

    <upload
      :key="item.name"
      v-if="item.type === 'file'"
      :class="item.class"
      v-bind="item"
      drag
      :action="item.server"
      :before-upload="(val) => { item.beforeUpload && item.beforeUpload(val) }"
      :on-success="(response, file) => { fileProcess(response, file, item.name, item.success); }"
      :on-change="(val) => { item.onchange && item.onchange(val) }"
    >
      {{ item.label || fileLabel }}
    </upload>
  </template>

  <div class="xform-tips-area">
    <v-alert :value="alerts.value" :type="alerts.type">
      {{ alerts.message }}
    </v-alert>
  </div>

  <div class="xform-operate-area">
    <x-button
      v-for="item in actions"
      v-bind="item"
      :key="item.name"
      :click="() => { item.click.call(null, models) }"
    >
    </x-button>
  </div>
</v-form>
</template>

<script>
import { Upload } from 'element-ui';

export default {
  name: 'x-form',
  components: {
    Upload
  },
  props: {
    fields: { type: Array, default: () => [] },
    actions: { type: Array, default: () => [] },
    authority: { type: String, default: 'available' }
  },
  watch: {
    fields: {
      deep: true,
      handler: function(val, oldVal) {
        this.makeModels(val);
      }
    }
  },
  data() {
    return {
      items: this.fields,
      models: {},
      fileLabel: 'Drag & Drop your files or Browse',
      alerts: {
        value: false,
        type: 'success',
        message: ''
      }
    };
  },
  created() {
    this.makeModels(this.items);
  },
  methods: {
    makeModels(fields) {
      let models = {};
      fields.forEach((item) => {
        models[item.name] = item.value || null;

        if (item.type === 'time' || item.type === 'date') {
          models[item.name + '-menu'] = false;
        }

        if (item.type === 'select') {
          models[item.name] = item.value || [];
        }
      });

      this.models = models;
    },

    fileProcess(response, file, name, callback) {
      if (response) {
        this.models[name] = response.serverId;

        if (typeof callback == 'function') {
          callback(response);
        }
      }
    },

    validate() {
      return this.$refs.form.validate();
    },

    reset() {
      return this.$refs.form.reset();
    },

    getModels() {
      return this.models;
    },

    triggerTips(value, type, message) {
      this.alerts = {
        value: value,
        type: type,
        message: message
      };
    }
  }
};
</script>

<style lang="stylus">
.el-upload {
  width: 100%;
}

.el-upload-dragger {
  max-height 80px
  width: 100%
  display flex
  justify-content center
  align-items center
}

.el-upload-list {
  margin-bottom: 20px;
}

.xform-operate-area {
  margin-top: 30px;

  .btn {
    margin-right: 10px;
  }
}

.xform-tips-area {
  transition: all .4s ease;
}

.select-item {
  margin: 5px 0;
}
</style>
