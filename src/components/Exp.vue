<script setup></script>
<template>
    <section class="exp" id="exp">
        <div class="container">
            <div class="section-title">
                <div class="section-title__top">
                    <p class="section-title__name">Технологии</p>
                    <p class="section-title__description">
                        Эти технологии я применяю, чтобы обеспечить успех
                        проектов, с которыми работаю
                    </p>
                </div>
                <div class="section-title__bottom">
                    <p class="section-title__main-text">
                        Опыт работы более <br />
                        3 лет
                    </p>
                </div>
            </div>
            <div class="exp__tech-list">
                <div class="row g-3">
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-html5"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Cтандарт HTML5, структура, семантика, валидация
                                форм, мультимедиа, БЭМ
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-css3"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Версия CSS3, сетки flex/grid, анимации, плавные
                                переходы
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands 
                            fa-sass"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Препроцессоры SASS/SCSS
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-bootstrap"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Сетки, компоненты, формы
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-js"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                ECMAScript 6, асинхронные запросы, локальное
                                хранилище, документ, события, интерфейсы
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-vuejs"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Options/Composition API, глобальное хранилище,
                                роутинг, компонентный подход
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-git-alt"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">
                                Работа с репозиториями, GitHub, GitLab
                            </p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-xl-3">
                        <div class="exp__tech-list-item">
                            <font-awesome-icon
                                icon="fa-brands fa-stack-overflow"
                                class="exp__tech-list-icon"
                            />
                            <p class="exp__tech-list-description">Ok Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../assets/main.scss";
.exp {
    .section-title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media (min-width: 992px) {
            margin-bottom: 3.125rem;
            flex-direction: row;
        }
    }
    &__tech-list {
        &-item {
            position: relative;
            padding: 1.25rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            column-gap: 1.25rem;
            min-height: 10rem;
            flex-wrap: wrap;
            transition: 0.3s all ease;
            &:hover {
                background: $main-accent;
                border-bottom: 0.3125rem solid $main-accent;
                .exp__tech-list-description {
                    color: $main-title;
                    opacity: 1;
                }
                .exp__tech-list-icon {
                    color: $main-title;
                }
                .exp__tech-list-icon.fa-html5 {
                    color: #dd4b25;
                }
                .exp__tech-list-icon.fa-css3 {
                    color: #2862e9;
                }
                .exp__tech-list-icon.fa-bootstrap {
                    color: #8712f7;
                }
                .exp__tech-list-icon.fa-js {
                    color: #efd81d;
                }
                .exp__tech-list-icon.fa-vuejs {
                    color: #3fb27f;
                }
                .exp__tech-list-icon.fa-git-alt {
                    color: #e84e31;
                }
                // .exp__tech-list-icon.fa-github {
                //     color: #1f2328;
                // }
                // .exp__tech-list-icon.fa-gitlab {
                //     color: #db4128;
                // }
                .exp__tech-list-icon.fa-sass {
                    color: #c76494;
                }
                .exp__tech-list-icon.fa-stack-overflow {
                    color: #f7900e;
                }
            }
        }
        &-icon {
            font-size: 3.125rem;
            @media (min-width: 992px) {
                font-size: 6.25rem;
            }
        }
        &-description {
            position: absolute;
            text-align: center;
            opacity: 0;
            padding: 1.25rem;
            background: rgba(#101017, 0.8);
            width: 100%;
            height: 100%;
            inset: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            @media (min-width: 768px) {
            }
        }
    }
}
</style>
