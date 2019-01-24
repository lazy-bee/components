import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XSpin, { propOptions } from '../../../src/components/XSpin';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () => generateStory(XSpin, propOptions));
