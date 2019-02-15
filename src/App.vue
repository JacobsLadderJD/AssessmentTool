<template>
  <div id="app">
    <header id="top-bar" style="display: flex; align-items: baseline;">
      <h2 id="header-title"  style="flex: 1">
        <router-link class="unstyled-link" to="/">
          Jacob's Ladder Center
        </router-link>
      </h2>
      <!-- TODO: make this auth-based -->
      <div id="nav" v-if="$route.path !== '/login'">
        <router-link to="/">Home</router-link> |
        <router-link to="/logout">logout</router-link>
      </div>
    </header>
    <router-view/>
    <notifications group="auth" position="bottom right"/>
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
  border-bottom: 2px solid black;
  box-sizing: border-box;
}

#header-title {
  padding: 16px;
  /* padding-bottom: 4px; */
  margin: 0;
}

.unstyled-link {
  text-decoration: none;
  color: inherit;
}

.unstyled-link:hover {
  text-decoration: underline;
  color: inherit;
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
