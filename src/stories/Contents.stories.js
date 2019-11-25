import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import TopContent from '../components/TopContent.vue';
import MemberContent from '../components/MemberContent.vue';
import EventContent from '../components/EventContent.vue';
import ContactContent from '../components/ContactContent.vue';

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
  }))
  .add('EventContent', () => ({
    components: { EventContent },
    data() {
      return {
        events: [
          {
            imageUrl: 'https://drive.google.com/uc?id=11vfejDCxERWrVA-NsR6NYF0MIa4wqfL0',
            title: 'Test',
            organizer: 'Zli',
            date: new Date('2019-11-20T15:00:00.000Z'),
            time: {
              from: new Date('1899-12-29T15:00:00.000Z'),
              to: new Date('1899-12-30T03:00:00.000Z'),
            },
            genre: 'LT会',
            tags: [
              'LT会',
              '初心者',
            ],
            comment: 'test des',
          },
          {
            imageUrl: 'https://drive.google.com/uc?id=11vfejDCxERWrVA-NsR6NYF0MIa4wqfL0',
            title: 'Test',
            organizer: 'Zli',
            date: new Date('2019-11-20T15:00:00.000Z'),
            time: {
              from: new Date('1899-12-29T15:00:00.000Z'),
              to: new Date('1899-12-30T03:00:00.000Z'),
            },
            genre: 'LT会',
            tags: [
              'LT会',
              '初心者',
            ],
            comment: 'test des',
          },
          {
            imageUrl: 'https://drive.google.com/uc?id=11vfejDCxERWrVA-NsR6NYF0MIa4wqfL0',
            title: 'Test',
            organizer: 'Zli',
            date: new Date('2019-11-20T15:00:00.000Z'),
            time: {
              from: new Date('1899-12-29T15:00:00.000Z'),
              to: new Date('1899-12-30T03:00:00.000Z'),
            },
            genre: 'LT会',
            tags: [
              'LT会',
              '初心者',
            ],
            comment: 'test des',
          },
        ],
      };
    },
    template: `
      <event-content :events="events" />
    `,
  }))
  .add('ContactContent', () => ({
    components: { ContactContent },
    template: `
      <contact-content />
    `,
  }));
