import { boolean, object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XTree from '../../../src/components/XTree';
import { generateStory } from '../../utils/generateStory';

const genChilds = (n, depth, prefix) =>
  new Array(n).fill(1).map((_, i) => {
    const label = prefix ? `${prefix}-${i + 1}` : `Item ${i + 1}`;
    if (depth === 1) {
      return {
        label: label
      };
    }
    return {
      label: label,
      children: genChilds(n, depth - 1, label)
    };
  });

export default withReadme(docs, () =>
  generateStory(
    XTree,
    {},
    {
      draggable: boolean('draggable', true),
      data: object('data', genChilds(2, 3))
    }
  )
);
