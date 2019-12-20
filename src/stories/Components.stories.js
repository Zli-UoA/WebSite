import { withKnobs, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/vue";

import AboutItem from "../components/AboutItem.vue";
import EventItem from "../components/EventItem";
import MemberItem from "../components/MemberItem";
import SearchBox from "../components/SearchBox.vue";

storiesOf("Components", module)
  .addDecorator(withKnobs)
  .add("AboutItem", () => ({
    components: { AboutItem },
    data() {
      return {
        title: "LT会",
        imageUrl: "https://bulma.io/images/placeholders/128x128.png",
        content:
          "春と秋に開催する、企業を複数招待しておこなう大LT会をはじめ、他大学とのLT会やメンバーが各自でLT会でメンバー同士のフィードバックや日々行ってることのアウトプットをしています。"
      };
    },
    template: `
                          <about-item
                            :image-url="imageUrl"
                            :title="title" >
                            {{ content }}
                          </about-item>`
  }))
  .add("MemberItem", () => ({
    components: { MemberItem },
    data() {
      return {
        member: {
          imageUrl: "https://bulma.io/images/placeholders/128x128.png",
          name: "Pizaoisi",
          links: {
            hp: "https://uzimaru.com",
            twitter: "https://twitter.com/uzimaru0000",
            github: "https://github.com/uzimaru0000"
          }
        }
      };
    },
    methods: {
      click() {
        console.log("click");
      }
    },
    template: `
              <member-item
                @click="click"
                :member="member"
              />
          `
  }))
  .add("LoadingMemberItem", () => ({
    components: { MemberItem },
    template: '<member-item :is-loading="true" />'
  }))
  .add("EventItem", () => ({
    components: { EventItem },
    data() {
      return {
        event: {
          imageUrl: "https://drive.google.com/uc?id=11vfejDCxERWrVA-NsR6NYF0MIa4wqfL0",
          title: "Test",
          organizer: "Zli",
          date: new Date("2019-11-20T15:00:00.000Z"),
          time: {
            from: new Date("1899-12-29T15:00:00.000Z"),
            to: new Date("1899-12-30T03:00:00.000Z")
          },
          genre: "LT会",
          tags: ["LT会", "初心者"],
          comment: "test des"
        }
      };
    },
    template: `
        <event-item :event="event"></event-item>
      `
  }))
  .add("LoadingEventItem", () => ({
    components: { EventItem },
    template: `
      <event-item :is-loading="true" />
    `
  }))
  .add("Searchbox", () => {
    const placeholder = text("Placeholder", "Placeholder", "");

    return {
      components: { SearchBox },
      props: {
        placeholder: { default: placeholder }
      },
      data() {
        return {
          value: ""
        };
      },
      template: `
          <div>
            <search-box :placeholder="placeholder" v-model="value" />
            <div>
              <span>input data: {{ value }}</span>
            </div>
          </div>
        `
    };
  });
