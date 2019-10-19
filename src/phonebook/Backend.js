import Axios from 'axios';

const url = "http://localhost:3001/contacts";
const idurl = id => `${url}/${id}`
export const getContacts = () => Axios.get(url);
export const postContact = (name, number) => Axios.post(url, {name, number});
export const deleteContact = id => Axios.delete(idurl(id));
export const patchNumber = (name, number) =>
  getContacts().then(({data}) =>
    Axios.patch(idurl(data.find(c => c.name === name).id), {number})
  );
