<template>
  <div class="home">
    <div class="jumbotron text-center mb-0">
      <div class="container">
        <img class="kotahashihama mb-4" src="../assets/kotahashihama.jpg" alt="橋濱幸太">
        <h1 class="name">Kota Hashihama</h1>
        <p class="job">
          Webデザイナー
          <i class="fas fa-caret-right"></i> フロントエンドエンジニア
        </p>
        <router-link to="/works" class="btn btn-primary btn-lg">成果物を見る</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jumbotron {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.5rem 1rem;
  border-radius: 0;
  background-image: url("../assets/jumbotron.jpg");
  background-size: cover;
  background-position: center 40%;
  height: 100vh;

  .container {
    font-weight: normal;
    color: #fff;
  }

  .kotahashihama {
    border-radius: 100%;
    width: 130px;
    height: 130px;
    object-fit: cover;
  }

  .name {
    font-size: 1.8rem;
    font-family: "Press Start 2P", cursive;
  }

  .job {
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 576px) {
  .jumbotron {
    .name {
      font-size: 3.5rem;
    }

    .job {
      font-size: 1.25rem;
    }
  }
}

@media (min-width: 768px) {
  .jumbotron {
    .kotahashihama {
      width: 150px;
      height: 150px;
    }

    .name {
      font-size: 4rem;
    }
  }
}
</style>
