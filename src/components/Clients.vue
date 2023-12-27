<script setup>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y];
</script>
<template>
    <section class="reviews" id="reviews">
        <div class="container">
            <div class="section-title">
                <div class="section-title__top">
                    <p class="section-title__name">Обзоры</p>
                </div>
                <div class="section-title__bottom">
                    <p class="section-title__main-text">
                        Мои счастливые клиенты
                    </p>
                </div>
            </div>

            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="0"
                navigation
                :pagination="{ clickable: true }"
                class="reviews-swiper"
            >
                <swiper-slide>
                    <div class="reviews__item">
                        <p class="reviews__item-text">
                            "Услуги по созданию веб-приложений превзошли мои
                            ожидания. Профессионализм и внимание к деталям со
                            стороны команды разработчиков поразили меня.
                            Результаты работы соответствуют высоким стандартам и
                            демонстрируют глубокое понимание потребностей
                            клиентов."
                        </p>
                        <div class="reviews__item-person">
                            <img
                                src="../assets/img/monalisa.jpg"
                                alt=""
                                class="reviews__person-img"
                            />
                            <div class="reviews__person-info">
                                <p class="reviews__person-name">Мария</p>
                                <p class="reviews__person-job">
                                    Проектный менеджер
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <p class="reviews__item-text">
                            "Услуга по созданию веб-страницы была оказана на
                            высоком профессиональном уровне. Разработчик
                            внимательно отнесся к моим пожеланиям и создал
                            страницу, которая полностью соответствует всем моим
                            требованиям и гармонично выглядит."
                        </p>
                        <div class="reviews__item-person">
                            <img
                                src="../assets/img/man.jpg"
                                alt=""
                                class="reviews__person-img"
                            />
                            <div class="reviews__person-info">
                                <p class="reviews__person-name">Александр</p>
                                <p class="reviews__person-job">
                                    Частный предприниматель
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="reviews__item">
                        <p class="reviews__item-text">
                            "Разработка сайта-визитки прошла успешно,
                            результатом доволена. Рекомендую данного
                            разработчика для подобных проектов."
                        </p>
                        <div class="reviews__item-person">
                            <img
                                src="../assets/img/woman.jpg"
                                alt=""
                                class="reviews__person-img"
                            />
                            <div class="reviews__person-info">
                                <p class="reviews__person-name">Эльвира</p>
                                <p class="reviews__person-job">
                                    Индивидуальный предприниматель
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<style lang="scss">
@import "../assets/main.scss";
.reviews {
    &-swiper {
        padding-bottom: 3.125rem;
        // overflow: visible;
        margin-bottom: 3.125rem;
        .swiper-button-next,
        .swiper-button-prev {
            display: none;
            color: $main-accent;
            transform: translateY(-50%);
            @media (min-width: 768px) {
                display: block;
            }
        }
        .swiper-pagination-bullet {
            background: $main-accent;
            color: $main-accent;
        }
    }
    &__item {
        max-width: 34.6875rem;
        margin: 0 auto;
        display: grid;
        justify-items: center;
        row-gap: 2rem;
    }

    &__item-text {
        text-align: center;
        @media (min-width: 992px) {
            font-size: 1.125rem;
            line-height: 1.75rem;
        }
    }

    &__item-person {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        column-gap: 1.25rem;
        @media (min-width: 768px) {
            text-align: left;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
    }

    &__person-img {
        max-width: 3.125rem;
        max-height: 3.125rem;
        border-radius: 50%;
    }

    &__person-info {
    }

    &__person-name {
        color: $main-title;
        font-weight: bold;
    }

    &__person-job {
    }
}
</style>
