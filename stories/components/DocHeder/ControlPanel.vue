<template>
  <div class="control-panel">
    <form class="search-string" method="GET" action="https://echo.htmlacademy.ru/">
      <label class="search-string__input-wrapper" for="search-input">
        <input class="search-string__input" id="search-input" name="query" placeholder="Текст поиска" type="search">
      </label>
      <button class="search-string__submit" type="submit">Найти</button>
    </form>
    <a class="string-btn profile-btn" href="#">Николай Куропаткин</a>
    <a class="string-btn logout-btn" href="#">Выйти</a>
    <a class="string-btn compare-btn" href="#">Сравнить</a>
    <a class="string-btn cart-btn" href="#">
      <span class="cart-btn__counter">2</span>
      Корзина
    </a>
  </div>
</template>
