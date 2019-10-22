import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import AboutItem from '../components/AboutItem.vue';
import MemberItem from '../components/MemberItem.vue';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('AboutItem', () => ({
    components: { AboutItem },
    template: `
                          <about-item
                            image-url="https://bulma.io/images/placeholders/128x128.png"
                            title="title" >
                            contentcontentcontentcontentcontentcontent
                            contentcontentcontentcontentcontentcontent
                            contentcontentcontentcontentcontentcontent
                          </about-item>`,
  }))
  .add(
    'MemberItem',
    () => ({
      components: { MemberItem },
      data() {
        return {
          member: {
            imageUrl: 'https://bulma.io/images/placeholders/128x128.png',
            name: 'Pizaoisi',
            links: {
              hp: 'https://uzimaru.com',
              twitter: 'https://twitter.com/uzimaru0000',
              github: 'https://github.com/uzimaru0000',
            },
          },
        };
      },
      methods: {
        click() {
          console.log('click');
        },
      },
      template: `
              <member-item
                @click="click"
                :member="member"
              />
          `,
    }),
  );