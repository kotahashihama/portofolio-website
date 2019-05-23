<template>
  <div class="about section">
    <div class="container">
      <div class="section-header text-center mb-5">
        <h2 class="section-title text-uppercase mb-3">
          <i class="far fa-id-card"></i> About Me
        </h2>
        <p class="lead mb-0">
          こんにちは、
          <span class="font-weight-bold">橋濱幸太</span>と申します。
        </p>
      </div>

      <div class="row mb-5">
        <div class="col-md-5 mb-4">
          <img src="../assets/javascript-frameworks.jpg" alt class="img-fluid">
        </div>
        <div class="col-md-7">
          <h3 class="mb-4">はじめまして！</h3>

          <p>
            Webデザイナーからフロントエンド、あるいはJavaScriptエンジニアへのステップアップを目指し、
            <span
              class="font-weight-bold"
            >現在転職活動中</span>です。
          </p>

          <p>
            <span class="font-weight-bold">Vue.js</span>や
            <span class="font-weight-bold">Firebase</span>を主に学習しており、経過を
            <a href="https://twitter.com/kotahashihama" target="_blank">Twitter</a>等でアウトプットしています。
            <br>よろしければフォローをお願いします。
          </p>

          <p>
            必要な知識はProgateをはじめ、Udemyや入門書で勉強しています。
            <br>作った自作アプリ等は、本サイトの
            <router-link to="/works" class="text-uppercase">Works</router-link>へ掲載しておりますのでぜひご覧ください。
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-md-7 order-12 order-md-0">
          <h3 class="mb-4">前職について</h3>

          <p>
            <span class="font-weight-bold">Webデザイナー</span>として、地方の受託制作会社に勤めておりました。
            <br>業務内容は以下のとおりです：
          </p>
          <ul>
            <li>企業サイト・ランディングページの制作</li>
            <li>既存サイトのCMS化（WordPress）</li>
            <li>広告バナーの制作</li>
          </ul>

          <p>
            Sassを社内で誰よりも早く実務へ取り入れたり、フロントエンド関係の勉強会へ積極的に参加するなど、
            <span
              class="font-weight-bold"
            >最新技術への興味は人一倍です</span>。
            <br>エンジニアとしてもきっとすぐに順応し、お役に立てるのではと思います。
          </p>
        </div>
        <div class="col-md-5 order-0 order-md-12 mb-4">
          <img src="../assets/web-design.jpg" alt class="img-fluid">
        </div>
      </div>

      <div class="row">
        <div class="col-md-5 mb-4">
          <img src="../assets/smartphone-on-hand.jpg" alt class="img-fluid">
        </div>
        <div class="col-md-7">
          <h3 class="mb-4">エンジニアを決意した理由</h3>

          <p>年々ブラウザの表示や挙動は統一化されてきており、また、APIの多様化でさまざまなサービスの可能性が生まれました。</p>
          <p>そういったモダンなWebの世界において、</p>
          <ul>
            <li>どの端末・ブラウザからでも使え、インストール不要という敷居の低さで</li>
            <li>
              <span class="font-weight-bold">人の生活を豊かにするツール</span>を全世界に提供できる
            </li>
          </ul>
          <p>
            という点に魅力を感じ、
            <span class="font-weight-bold">より実用的な価値を世の中に提供するべく</span>エンジニアへのステップアップを決意いたしました。
          </p>
          <p>
            また、デザイナー時代もそうでしたが、実際にユーザーが触れる
            <span class="font-weight-bold">直接の使い勝手を左右する部分に関われる</span>というのは大きなやりがいだと感じています。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
