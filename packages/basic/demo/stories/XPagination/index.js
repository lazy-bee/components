import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XPagination from '../../../src/components/XPagination';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () => generateStory(XPagination, {}, {}));
