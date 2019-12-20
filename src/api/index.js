const baseURL = "https://api.zli.now.sh";

const getMembers = async () => {
  const url = `${baseURL}/members`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const members = await response.json();
  return members;
};

const getMember = async id => {
  const url = `${baseURL}/member/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const member = await response.json();
  return member;
};

const getEvents = async () => {
  const url = `${baseURL}/events`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const events = await response.json();
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
