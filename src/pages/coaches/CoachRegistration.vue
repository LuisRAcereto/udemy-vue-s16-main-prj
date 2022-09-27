<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      // using replace instead of push, because with replace you cannot go back to the original page
      // while push does allow it.
      this.$router.replace('/coaches');
    },
  },
};
</script>
