<template>
  <main class="doc-main">
    <header class="breadcrumbs">
      <h2 class="breadcrumbs__title">Моноподы для селфи</h2>

      <ol class="breadcrumbs__list">
        <li class="breadcrumbs__list-item">
          <a class="breadcrumbs__anchor" href="#">Главная</a>
        </li>
        <li class="breadcrumbs__list-item">
          <a class="breadcrumbs__anchor" href="#">Каталог товаров</a>
        </li>
        <li class="breadcrumbs__list-item">
          <a class="breadcrumbs__anchor">Моноподы для селфи</a>
        </li>
      </ol>
    </header>

    <section class="catalog">
      <h2 class="visually-hidden">Список товаров с фильтрами и пагинацией</h2>
      <form class="catalog-filter catalog-filter_sidebar" action="https://echo.htmlacademy.ru/" method="GET">
        <fieldset>
          <legend class="catalog-filter__heading">Фильтр</legend>
          <div class="catalog-filter__prop catalog-filter__prop_price">
            <span class="catalog-filter__prop-name">Стоимость</span>
            <div class="range-slider">
              <label class="range-slider__label" for="catalog-filter__prop-control_bottom-price"></label>
              <input class="range-slider__range-input" id="catalog-filter__prop-control_bottom-price" max="1000000" min="0" type="range" value="100000">

              <label class="range-slider__label" for="catalog-filter__prop-control_top-price"></label>
              <input class="range-slider__range-input" id='catalog-filter__prop-control_top-price' max="1000000" min="0" type="range" value="500000">
            </div>
          </div>
          <div class="catalog-filter__prop catalog-filter__prop_color">
            <span class="catalog-filter__prop-name">Цвет</span>
            <ul class="catalog-filter__prop-values-list">
              <li class="prop-values-list__item">
                <label class="checkbox">
                  <input class="checkbox__input" name="colors[]" type="checkbox" value="black" checked>
                  <span class="checkbox__label-text">Черный</span>
                </label>
              </li>
              <li class="prop-values-list__item">
                <label class="checkbox">
                  <input class="checkbox__input" name="colors[]" type="checkbox" value="white" checked>
                  <span class="checkbox__label-text">Белый</span>
                </label>
              </li>
              <li class="prop-values-list__item">
                <label class="checkbox">
                  <input class="checkbox__input" name="colors[]" type="checkbox" value="blue">
                  <span class="checkbox__label-text">Синий</span>
                </label>
              </li>
              <li class="prop-values-list__item">
                <label class="checkbox">
                  <input class="checkbox__input" name="colors[]" type="checkbox" value="pink">
                  <span class="checkbox__label-text">Розовый</span>
                </label>
              </li>
              <li class="prop-values-list__item">
                <label class="checkbox">
                  <input class="checkbox__input" name="colors[]" type="checkbox" value="red">
                  <span class="checkbox__label-text">Красный</span>
                </label>
              </li>
            </ul>
          </div>
          <div class="catalog-filter__prop catalog-filter__prop_bluetooth">
            <span class="catalog-filter__prop-name">Bluetooth</span>
            <ul class="catalog-filter__prop-values-list">
              <li class="prop-values-list__item">
                <label class="radio-btn">
                  <input class="radio-btn__input" checked name="bluetooh" type="radio">
                  <span class="radio-btn__label-text">Есть</span>
                </label>
              </li>
              <li class="prop-values-list__item">
                <label class="radio-btn">
                  <input class="radio-btn__input" name="bluetooh" type="radio">
                  <span class="radio-btn__label-text">Нет</span>
                </label>
              </li>
            </ul>
          </div>
        </fieldset>
        <button class="line-btn catalog-filter__submit-btn" type="submit">Показать</button>
        <fieldset class="catalog-filter__sort">
          <legend class="catalog-filter__heading">Сортировка</legend>
          <label class="transparent-select__catalog-sort_prop">
            <select class="transparent-select" name="sortBy">
              <option class="transparent-select__option" selected>Популярные</option>
              <option class="transparent-select__option">Рейтинг</option>
              <option class="transparent-select__option">Стоимость</option>
            </select>
          </label>
          <div class=order-btn-group>
            <label class="order-btn-group__item order-btn-group__item-asc">
              <input class="order-btn-group__asc visually-hidden" name="order" value="asc" type='radio' checked>
            </label>
            <label class="order-btn-group__item order-btn-group__item-desc">
              <input class="order-btn-group__desc visually-hidden" name="order" value="desc" type='radio'>
            </label>
          </div>
        </fieldset>
      </form>

      <div class="catalog-listing__wrapper">
        <ul class="catalog-listing">
          <li class="catalog-list__item">
            <figure class="catalog-list__item-review">
              <img class="catalog-list__item-image" src="../../../images/content/catalog/product-0-fanstick.jpg" alt="Селфи-палка обычная" width="360" height="380">
              <figcaption class="catalog-list__item-name">Любительская селфи-палка</figcaption>
            </figure>
            <span class="catalog-list__item-price">500</span>
            <a class="visually-hidden catalog-list__item-link" href="#">Перейти</a>
          </li>
          <li class="catalog-list__item">
            <figure class="catalog-list__item-review">
              <img class="catalog-list__item-image" src="../../../images/content/catalog/product-1-prostick.jpg" alt="Селфи-палка для профи " width="360" height="380">
              <figcaption class="catalog-list__item-name">Профессиональная селфи-палка</figcaption>
            </figure>
            <span class="catalog-list__item-price">1 500</span>
            <a class="visually-hidden catalog-list__item-link" href="#">Перейти</a>
          </li>
          <li class="catalog-list__item">
            <figure class="catalog-list__item-review">
              <img class="catalog-list__item-image" src="../../../images/content/catalog/product-2-wrs.jpg" alt="Селфи-палка водонепроницаемая" width="360" height="380">
              <figcaption class="catalog-list__item-name">Непотопляемая селфи-палка</figcaption>
            </figure>
            <span class="catalog-list__item-price">2 500</span>
            <a class="visually-hidden catalog-list__item-link" href="#">Перейти</a>
          </li>
          <li class="catalog-list__item">
            <figure class="catalog-list__item-review">
              <img class="catalog-list__item-image" src="../../../images/content/catalog/product-3-hand.jpg" alt="Селфи-палка не обычная" width="360" height="380">
              <figcaption class="catalog-list__item-name">Селфи-палка «Следуй за мной»</figcaption>
            </figure>
            <span class="catalog-list__item-price">1 500</span>
            <a class="visually-hidden catalog-list__item-link" href="#">Перейти</a>
          </li>
        </ul>
        <button class="outline-btn show-more-btn">Загрузить еще</button>
        <ol class="pagination-list">
          <li class="pagination-list__item">
            <a class="pagination-list__link_prev" href="#">Назад</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link" href="#">1</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link" href="#">2</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link" href="#">3</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link" href="#">...</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link" href="#">15</a>
          </li>
          <li class="pagination-list__item">
            <a class="pagination-list__link_next" href="#">Вперед</a>
          </li>
        </ol>
      </div>
    </section>
  </main>
</template>
