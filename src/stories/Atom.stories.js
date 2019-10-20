import { storiesOf } from '@storybook/vue';

import TitleTag from '../components/Atom/TitleTag.vue';

storiesOf('Atom', module).add('TitleTag', () => ({
  components: { TitleTag },
  template: `<div>
      <TitleTag>Title</TitleTag>
      <TitleTag inverse="true">Title</TitleTag>
      </div>
    `,
}));
