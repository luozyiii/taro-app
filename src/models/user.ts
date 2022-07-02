export default {
  namespace: "user",
  state: {
    name: "leslie",
    phone: "188****603",
  },
  effects: {},
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
