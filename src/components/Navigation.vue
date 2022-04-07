<template>
  <nav class="nav">
    <div class="mobile-menu-wrapper">
      <div class="mobile-menu-icon"></div>
      <div class="mobile-menu-icon"></div>
      <div class="mobile-menu-icon"></div>
    </div>
  <input type="checkbox" class="mobile-icon-check" name="mobile-icon-check" id="mobile-icon-check">
    <ul class="nav-list">
      <router-link to="/" class="nav-list-item nav-link">Home</router-link>
      <router-link to="/anagram" class="nav-list-item nav-link">Anagram</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.nav {
  width: 100%;
  min-height: 70px;

  display: flex;
  position: relative;

  background-color: #2B2118;
}

.nav-list {
  width: 100%;

  position: absolute;
  top: -170px;
  left: 0;

  margin: 70px auto 20px auto;

  background-color: #2B2118;
  list-style: none;
  text-align: center;
  transition: 0 ease-in;

  display: flex;
  flex-direction: column;
}

.nav-list-item {
  padding: 10px;
}

.nav-link {
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
}

.nav-link:hover {
  font-weight: bold;
  text-decoration: underline;
}

.mobile-menu-wrapper {
  width: 40px;
  height: 40px;

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 10px;
  right: 10px;

  background-color: #2B2D42;
}

.mobile-menu-icon {
  width: 80%;
  height: 15px;

  margin: 5px auto 0 auto;
  z-index: 2;

  background-color: white;
  pointer-events: none;
}

.mobile-icon-check {
  width: 40px;
  height: 40px;

  position: absolute;
  top: 10px;
  right: 10px;
  
  cursor: pointer;
  opacity: 0;
}

.mobile-icon-check:checked ~ .nav-list {
  top: 0px;
}

@media only screen and (min-width: 480px) {
  .mobile-menu-wrapper, .mobile-menu-icon, .mobile-icon-check {
    display: none;
  }

  .nav-list {
    margin: 10px 2%;
    position: relative;
    top: 0;
    flex-direction: row;
    justify-content: flex-end;
  }

  .nav-list-item {
    display: inline-block;
  }
}
</style>
