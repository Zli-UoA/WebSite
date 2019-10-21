import { boolean, color, radios, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import BasicImage from '../components/Atom/BasicImage.vue';
import Logo from '../components/Atom/Logo.vue';
import TitleTag from '../components/Atom/TitleTag.vue';

storiesOf('Atom', module)
  .addDecorator(withKnobs)
  .add('Image', () => {
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
  }).add('Logo', () => {
    const sizeValue = radios(
      'size',
      { small: 'small', medium: 'medium', large: 'large' },
      'medium',
      'Logo',
    );

    const colorValue = radios('color', { default: '', black: 'black', gray: 'gray' }, '', 'Logo');

    return {
      props: { size: { default: sizeValue }, color: { default: colorValue } },
      components: { Logo },
      template: '<Logo :size="size" :color="color" />',
    };
  }).add('TitleTag', () => ({
    components: { TitleTag },
    template: `<div>
      <TitleTag>Title</TitleTag>
      <TitleTag inverse="true">Title</TitleTag>
      </div>
    `,
  }));
