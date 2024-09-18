<script setup>
const projects = [
    {
        img: "./img/meal.jpg",
        name: "Database of Recipes",
        preview: "https://lam0z.github.io/meal/",
        linkGH: "https://github.com/Lam0z/meal",
        stack: ["HTML", "CSS", "JAVASCRIPT", "VUE (router, pinia)"],
    },
    {
        img: "./img/todo.jpg",
        name: "ToDo app",
        preview: "https://lam0z.github.io/todo/",
        linkGH: "https://github.com/Lam0z/todo",
        stack: ["HTML", "CSS", "JAVASCRIPT (LocalStorage)", "VUE"],
    },
];
</script>
<template>
    <section class="projects" id="projects">
        <div class="container">
            <div class="projects__top">
                <div class="section-title">
                    <div class="section-title__top">
                        <p class="section-title__name">Мои работы</p>
                    </div>
                    <div class="section-title__bottom">
                        <p class="section-title__main-text">
                            Некоторые из моих любимых проектов.
                        </p>
                    </div>
                </div>

                <button class="btn-outline-success btn rounded-0 fw-bold">
                    Все проекты
                </button>
            </div>
            <div class="projects__list">
                <div class="row g-4">
                    <div
                        class="col-12 col-md-6"
                        v-for="(item, index) in projects"
                        :key="index"
                    >
                        <div class="projects__item">
                            <div class="projects__item-thumb">
                                <img :src="item.img" alt="image" />
                                <div class="projects__item-more">
                                    <a
                                        :href="item.preview"
                                        target="_blank"
                                        class="btn-outline-success btn rounded-0 fw-bold"
                                    >
                                        Посмотреть проект
                                    </a>
                                    <a
                                        :href="item.linkGH"
                                        target="_blank"
                                        class="btn-outline-success btn rounded-0 fw-bold mt-3"
                                    >
                                        Посмотреть код
                                    </a>
                                </div>
                            </div>
                            <p class="projects__item-name">{{ item.name }}</p>
                            <div
                                class="projects__item-tech d-flex column-gap-2"
                            >
                                <span
                                    v-for="(tech, index) in item.stack"
                                    :key="index"
                                    >{{ tech }}</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.projects {
    &__top {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 1.875rem;

        @media (min-width: 992px) {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }
    &__list {
    }

    &__item {
        height: 100%;
        display: flex;
        flex-direction: column;
        &:hover {
            .projects__item-name {
                color: $main-title;
            }
        }
        img {
            height: 100%;
        }
    }

    &__item-thumb {
        position: relative;
        flex-grow: 1;
        &:hover {
            .projects__item-more {
                opacity: 1;
            }
        }
    }

    &__item-more {
        position: absolute;
        opacity: 0;
        inset: 0;
        background: rgba($main-bg, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: 0.3s all ease;
    }

    &__item-name {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.5625rem;
        margin-top: 1.25rem;
        transition: 0.3s all ease;
        @media (min-width: 992px) {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 2rem;
        }
    }

    &__item-tech {
        span {
            transition: 0.3s all ease;
            @media (min-width: 992px) {
                font-size: 1.125rem;
                font-weight: 500;
                line-height: 1.75rem;
            }
            &:hover {
                color: $main-accent;
            }
        }
    }
}
</style>
