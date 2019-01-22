import { withReadme } from 'storybook-readme';
import docs from './docs.md';

export default withReadme(docs, () => ({
  template: `<h2>Hello upload file</h2>`
}));
