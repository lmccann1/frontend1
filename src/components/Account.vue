<template>
<div class="text-md-center">
    <H1>ADD ACCOUNT</H1>
    <form>
        Forename:<br>
        <input type="text" name="firstname" v-model="Account.forename">
        <br>
        Surname:<br>
        <input type="text" name="lastname" v-model="Account.surname">
        <br><br>
        <button type="submit" class="btn" @click="addToAPI">Submit</button>
    </form>
</div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'account',
  data() {
    return {
      Account: { forename: '', surname: '' },
    };
  },
  methods: {
    addToAPI() {
      const addUser = {
        forename: this.Account.forename,
        surname: this.Account.surname,
      };
      console.log(addUser);
      axios.post('http://localhost:9000/api/v1/accounts', addUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
