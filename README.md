# ๐ ๋ด์ผ์ ์ง

### 1. GNB

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>
  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">๋ก๊ทธ์ธ</a>
    <a href="/">ํ์๊ฐ์</a>
  </div>
</div>
```

- ๋ก๊ทธ์ธ์ ํ์ ๊ฒฝ์ฐ

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="๊ฒ์์ฐฝ ์ด๊ธฐ ๋ฒํผ"
  >
    <i class="ic-search"></i>
  </button>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="์คํฌ๋ฉ๋ถ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    class="gnb-icon-button sm-hidden"
    href="/"
    aria-label="๋ด ์์ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-bell"></i>
  </a>

  <a
    class="gnb-icon-button is-cart"
    href="/"
    aria-label="์ฅ๋ฐ๊ตฌ๋ ํ์ด์ง๋ก ์ด๋"
  >
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-button sm-hidden"
    type="button"
    aria
    aria-label="๋ง์ด๋ฉ๋ด ์ด๊ธฐ ๋ฒํผ"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- ๋ก๊ทธ์ธ์ ํ์ง ์์ ๊ฒฝ์ฐ

```html
<div class="sidebar-auth">
  <a class="btn-outlined btn-40" href="/">๋ก๊ทธ์ธ</a>
  <a class="btn-primary btn-40" href="/">ํ์๊ฐ์</a>
</div>
```

- ๋ก๊ทธ์ธ์ ํ ๊ฒฝ์ฐ

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="์ฌ๋ฌ๋ผ ์์ ์จ" />
    </div>
    <strong class="username">์ฌ๋ฌ๋ผ</strong>
  </a>
</div>
```
