import './loaders.css';

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

export default {
  name: 'x-spin',
  props: {
    name: { type: String, default: 'line-scale' },
    color: { type: String, default: '' },
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
