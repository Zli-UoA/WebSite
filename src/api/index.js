const baseURL = "https://api.zli.now.sh";

const getMembers = async () => {
  const url = `${baseURL}/members`;
  const members = await fetch(url).then(x => x.json());
  return members;
};

const getMember = async id => {
  const url = `${baseURL}/member/${id}`;
  const member = await fetch(url).then(x => x.json());
  return member;
};

const getEvents = async () => {
  const url = `${baseURL}/events`;
  const events = await fetch(url).then(x => x.json());
  return events.map(event => ({
    ...event,
    date: new Date(event.date),
    time: {
      from: new Date(event.time.from),
      to: new Date(event.time.to)
    }
  }));
};

export default { getMembers, getMember, getEvents };
