<template>
  <div id="app">
    <header id="top-bar" style="display: flex; align-items: baseline;">
      <h2 id="header-title"  style="flex: 1">Jacob's Ladder Center</h2>
      <div id="nav" v-if="$route.path !== '/login'">
        <router-link to="/">Home</router-link> |
        <router-link to="/login">logout</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#top-bar {

}

#header-title {
  padding: 16px;
  /* padding-bottom: 4px; */
  margin: 0;
}

#nav {
  padding: 16px;
  padding-bottom: 4px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.--underlined {
  text-decoration: underline;
}

.btn {
  border-radius: 4px;
  border: 2px solid grey;
  background: none;
  padding: .5em;
  min-height: 40px;
  min-width: 40px;
}

.btn-info {
  background-color: #1B93C6;
  border-color: #177EAA;
  color: white;
}
</style>
