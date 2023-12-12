<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  const APIResearchBeg = 'https://newsapi.org/v2/everything?q=';
  const APIResearchEnd = '&sortBy=popularity&apiKey=';
  const API_key = 'c2d38b53bd6c452c8b77eb90baadf05e';

  const articlesResearch = ref(null);
  const searchQuery = ref(null);

  onMounted(async () => {
    try {
      const responseEverything = await axios.get(APIResearchBeg + null + APIResearchEnd + API_key);
      articlesEverything.value = responseEverything.data.articles;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<template>
  <main>
    <h1>Your news</h1>
    
    <div class="container">
      <button class="btn">
          <span>Countries</span><i class="material-icons"><img src="@/components/icons/earth.png" alt="earth logo" width="50" height="50"></i>
          <ul class="dropdown">
            <li>ae</li>
            <li>ar</li>
            <li>at</li>
            <li>au</li>
            <li>be</li>
            <li>bg</li>
            <li>br</li>
            <li>ca</li>
            <li>ch</li>
            <li>cn</li>
            <li>co</li>
            <li>cu</li>
            <li>cz</li>
            <li>de</li>
            <li>eg</li>
            <li>fr</li>
            <li>gb</li>
            <li>gr</li>
            <li>hk</li>
            <li>hu</li>
            <li>id</li>
            <li>ie</li>
            <li>il</li>
            <li>in</li>
            <li>it</li>
            <li>jp</li>
            <li>kr</li>
            <li>lt</li>
            <li>lv</li>
            <li>ma</li>
            <li>mx</li>
            <li>my</li>
            <li>ng</li>
            <li>nl</li>
            <li>no</li>
            <li>nz</li>
            <li>ph</li>
            <li>pl</li>
            <li>pt</li>
            <li>ro</li>
            <li>rs</li>
            <li>ru</li>
            <li>sa</li>
            <li>se</li>
            <li>sg</li>
            <li>si</li>
            <li>sk</li>
            <li>th</li>
            <li>tr</li>
            <li>tw</li>
            <li>ua</li>
            <li>us</li>
            <li>ve</li>
          </ul>
      </button>
    </div>

    <div class="container">
      <button class="btn">
          <span>Countries</span><i class="material-icons"><img src="@/components/icons/earth.png" alt="earth logo" width="50" height="50"></i>
          <ul class="dropdown">
            <li>business</li>
            <li>entertainment</li>
            <li>general</li>
            <li>health</li>
            <li>science</li>
            <li>sports</li>
            <li>technology</li>
          </ul>
      </button>
    </div>

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

 .container {
	 position: fixed;
	 top: 50%;
	 left: 50%;
	 transform: translate(-50%, -50%);
}
 .btn {
	 outline: 0;
	 display: inline-flex;
	 align-items: center;
	 justify-content: space-between;
	 background: #5380f7;
	 min-width: 260px;
	 border: 0;
	 border-radius: 4px;
	 box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
	 box-sizing: border-box;
	 padding: 16px 20px;
	 color: #fff;
	 font-size: 12px;
	 font-weight: 600;
	 letter-spacing: 1.2px;
	 text-transform: uppercase;
	 overflow: hidden;
	 cursor: pointer;
}
 .btn:focus .dropdown, .btn:active .dropdown {
	 transform: translate(0, 20px);
	 opacity: 1;
	 visibility: visible;
}
 .btn .material-icons {
	 border-radius: 100%;
	 animation: ripple 0.6s linear infinite;
}
 .btn .dropdown {
	 position: absolute;
	 top: 100%;
	 left: 0;
	 background: #fff;
	 width: 100%;
	 border-radius: 4px;
	 box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
	 text-align: left;
	 opacity: 0;
	 visibility: hidden;
	 transition: 0.3s ease;
}
 .btn .dropdown:before {
	 content: '';
	 position: absolute;
	 top: -6px;
	 left: 20px;
	 width: 0;
	 height: 0;
	 box-shadow: 2px -2px 6px rgba(0, 0, 0, .05);
	 border-top: 6px solid #fff;
	 border-right: 6px solid #fff;
	 border-bottom: 6px solid transparent;
	 border-left: 6px solid transparent;
	 transform: rotate(-45deg);
	 mix-blend-mode: multiple;
}
 .btn .dropdown li {
	 z-index: 1;
	 position: relative;
	 background: #fff;
	 padding: 0 20px;
	 color: #666;
}
 .btn .dropdown li.active {
	 color: #5380f7;
}
 .btn .dropdown li:first-child {
	 border-radius: 4px 4px 0 0;
}
 .btn .dropdown li:last-child {
	 border-radius: 0 0 4px 4px;
}
 .btn .dropdown li:last-child a {
	 border-bottom: 0;
}
 .btn .dropdown a {
	 display: block;
	 border-bottom: 1px solid rgba(0, 0, 0, .05);
	 padding: 16px 0;
	 color: inherit;
	 font-size: 10px;
	 text-decoration: none;
}
 @keyframes ripple {
	 0% {
		 box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
	}
	 100% {
		 box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
	}
}
 
</style>