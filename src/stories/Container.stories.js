import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { storiesOf } from "@storybook/vue";

import MemberContainer from "../components/MemberContainer.vue";
import EventContainer from "../components/EventContainer.vue";
import HeaderContainer from "../components/HeaderContainer.vue";
import MediaContainer from "../components/MediaContainer.vue";

storiesOf("Container", module)
  .addDecorator(withKnobs)
  .addParameters({
    viewport: {
      viewports: INITIAL_VIEWPORTS
    }
  })
  .add("Member", () => ({
    components: { MemberContainer },
    template: "<member-container />"
  }))
  .add("Event", () => ({
    components: { EventContainer },
    template: "<event-container />"
  }))
  .add("HeaderContainer", () => ({
    components: { HeaderContainer },
    template: `
      <HeaderContainer />
    `
  }))
  .add("MediaContainer", () => ({
    components: { MediaContainer },
    template: `
      <media-container>
        <template v-slot:desktop>
          <div>Desktop</div>
        </template>
        <template v-slot:mobile>
          <div>Mobile</div>
        </template>
      </media-container>
    `
  }));
