<template>
  <v-form class="pa-4" ref="form" v-if="authority !== 'invisible'">
    <template v-for="item in items">
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
      ></v-text-field>
      <v-checkbox
        :key="item.name"
        v-if="item.type === 'checkbox'"
        v-bind="item"
        v-model="models[item.name]"
        :rules="item.rules"
        @change="(val) => { item.onchange && item.onchange(val) }"
      ></v-checkbox>
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
            >{{ data.item.label }}</v-chip>
          </div>
          <div v-else>{{ data.item.label }}</div>
        </template>
      </v-select>
      <v-dialog
        :key="item.name"
        v-if="item.type === 'date'"
        v-model="models[item.name + '-menu']"
        :class="item.class"
        lazy
        full-width
        width="350px"
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
          header-color="primary"
          v-model="models[item.name]"
          v-bind="item"
          @input="(val) => { item.oninput && item.oninput(val) }"
        >
          <v-spacer></v-spacer>
          <v-btn depressed @click="models[item.name + '-menu'] = false">OK</v-btn>
        </v-date-picker>
      </v-dialog>
      <v-dialog
        :key="item.name"
        v-if="item.type === 'time'"
        v-model="models[item.name + '-menu']"
        :class="item.class"
        lazy
        full-width
        width="350px"
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
          <v-btn depressed @click="models[item.name + '-menu'] = false">OK</v-btn>
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
        <i class="el-icon-upload"></i>
        {{ item.label || fileLabel }}
      </upload>
    </template>
    <div class="xform-tips-area">
      <v-alert :value="alerts.value" :type="alerts.type">{{ alerts.message }}</v-alert>
    </div>
    <div class="xform-operate-area">
      <x-button
        v-for="item in actions"
        v-bind="item"
        :key="item.name"
        :click="() => { item.click.call(null, models) }"
      ></x-button>
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

<style lang="stylus" scoped> 
@import "../../styles/_variables.styl";

.v-form {
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 18px rgba(145, 145, 145, 0.1) !important;
}

/* ---------- text field ---------- */
>>>.v-text-field {
  padding-top: 26px;

  .v-label--active {
    transform: translateY(-18px) scale(1);
  }

  .v-input__control {
    .v-input__slot {
      border: 1px solid $silver-two;
      border-radius: 3px;
      margin-bottom: 2px;

      &:before {
        display: none;
      }

      .v-text-field__slot {
        label {
          font-size: 14px;
          color: $slate-grey;
          font-weight: 600;
          top: -8px;
        }

        input {
          padding: 20px 15px;
          font-size: 16px;
          max-height: 48px; // inputbox height
          color: $secondary-01;
        }
      }

      // inputbox icon
      .v-input__append-inner {
        margin: 0;
        padding: 0;

        .v-input__icon {
          width: 48px;
          height: 48px;

          i {
            color: $silver;
            font-size: 20px;
          }
        }
      }
    }
  }
}

/* ---------- checkbox ---------- */
>>>.v-input--checkbox {
  margin-top: 0 !important;
  padding-top: 0 !important;

  &.v-input--is-label-active {
    .v-label {
      color: $secondary-01;
    }
  }

  .v-input__control {
    .v-input__slot {
      margin-bottom: 0;
    }
  }

  .v-input--selection-controls__input {
    .v-icon {
      color: $silver-two;
    }
  }

  .v-label {
    color: $slate-grey;
  }
}

/* ---------- radio button ---------- */
>>>.v-input--radio-group__input {
  .v-label {
    color: $slate-grey ;
  }

  .v-radio {
    .v-input--selection-controls__input {
      .v-icon {
        color: $silver-two;
      }
    }

    &.accent--text {
      .v-label {
        color: $secondary-01;
      }
    }
  }
}

/* ---------- select ---------- */
>>>.v-select {
  .v-input__control {
    .v-input__slot {
      .v-select__slot {
        label {
          font-size: 14px;
          color: $slate-grey;
          font-weight: 600;
          top: -8px;
        }

        .v-select__selections {
          padding-left: 12px;
          font-size: 16px;
          color: $secondary-01
        }
      }
    }
  }
}

/* ---------- date picker input ---------- */
>>>.v-dialog__container {
  .v-dialog__activator {
    .v-text-field {
      .v-input__control {
        .v-input__slot {
          .v-text-field__slot {
            .v-label {
              &.v-label--active {
                color: $slate-grey;
                font-weight: 600;
                top: -8px;
                left: 0 !important;
              }

              color: $slate-grey;
              font-size: 14px;
              font-weight: 400;
              top: 15px;
              left: 15px !important;
            }
          }
        }
      }
    }
  }
}


/* ---------- upload ---------- */
>>>.el-upload {
  width: 100%;
  margin: 28px 0;

  .el-upload-dragger {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $bluey-grey;
    border: 1px dashed $silver-two;
    border-radius: 2px;

    &:hover {
      border: 1px dashed $secondary-01;
    }
    .el-icon-upload{
      color: $silver-two;
      font-size:28px;
      margin:0 10px;
      line-height :auto;
      }
  }
}

/* ---------- button ---------- */
.xform-operate-area {
  display: flex;
  justify-content: center;
}

/* ---------- color setting ---------- */
>>>.error--text {
  color: $alert-02 !important;
  caret-color: $alert-02 !important;
}

>>>.primary--text {
  color: $secondary-01  !important;
  caret-color: $secondary-01  !important;
}

>>>.accent--text {
  color: $secondary-01  !important;
  caret-color: $secondary-01 !important;
}
</style>
