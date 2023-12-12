<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const APIEverything = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
  const APIResearchBeg = 'https://newsapi.org/v2/everything?q=';
  const APIResearchEnd = '&sortBy=popularity&apiKey=';
  const API_key = 'c2d38b53bd6c452c8b77eb90baadf05e';

  const articlesEverything = ref([]);
  const articlesResearch = ref([]);
  const searchQuery = ref('');

  onMounted(async () => {
    try {
      const responseEverything = await axios.get(APIEverything + API_key);
      articlesEverything.value = responseEverything.data.articles;
    } catch (error) {
      console.error(error);
    }
  });

  const searchNews = async () => {
    try {
      const responseResearch = await axios.get(APIResearchBeg + searchQuery.value + APIResearchEnd + API_key);
      articlesResearch.value = responseResearch.data.articles;
      console.log(articlesResearch.value);

    } catch (error) {
      console.error(error);
    }
  };

  const redirectToArticle = (article) => {
    window.location.href = article.url;
  };
</script>

<template>
  <main>
    <h1>Main news</h1>

    <ul class="cards">
      <li class="cards_item">

        <div v-for="(article, index) in articlesEverything" :key="index" class="card">
          <img :src="article.urlToImage ?? 'https://picsum.photos/500/300?random=' + index" alt="Image" class="card_image">
            <div class="card_content">
              <h2 class="card_title">{{ article.title }}</h2>
              <br>
              <h3 class="card_title">{{ article.source.name }}</h3>
              <h3 class="card_title">{{ article.author }}</h3>

              <p class="card_text">{{ article.description }}</p>
              <button class="btn card_btn" @click="redirectToArticle(article)">Read More</button>
            </div>
        </div>

      </li>
    </ul>
  </main>
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