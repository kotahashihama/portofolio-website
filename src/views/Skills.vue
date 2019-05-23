<template>
  <div class="skills section">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="section-title text-uppercase mb-3">
          <i class="far fa-lightbulb"></i> Skills
        </h2>
        <p class="lead mb-0">業務で使える言語・ツールの一覧です。</p>
      </div>

      <div class="row">
        <div class="col-12 col-md-6 mb-5 mb-md-0">
          <div class="card shadow-sm">
            <div class="card-header">
              <h3 class="text-center mb-0">実務経験あり</h3>
            </div>
            <div class="card-body">
              <div class="skills-stars text-center text-warning my-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <ul class="mt-4">
                <li>
                  フロントエンド開発
                  <ul class="list-inline">
                    <li class="list-inline-item">HTML</li>
                    <li class="list-inline-item">CSS</li>
                    <li class="list-inline-item">JavaScript</li>
                    <li class="list-inline-item">Sass</li>
                    <li class="list-inline-item">jQuery</li>
                    <li class="list-inline-item">WordPress</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  バックエンド開発
                  <ul class="list-inline">
                    <li class="list-inline-item">PHP</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  ツール
                  <ul class="list-inline">
                    <li class="list-inline-item">Adobe Photoshop</li>
                    <li class="list-inline-item">Adobe Illustrator</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 mb-md-0">
          <div class="card shadow-sm">
            <div class="card-header">
              <h3 class="text-center mb-0">鋭意勉強中</h3>
            </div>
            <div class="card-body">
              <div class="skills-stars text-center text-warning my-2">
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
              </div>
              <ul class="mt-4">
                <li>
                  フロントエンド開発
                  <ul class="list-inline">
                    <li class="list-inline-item">Vue.js</li>
                    <li class="list-inline-item">Bootstrap</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  バックエンド開発
                  <ul class="list-inline">
                    <li class="list-inline-item">Firebase</li>
                    <li class="list-inline-item">Ruby on Rails</li>
                    <li class="list-inline-item">Ruby</li>
                    <li class="list-inline-item">SQL</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li>
                  ツール
                  <ul class="list-inline">
                    <li class="list-inline-item">Git</li>
                    <li class="list-inline-item">AWS</li>
                    <li class="list-inline-item">コマンドライン</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skills {
  &-stars {
    font-size: 3rem;
  }
}
</style>
