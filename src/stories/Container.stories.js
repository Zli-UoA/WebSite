import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import MemberContainer from '../components/MemberContainer.vue';

storiesOf('Container', module)
  .addDecorator(withKnobs)
  .add('Member', () => ({
    components: { MemberContainer },
    template: '<member-container />',
  }));
