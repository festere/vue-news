<script  setup>
</script>

<template>
  <header>
    <div>
      <img src="@/components/icons/logo.svg" alt="Logo">
    </div>

    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenu">
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Main news</router-link>
          <router-link to="/yournews" class="navbar-item">Your news</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/contact" class="navbar-item">Contact</router-link>
        </div>
      </div>
    </nav>
  </header>

  <router-view></router-view>
  
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,700');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  header {
    background-color: #a0a0a0;
    color: white;
    text-align: center;
    padding: 20px;
  }

  header img {
    width: 100px;
    height: 100px;
    padding-right: 0%;
  }

  .navbar-menu {
    background-color: #a0a0a0;
    color: white;
    text-align: center;
    padding: 20px;
  }

  .navbar-start{
    background-color: #a0a0a0;
    color: white;
    text-align: center;
    padding: 20px;
  }

  .navbar-item{
    background-color: #a0a0a0;
    color: white;
    text-align: center;
    padding: 20px;
  }

  h1 {
    font-size: 2em;
    margin: 0;
    text-align: center;
    color: #ffffff;
    padding-top: 3%;
  }

  body {
    color: #272727;
    font-family: 'Quicksand', serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    padding: 1rem;
  }

  .main{
    max-width: 1200px;
    margin: 0 auto;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
  }

  .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards_item {
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

  .card {
    background-color: rgba(255, 255, 255, 0);
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-bottom: 100px;
  }

  .card_content {
    padding: 1rem;
    background: linear-gradient(to bottom left, #EF8D9C 40%, #FFC39E 100%);
  }

  .card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;    
    font-weight: 400;
  }
  .made_by{
    font-weight: 400;
    font-size: 13px;
    margin-top: 35px;
    text-align: center;
  }
</style>