/* global module, require */
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import { withKnobs } from '@storybook/addon-knobs/vue';
import markdownTheme from './styles/atom-dark-markdown.css'; // to avoid the dash-line appeared on the blank page
import markdownCss from './styles/markdown.css'; // to avoid the dash-line appeared on the blank page

import wrapper from './wrapper.js';
import { adminLayout, simpleLayout } from './stories/XLayout';

import Installation from './stories/Installation';
import StyleGuide from './stories/StyleGuide';
import ExampleButton from './stories/ExampleButton';
import ExampleDialog from './stories/ExampleDialog';

import BarChart from './stories/ChartBar';
import LineChart from './stories/ChartLine';
import PieChart from './stories/ChartPie';
import DonutChart from './stories/ChartDonut';
import GeoChart from './stories/ChartGeo';

// Getting Started
storiesOf('Getting Started', module)
  .add('Installation', Installation)
  .add('Style Guide', StyleGuide);

// Demo
storiesOf('Examples', module)
  .add('Button Sample', ExampleButton)
  .add('Dialog Sample', ExampleDialog);

// Components
const components = storiesOf('Components', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

const context = require.context('./stories', true, /\.js$/);
context.keys().forEach(function(key) {
  const component = context(key);
  const matches = key.match(/X(.+)?\//);
  if (component.default && matches) {
    components.add(matches[1], component.default);
  }
});

// Form Group
const formgroup = storiesOf('Form Group', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

const formcontext = require.context('./stories/FormGroup', true, /\.js$/);
formcontext.keys().forEach(function(key) {
  const component = formcontext(key);
  const matches = key.match(/\.\/(.+)?\//);
  if (component.default) {
    formgroup.add(matches[1], component.default);
  }
});

// Charts
storiesOf('Charts', module)
  .addDecorator(withKnobs)
  .addDecorator(wrapper)
  .add('Bar Chart', BarChart)
  .add('Pie Chart', PieChart)
  .add('Donut Chart', DonutChart)
  .add('Line Chart', LineChart)
  .add('Geo Chart', GeoChart);

// Layouts
storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('Admin Layout', adminLayout)
  .add('Simple Layout', simpleLayout);