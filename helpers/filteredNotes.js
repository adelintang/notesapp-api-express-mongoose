const filteredNotes = (value) => value.reduce((acc, curr) => {
  acc.push({
    _id: curr.id, title: curr.title, tags: curr.tags, body: curr.body,
  });
  return acc;
}, []);

export default filteredNotes;
