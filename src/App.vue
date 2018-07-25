<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">Vue CRUD App</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/" @click="hideHeader" exact>Home</b-nav-item>
          <b-nav-item to="/posts-manager" @click="showHeader">Posts Manager</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="header-panel" v-if="visibleHeader">
      <h1 class="h1">Posts Manager</h1>
    </div>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        visibleHeader: false
      };
    },
    watch: {
    },
    methods: {
      hideHeader() {
        this.visibleHeader = false;
      },
      showHeader() {
        this.visibleHeader = true;
      }
    }
  };
</script>

<style>
  .header-panel {
    width: 100%;
    background-color: #eee;
    padding: 1rem;
    border-bottom: 1px solid #999;
  }
  h1, .h1 {
    font-size: 1.6rem;
    text-align: center;
  }
</style>
