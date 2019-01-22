import { storiesOf } from '@storybook/vue';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
  object
} from '@storybook/addon-knobs/vue';
import { withDocs, withReadme } from 'storybook-readme';
import docs from './docs.md';
import wrapper from '../../wrapper.js';

let tree = storiesOf('XTree', module)
  .addDecorator(wrapper)
  .addDecorator(withKnobs);

tree.add(
  'Tree',
  withDocs(docs, () => ({
    data() {
      return {
        scheme: {
          draggable: boolean('draggable', true),
          data: object('data', [
            {
              label: '一级 1',
              children: [
                {
                  label: '二级 1-1',
                  children: [
                    {
                      label: '三级 1-1-1'
                    }
                  ]
                }
              ]
            },
            {
              label: '一级 2',
              children: [
                {
                  label: '二级 2-1',
                  children: [
                    {
                      label: '三级 2-1-1'
                    }
                  ]
                },
                {
                  label: '二级 2-2',
                  children: [
                    {
                      label: '三级 2-2-1'
                    }
                  ]
                }
              ]
            },
            {
              label: '一级 3',
              children: [
                {
                  label: '二级 3-1',
                  children: [
                    {
                      label: '三级 3-1-1'
                    }
                  ]
                },
                {
                  label: '二级 3-2',
                  children: [
                    {
                      label: '三级 3-2-1'
                    }
                  ]
                }
              ]
            }
          ])
        }
      };
    },
    template: `
    <x-tree v-bind="scheme" ></x-tree>
    `
  }))
);
