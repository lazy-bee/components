import { object } from '@storybook/addon-knobs/vue';
import { withReadme } from 'storybook-readme';
import docs from './docs.md';
import XSteps, { propOptions } from '../../../src/components/XSteps';
import { generateStory } from '../../utils/generateStory';

export default withReadme(docs, () =>
  generateStory(
    XSteps,
    propOptions,
    {
      steps: object('steps', [
        { label: 'Step 1', slot: 'slot1' },
        { label: 'Step 2', slot: 'slot2' },
        { label: 'Step 3', slot: 'slot3' }
      ])
    },
    `
    <div style="width:80vw">
    <x-steps v-bind="scheme" >
      <div slot="slot1">Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metus. Sed sollicitudin ipsum quis nunc sollicitudin ultrices. Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id. Donec eget massa a diam condimentum pretium. Aliquam erat volutpat. Integer ut tincidunt orci. Etiam tristique, elit ut consectetur iaculis, metus lectus mattis justo, vel mollis eros neque quis augue. Sed lobortis ultrices lacus, a placerat metus rutrum sit amet. Aenean ut suscipit justo.</div>
      <div slot="slot2">It was a humorously perilous business for both of us. For, before we proceed further, it must be the monkey-rope was fast at both ends; fast to Queequeg's broad canvas belt, and fast to my narrow leather one. So that for better or for worse, we two, for the time, were wedded; and should poor Queequeg sink to rise no more, then both usage and honour demanded, that instead of cutting the cord, it should drag me down in his wake. So, then, an elongated Siamese ligature united us. Queequeg was my own inseparable twin brother; nor could I any way get rid of the dang which the hempen bond entailed.</div>
      <div slot="slot3">Kogi Cosby sweater ethical squid irony disrupt, organic tote bag gluten-free XOXO wolf typewriter mixtape small batch. DIY pickled four loko McSweeney's, Odd Future dreamcatcher plaid. PBR&B single-origin coffee gluten-free McSweeney's banjo, bicycle rights food truck gastropub vinyl four loko umami +1 narwhal chia. Fashion axe Banksy chia umami artisan, bitters 90's fanny pack. Single-origin coffee drinking vinegar blog semiotics. Fap mumblecore church-key PBR&B, direct trade 8-bit swag asymmetrical slow-carb Marfa ethical. Mustache rweater Echo Park sartorial 8-bit ugh bicycle rights iPhone tote bag.</div>
    </x-steps>
    </div>
    `
  )
);
