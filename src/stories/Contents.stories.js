import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import TopContent from '../components/TopContent.vue';
import MemberContent from '../components/MemberContent.vue';

storiesOf('Contents', module)
  .addDecorator(withKnobs)
  .add('TopContent', () => ({
    components: { TopContent },
    template: `
            <top-content image-url="https://pro.foto.ne.jp/img/f_25_topimg.jpg" />
        `,
  }))
  .add('MemberContent', () => ({
    components: { MemberContent },
    data() {
      return {
        members: [
          {
            imageUrl: 'https://avatars0.githubusercontent.com/u/13715034',
            name: 'uzimaru0000',
            links: {
              hp: 'https://uzimaru.com',
              twitter: 'https://twitter.com/uzimaru0000',
              github: 'https://github.com/uzimaru0000',
            },
          },
          {
            imageUrl: 'https://avatars0.githubusercontent.com/u/38491969',
            name: 'kusaoisii',
            links: {
              hp: 'https://uzimaru.com',
              twitter: 'https://twitter.com/uzimaru0000',
              github: 'https://github.com/uzimaru0000',
            },
          },
          {
            imageUrl: 'https://avatars1.githubusercontent.com/u/30205140',
            name: 'schktjm',
            links: {
              hp: 'https://uzimaru.com',
              twitter: 'https://twitter.com/uzimaru0000',
              github: 'https://github.com/uzimaru0000',
            },
          },
        ],
      };
    },
    template: `
      <member-content :members="members" />
    `,
  }));
