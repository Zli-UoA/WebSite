const getMembers = async () => {
  const url = 'https://script.google.com/macros/s/AKfycbyifZfvat-lEALV86JrTlPJvQPVlN5CqGurct9mIZKSehnMdSw/exec';
  const members = await fetch(url).then(x => x.json());
  return members;
};

const getEvents = async () => {
  const url = 'https://script.google.com/macros/s/AKfycby0-Y5zywIbErcLROJR_15RigfSIeHMINpmu3sknOc6MNSpKlht/exec';
  const events = await fetch(url).then(x => x.json());
  return events.map(event => ({
    ...event,
    date: new Date(event.date),
    time: {
      from: new Date(event.time.from),
      to: new Date(event.time.to),
    },
  }));
};

export default { getMembers, getEvents };
