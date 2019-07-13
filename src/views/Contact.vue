<template>
  <div class="contact section">
    <div class="container">
      <div class="section-header title text-center mb-5">
        <h2 class="section-title text-uppercase mb-3">
          <i class="far fa-paper-plane"></i> Contact
        </h2>
        <p class="lead mb-0">
          ちょっとしたコメントなどでも、お気軽にご連絡ください。
        </p>
      </div>

      <form
        action="https://mailthis.to/kotahashihama"
        method="post"
        class="form"
      >
        <div class="mb-4">
          <div class="row">
            <div class="form-group col-md-6">
              <label for="name">名前</label>
              <input
                type="text"
                name="名前"
                class="form-control"
                id="name"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label for="company-name">会社名</label>
              <input
                type="text"
                name="会社名"
                class="form-control"
                id="company-name"
                placeholder="(任意)"
              />
            </div>

            <div class="form-group col-md-6">
              <label for="email">メールアドレス</label>
              <input
                type="email"
                name="メールアドレス"
                class="form-control"
                id="email"
                required
              />
            </div>

            <div class="form-group col-md-6">
              <label for="tel">電話番号</label>
              <input
                type="tel"
                name="電話番号"
                class="form-control"
                id="tel"
                placeholder="(任意)"
              />
            </div>
          </div>

          <div class="form-group">
            <label for="message">メッセージ</label>
            <textarea
              rows="5"
              name="メッセージ"
              class="form-control"
              id="message"
              required
            ></textarea>
          </div>
        </div>

        <div class="text-center">
          <input
            type="hidden"
            name="_subject"
            value="ポートフォリオサイトへのメッセージ"
          />
          <input
            type="hidden"
            name="_confirmation"
            value="フォームは正常に送信されました"
          />
          <input type="hidden" name="_honeypot" value />
          <button type="submit" class="btn btn-primary btn-lg">送信</button>
        </div>
      </form>

      <div class="text-center">
        <h3 class="mb-4">SNSで繋がりましょう！</h3>
        <a
          href="https://github.com/kotahashihama"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://twitter.com/kotahashihama"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-twitter"></i> Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/kotahashihama/"
          target="_blank"
          class="btn btn-outline-primary mr-1 mb-1"
        >
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.form {
  margin-bottom: 5rem;
}
</style>
