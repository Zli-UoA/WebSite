import Vue from "vue";
import Vuex from "vuex";
import API from "../api";

Vue.use(Vuex);

const setMembersMutation = members => ({
  type: "setMembers",
  members
});

const setMemberMutation = member => ({
  type: "setMember",
  member
});

const setEventsMutation = events => ({
  type: "setEvents",
  events
});

export const getMembers = () => ({
  type: "getMembers"
});

export const getMember = ({ id, onErr }) => ({
  type: "getMember",
  id,
  onErr
});

export const getEvents = () => ({
  type: "getEvents"
});

export default new Vuex.Store({
  state: {
    members: {},
    events: {}
  },
  mutations: {
    setMembers(state, payload) {
      state.members = {
        ...state.members,
        ...payload.members.reduce((acc, { id, ...member }) => {
          return { ...acc, [id]: member };
        }, {})
      };
    },
    setMember(state, { member: { id, ...member } }) {
      state.members = {
        ...state.members,
        [id]: member
      };
    },
    setEvents(state, payload) {
      state.events = {
        ...state.events,
        ...payload.events.reduce((acc, { id, ...event }) => {
          return { ...acc, [id]: event };
        }, {})
      };
    }
  },
  actions: {
    async getMembers(context) {
      const members = await API.getMembers();
      context.commit(setMembersMutation(members));
    },
    async getMember(context, { id, onErr }) {
      try {
        const member = await API.getMember(id);
        context.commit(setMemberMutation(member));
      } catch (e) {
        onErr();
      }
    },
    async getEvents(context) {
      const event = await API.getEvents();
      context.commit(setEventsMutation(event));
    }
  },
  getters: {
    members: state => {
      return Object.keys(state.members).map(id => ({ id, ...state.members[id] }));
    },
    events: state => {
      return Object.keys(state.events).map(id => ({ id, ...state.events[id] }));
    },
    memberById: state => id => state.members[id]
  }
});
