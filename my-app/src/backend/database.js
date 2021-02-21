
export let initAdmin = () =>
{
  
  // const docRef = db.collection('users').doc('alovelace');
  
  // docRef.set({
  //   first: 'Ada',
  //   last: 'Lovelace',
  //   born: 1815
  // });
  
}


export let addNewDoc = (db, collection, data) =>
{

  const docRef = db.collection(collection).doc();
  
  docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });
}
