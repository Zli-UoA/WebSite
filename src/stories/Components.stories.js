import { withKnobs, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import AboutItem from '../components/AboutItem.vue';
import EventItem from '../components/EventItem.vue';
import MemberItem from '../components/MemberItem.vue';
import SearchBox from '../components/SearchBox.vue';

storiesOf('Components', module)
  .addDecorator(withKnobs)
  .add('AboutItem', () => ({
    components: { AboutItem },
    data() {
      return {
        title: 'LT会',
        content: '春と秋に開催する、企業を複数招待しておこなう大LT会をはじめ、他大学とのLT会やメンバーが各自でLT会でメンバー同士のフィードバックや日々行ってることのアウトプットをしています。',
      };
    },
    template: `
                          <about-item
                            image-url="https://bulma.io/images/placeholders/128x128.png"
                            :title="title" >
                            {{ content }}
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
  )
  .add(
    'EventItem',
    () => ({
      components: { EventItem },
      data() {
        return {
          event: {
            image: 'https://bulma.io/images/placeholders/128x128.png',
            date: 'YYYY/MM/DD hh:mm ~ hh:mm',
            title: 'Title',
            tags: [
              'tag1',
              'tag2',
            ],
          },
        };
      },
      template: `
        <event-item :event="event"></event-item>
      `,
    }),
  )
  .add(
    'Searchbox',
    () => {
      const placeholder = text('Placeholder', 'Placeholder', '');

      return {
        components: { SearchBox },
        props: {
          placeholder: { default: placeholder },
        },
        data() {
          return {
            value: '',
          };
        },
        template: `
          <div>
            <search-box :placeholder="placeholder" v-model="value" />
            <div>
              <span>input data: {{ value }}</span>
            </div>
          </div>
        `,
      };
    },
  );
