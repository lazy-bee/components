import './loaders.css';
import { oneOf } from '../../mixins/tools.js';

import BallBeatLoader from './loaders/ball-beat.vue';
import BallClipRotateLoader from './loaders/ball-clip-rotate.vue';
import BallClipRotateMultipleLoader from './loaders/ball-clip-rotate-multiple.vue';
import BallClipRotatePulseLoader from './loaders/ball-clip-rotate-pulse.vue';
import BallGridBeatLoader from './loaders/ball-grid-beat.vue';
import BallGridPulseLoader from './loaders/ball-grid-pulse.vue';
import BallPulseLoader from './loaders/ball-pulse.vue';
import BallPulseSyncLoader from './loaders/ball-pulse-sync.vue';
import BallRotateLoader from './loaders/ball-rotate.vue';
import BallScaleLoader from './loaders/ball-scale.vue';
import BallScaleMultipleLoader from './loaders/ball-scale-multiple.vue';
import BallScaleRippleLoader from './loaders/ball-scale-ripple.vue';
import BallScaleRippleMultipleLoader from './loaders/ball-scale-ripple-multiple.vue';
import BallSpinFadeLoader from './loaders/ball-spin-fade.vue';
import BallTrianglePathLoader from './loaders/ball-triangle-path.vue';
import CubeTransitionLoader from './loaders/cube-transition.vue';
import LineScaleLoader from './loaders/line-scale.vue';
import LineScalePartyLoader from './loaders/line-scale-party.vue';
import LineScalePulseOutLoader from './loaders/line-scale-pulse-out.vue';
import LineScalePulseOutRapidLoader from './loaders/line-scale-pulse-out-rapid.vue';
import LineSpinFadeLoader from './loaders/line-spin-fade.vue';
import SquareSpinLoader from './loaders/square-spin.vue';

export const propOptions = {
  name: [
    'line-scale',
    'line-scale-party',
    'line-scale-pulse-out',
    'line-scale-pulse-out-rapid',
    'line-spin-fade',
    'ball-beat',
    'ball-clip-rotate',
    'ball-clip-rotate-multiple',
    'ball-clip-rotate-pulse',
    'ball-grid-beat',
    'ball-grid-pulse',
    'ball-pulse',
    'ball-pulse-sync',
    'ball-rotate',
    'ball-scale',
    'ball-scale-multiple',
    'ball-scale-ripple',
    'ball-scale-ripple-multiple',
    'ball-spin-fade',
    'ball-triangle-path',
    'cube-transition',
    'square-spin'
  ]
};

export default {
  name: 'x-spin',
  props: {
    name: {
      type: String,
      default: 'line-scale',
      validator: oneOf(propOptions.name)
    },
    color: { type: String, default: '#1565C0' },
    size: { type: String, default: '' }
  },
  components: {
    BallBeatLoader,
    BallClipRotateLoader,
    BallClipRotateMultipleLoader,
    BallClipRotatePulseLoader,
    BallGridBeatLoader,
    BallGridPulseLoader,
    BallPulseLoader,
    BallPulseSyncLoader,
    BallRotateLoader,
    BallScaleLoader,
    BallScaleMultipleLoader,
    BallScaleRippleLoader,
    BallScaleRippleMultipleLoader,
    BallSpinFadeLoader,
    BallTrianglePathLoader,
    CubeTransitionLoader,
    LineScaleLoader,
    LineScalePartyLoader,
    LineScalePulseOutLoader,
    LineScalePulseOutRapidLoader,
    LineSpinFadeLoader,
    SquareSpinLoader
  },
  render(h) {
    let tag = this.name + '-loader';
    return h(tag, {
      props: {
        color: this.color,
        size: this.size
      }
    });
  }
};
