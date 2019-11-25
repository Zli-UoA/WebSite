import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import MemberContainer from '../components/MemberContainer.vue';
import EventContainer from '../components/EventContainer.vue';

storiesOf('Container', module)
  .addDecorator(withKnobs)
  .add('Member', () => ({
    components: { MemberContainer },
    template: '<member-container />',
  }))
  .add('Event', () => ({
    components: { EventContainer },
    template: '<event-container />',
  }));
