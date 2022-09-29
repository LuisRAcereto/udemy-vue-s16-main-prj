export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFech = state.lastFech;
    if (!lastFech) {
      return true;
    }
    const currentTS = new Date().getTime();
    return (currentTS - lastFech) / 1000 > 60;
  },
};
