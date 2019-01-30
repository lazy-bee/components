<template>
  <div class="demoWrap">
    <div class="boxWrap">
      <h3>A</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeA"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-a' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>B</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeB"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-b' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>C</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeC"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-c' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>D</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeD" class="buttonSchemeD"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-d' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>E</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeE" class="buttonSchemeE"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-e' }">View Sample Code</a>
        </div>
      </div>
    </div>
    <div class="boxWrap">
      <h3>F</h3>
      <div class="box">
        <div class="stage">
          <div class="item">
            <x-button v-bind="buttonSchemeF" class="buttonSchemeF"></x-button>
          </div>
          <a href="#" v-scroll-to="{ element: '#example-f' }">View Sample Code</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonDemo',
  data() {
    return {
      buttonSchemeA: {
        content: 'download',
        prependIcon: 'cloud_download',
        borderRadius: 4
      },
      buttonSchemeB: {
        content: 'Read More',
        appendIcon: 'keyboard_arrow_right',
        borderRadius: 4,
        color: '#0149FF'
      },
      buttonSchemeC: {
        content: 'add',
        borderRadius: 4,
        square: true,
        size: 'small'
      },
      buttonSchemeD: {
        content: 'submit',
        borderRadius: 4,
        color: '#0149FF',
        block: true
      },
      buttonSchemeE: {
        content: 'delete_outline',
        color: '#525862',
        borderRadius: 4,
        outline: true,
        square: true,
        size: 'small'
      },
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

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';

.demoWrap {
  font-family: 'Nunito Sans', sans-serif;
  text-align: left;
  background: #F9FAFB;
  padding: 14px;
  width:100%;
  display: flex;
  flex-wrap: wrap;

  .boxWrap {
    background: #fff;
    width:30%;
    min-width: 340px;
    padding: 10px;
    margin: 10px;
    border-radius: 6px;
    box-shadow: 0 10px 70px rgba(0, 0, 0, 0.05);

    h3 {
      background: $pale-grey-two;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 16px;
      color: $bluey-grey;
      text-align: center;
      line-height: 40px;
    }

    .box {
      min-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      .stage {
        text-align: center;

        .item {
          margin-bottom: 20px;
        }

        a {
          color: $bluey-grey;
          font-size: 14px;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.buttonSchemeD {
  box-shadow: 0 10px 18px -5px rgba(1, 7, 255, 0.23);
}

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

.buttonSchemeF {
  color: $bluey-grey!important;
}
</style>
