<template lang="html">
  <main>
    <div class='card'>
      <h1 class='card__header'>Login</h1>
      <form class="login-form card__body" action="index.html" method="post">
        <div class="aligned-input">
          <label class="aligned-input__label"
            for="email-input">Email</label>
          <input id="email-input" class="aligned-input__input"
            type="email" v-model="email" placeholder="Email"/>
        </div>
        <div class="aligned-input">
          <label class="aligned-input__label"
            for="password-input">Password</label>
          <input id="password-input" class="aligned-input__input"
            type="password" v-model="password" placeholder="Password"/>
        </div>
        <div class="card__footer">
          <div class="--right-align">
            <button @click.stop.prevent="login" type="button" name="submit">Log in</button>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import MockApi from "@/fixtures/MockApi"
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    login () {
      // try to Login
      MockApi.login(this.email, this.password)
        .then(token => {
          this.$router.push('/');
        })
        .catch(err => {
          alert(err.message);
        })
    }
  }
}
</script>

<style lang="css" scoped>
main {
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 50%;
  padding: 28px 24px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);

}

.card__header {
  margin-top: 0;
  text-align: left;
}

.aligned-input {
  display: flex;
  margin-bottom: 24px;
  height: 40px;
}

.card__footer {
  display: flex;
}

.--right-align {
  align-self: flex-end;
  flex: 1;
  text-align: right;
}

.aligned-input__label {
  flex: 0 0 200px;
  padding-right: 20px;
  display: block;
  text-align: right;
  font-size: 1.4em;
  line-height: 40px;
}

.aligned-input__input {
  flex: 1;
  display: block;
  font-size: 1.2em;
}


</style>
