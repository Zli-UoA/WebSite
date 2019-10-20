import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import BasicImage from '../components/Atom/BasicImage.vue';

storiesOf('Atom', module).addDecorator(withKnobs).add('Image', () => {
  const isRound = boolean('isRound', false);

  return {
    props: { round: { default: isRound } },
    components: { BasicImage },
    template: `<BasicImage
                src="https://bulma.io/images/placeholders/128x128.png"
                width="128px"
                height="128px"
                :round="round" />`,
  };
});
