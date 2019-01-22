<template>
  <div class="styleguide">
    <header>UI Style Guide</header>
    <section>
      <h2>color Palettes</h2>
      <ul class="color-row">
        <li class="color-wrap">
          <div class="color-pale" style="background: #FF0039;"></div>
          <div class="color-name">primary-01</div>
          <div class="color-code">#FF0039</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #0149FF;"></div>
          <div class="color-name">secondary-01</div>
          <div class="color-code">#0149FF</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #16171B;"></div>
          <div class="color-name">dark</div>
          <div class="color-code">#16171B</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #525862;"></div>
          <div class="color-name">slate-grey</div>
          <div class="color-code">#525862</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #93A8B3;"></div>
          <div class="color-name">bluey-grey</div>
          <div class="color-code">#93A8B3</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #B7C2C9;"></div>
          <div class="color-name">silver</div>
          <div class="color-code">#B7C2C9</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #D5DBDE;"></div>
          <div class="color-name">silver-two</div>
          <div class="color-code">#D5DBDE</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #EFF1F3;"></div>
          <div class="color-name">pale-grey</div>
          <div class="color-code">#EFF1F3</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #F7F9FA;"></div>
          <div class="color-name">pale-grey-two</div>
          <div class="color-code">#F7F9FA</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #FB3939;"></div>
          <div class="color-name">error</div>
          <div class="color-code">#FB3939</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #FBA639;"></div>
          <div class="color-name">alert</div>
          <div class="color-code">#FBA639</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #2C6BFF;"></div>
          <div class="color-name">info</div>
          <div class="color-code">#2C6BFF</div>
        </li>
        <li class="color-wrap">
          <div class="color-pale" style="background: #22E397;"></div>
          <div class="color-name">success</div>
          <div class="color-code">#22E397</div>
        </li>
      </ul>
    </section>
    <section>
      <h2>TYPOGRAPHY</h2>
      <div class="typographyWrap">
        <div class="typography typography-1">
          <div class="font-demo">Aa</div>
          <div class="font-name">Nunito Sans</div>
        </div>
        <div class="typography typography-2">
          <div class="font-style" style="font-weight:300">Light</div>
          <div class="font-style" style="font-weight:400">Regular</div>
          <div class="font-style" style="font-weight:600">SemiBold</div>
          <div class="font-style" style="font-weight:700">Bold</div>
          <div class="font-style" style="font-weight:800">ExtraBold</div>
        </div>
        <div class="typography typography-3">
          <p>
            <strong>Nunito Sans:</strong> 300, 400, 600, 700, 800
          </p>
          <p>Nunito is a well balanced sans serif typeface superfamily, with 2 versions: The project began with Nunito, created by Vernon Adams as a rounded terminal sans serif for display typography. Jacques Le Bailly extended it to a full set of weights, and an accompanying regular non-rounded terminal version, Nunito Sans.</p>
        </div>
      </div>
    </section>
    <section>
      <h2>BUTTONS</h2>
      <h3>Button Style</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Primary</th>
            <th>Secondary</th>
            <th>Ghost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Normal</td>
            <td>
              <div class="btn primary-btn">download</div>
            </td>
            <td>
              <div class="btn secondary-btn">download</div>
            </td>
            <td>
              <div class="btn ghost-btn">download</div>
            </td>
          </tr>
          <tr>
            <td>Hover</td>
            <td>
              <div class="btn primary-btn primary-btn-hover">download</div>
            </td>
            <td>
              <div class="btn secondary-btn secondary-btn-hover">download</div>
            </td>
            <td>
              <div class="btn ghost-btn ghost-btn-hover">download</div>
            </td>
          </tr>
          <tr>
            <td>Disable</td>
            <td>
              <div class="btn primary-btn primary-btn-disable">download</div>
            </td>
            <td>
              <div class="btn secondary-btn secondary-btn-disable">download</div>
            </td>
            <td>
              <div class="btn ghost-btn ghost-btn-disable">download</div>
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <br>
      <br>
      <br>
      <h3>Button Size</h3>
      <table>
        <tr>
          <th></th>
          <th>Large</th>
          <th>Medium</th>
          <th>Small</th>
        </tr>
        <tr>
          <td>Size</td>
          <td>
            <div class="btn btn-size btn-large primary-btn">download</div>
          </td>
          <td>
            <div class="btn btn-size btn-medium primary-btn">download</div>
          </td>
          <td>
            <div class="btn btn-size btn-small primary-btn">download</div>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'styleguide',
  data() {
    return {};
  }
};
</script>

<style lang='stylus' scoped>
@import '../../../src/styles/_variables.styl';

.styleguide {
  text-align: left;
  font-family: 'Nunito Sans', sans-serif;

  header {
    text-align: center;
    border-bottom: 1px solid #eee;
    font-size: 22px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding: 50px 0;
    margin: 0 30px;
  }

  h2 {
    font-weight: 300;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 30px 0 50px 0;
  }

  section {
    padding: 0 30px;
    margin-bottom: 120px;

    ul {
      overflow: hidden;
      margin-bottom: 40px;
      padding-left: 0;

      li {
        float: left;
        list-style: none;
        width: 170px;
        padding: 10px;

        .color-pale {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto;
          margin-bottom: 18px;
        }

        .color-name {
          font-size: 18px;
          font-weight: 700;
          color: #16171B;
          text-align: center;
          margin-bottom: 10px;
        }

        .color-code {
          font-size: 16px;
          color: #93A8B3;
          text-align: center;
        }
      }
    }

    .typographyWrap {
      display: flex;

      .typography {
        margin: 0 40px;
      }

      .typography-1 {
        .font-demo {
          font-size: 200px;
          font-weight: 800;
          line-height: 1;
        }

        .font-name {
          font-size: 44px;
          line-height: 1;
          font-weight: 700;
        }
      }

      .typography-2 {
        padding-top: 10px;

        .font-style {
          font-size: 28px;
          margin-bottom: 10px;
        }
      }

      .typography-3 {
        font-size: 16px;
        line-height: 1.8;
      }
    }
  }

  table {
    width: 100%;

    tr {
      font-size: 18px;
      text-align: center;
      color: $bluey-grey;
      width: 100%;

      td, th {
        width: 30%;

        &:first-child {
          width: 10%;
        }
      }

      th {
        color: $slate-grey;
      }

      td {
        height: 80px;
      }
    }
  }

  .btn {
    width: 170px;
    height: 50px;
    line-height: 50px;
    border-radius: 4px;
    font-size: 14px;
    letter-spacing: 1.2px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    position: relative;

    &.btn-size {
      &:before {
        color: red;
        display: block;
        position: absolute;
        right: -35px;
        top: 0;
        font-size: 12px;
      }

      &:after {
        content: '';
        background: red;
        width: 1px;
        display: block;
        position: absolute;
        right: -10px;
        top: 0;
      }
    }

    &.btn-large {
      &:before {
        content: '50';
      }

      &:after {
        height: 50px;
      }
    }

    &.btn-medium {
      width: 140px;
      height: 44px;
      line-height: 44px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 1px;

      &:before {
        content: '44';
      }

      &:after {
        height: 44px;
      }
    }

    &.btn-small {
      width: 115px;
      height: 34px;
      line-height: 34px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;

      &:before {
        content: '34';
      }

      &:after {
        height: 34px;
      }
    }

    &.primary-btn {
      background: $primary-01;
      color: #fff;

      &.primary-btn-hover {
        background: #FF446E;
      }

      &.primary-btn-disable {
        background: #F6B0C0;
      }
    }

    &.secondary-btn {
      background: $secondary-01;
      color: #fff;

      &.secondary-btn-hover {
        background: #5786FF;
      }

      &.secondary-btn-disable {
        background: #A6BBF0;
      }
    }

    &.ghost-btn {
      background: #fff;
      color: $bluey-grey;
      border: 1px solid $silver-two;

      &.ghost-btn-hover {
        background: #F7F9FA;
      }

      &.ghost-btn-disable {
        background: #E2E6E8;
      }
    }
  }
}
</style>
