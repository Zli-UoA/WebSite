import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import AboutItem from '../components/AboutItem.vue';

storiesOf('Components', module).addDecorator(withKnobs).add('AboutItem', () => ({
  components: { AboutItem },
  template: `
      <about-item
        image-url="https://bulma.io/images/placeholders/128x128.png"
        title="title" >
        contentcontentcontentcontentcontentcontent
        contentcontentcontentcontentcontentcontent
        contentcontentcontentcontentcontentcontent
      </about-item>`,
}));
