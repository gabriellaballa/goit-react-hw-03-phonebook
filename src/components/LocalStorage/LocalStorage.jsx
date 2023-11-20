const localStorageService = {
  saveContacts: contacts => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  },

  getContacts: () => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  },
};

export default localStorageService;
