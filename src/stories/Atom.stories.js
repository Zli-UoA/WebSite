import { radios, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import Logo from '../components/Atom/Logo.vue';

storiesOf('Atom', module).addDecorator(withKnobs).add('Logo', () => {
  const value = radios(
    'size', { small: 'small', medium: 'medium', large: 'large' },
    'medium', 'Logo',
  );

  return {
    props: { size: { default: value } },
    components: { Logo },
    template: '<Logo :size="size" />',
  };
});
