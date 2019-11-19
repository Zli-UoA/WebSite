const getMembers = async () => {
  const url = 'https://script.google.com/macros/s/AKfycbyifZfvat-lEALV86JrTlPJvQPVlN5CqGurct9mIZKSehnMdSw/exec';
  const members = await fetch(url).then(x => x.json());
  return members;
};

export default { getMembers };
