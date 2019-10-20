import { boolean, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import BasicImage from '../components/Atom/BasicImage.vue';

storiesOf('Atom', module).addDecorator(withKnobs).add('Image', () => {
  const isRound = boolean('isRound', false);
  const overlay = color('OverlayColor', 'rgba(0, 0, 0, 0.1)');

  return {
    props: { round: { default: isRound }, overlay: { default: overlay } },
    components: { BasicImage },
    template: `<BasicImage
                  src="https://bulma.io/images/placeholders/128x128.png"
                  width="128px"
                  height="128px"
                  :overlay="overlay"
                  :round="round" />`,
  };
});
