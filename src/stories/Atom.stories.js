import { radios, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import Logo from '../components/Atom/Logo.vue';

storiesOf('Atom', module).addDecorator(withKnobs).add('Logo', () => {
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
});
