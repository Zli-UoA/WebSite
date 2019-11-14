import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import TopContent from '../components/TopContent.vue';

storiesOf('Contents', module)
  .addDecorator(withKnobs)
  .add('TopContent', () => ({
    components: { TopContent },
    template: `
            <top-content image-url="https://pro.foto.ne.jp/img/f_25_topimg.jpg" />
        `,
  }));
