const store = {
  user: null,
  quarantineStartDate: null,
  setUser(user) {
    this.user = user;
  },
  setQuarantineStartDate(date) {
    this.quarantineStartDate = date;
  },
};

export default store;
