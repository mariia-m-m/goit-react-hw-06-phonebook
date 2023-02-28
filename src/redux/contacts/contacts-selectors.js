export const getAllContacts = store => store.contacts;
export const getMainContacts = store => {
    const maincontacts = store.contacts.filter(({ main }) => main);
    return maincontacts;
}
export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
}