import {
  array,
  boolean,
  color,
  date,
  number,
  object,
  selectV2,
  text
} from '@storybook/addon-knobs/vue';

export const generateStory = (
  component,
  propOptions = {},
  values = {},
  template
) => {
  return {
    data() {
      return {
        scheme: generateScheme(component, propOptions, values)
      };
    },
    template:
      template ||
      `
<div>
  <${component.name} v-bind="scheme"></${component.name}>
</div>
`
  };
};

export const generateScheme = ({ props }, propOptions = {}, values = {}) => {
  const propsConfig = {};
  for (let name in props) {
    const prop = props[name];
    if (!prop.type || prop.type.name === 'Function') continue;

    propsConfig[name] = generatePropConfig({
      name,
      prop,
      value: values[name],
      options: propOptions[name]
    });
  }
  // return propsConfig;
  return Object.assign({}, values, propsConfig);
};

const propTypeKnobMapping = {
  String: text,
  Number: number,
  Boolean: boolean,
  Object: object,
  Array: array,
  Date: date,
  Symbol: text
};

const generatePropConfig = ({ name, prop, value, options }) => {
  if (typeof value !== 'undefined') {
    return value;
  }
  if (prop.type.name === 'String' && options) {
    const selections = {};
    for (let option in options) {
      selections[option] = option;
    }
    return selectV2(name, options, prop.default);
  }
  if (name === 'color') {
    return color(name, prop.default);
  }

  const knobType = propTypeKnobMapping[prop.type.name];

  if (!knobType) {
    throw 'Prop type not support yet';
  }
  return knobType(
    name,
    typeof prop.default === 'function' ? prop.default() : prop.default
  );
};
