<script setup>
const projects = [
    {
        img: "./img/1.jpg",
        name: "DESIGN PORTFOLIO",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
        img: "./img/2.jpg",
        name: "E-LEARNING LANDING PAGE",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
        img: "./img/3.jpg",
        name: "TODO WEB APP",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
        img: "./img/4.jpg",
        name: "ENTERTAINMENT WEB APP",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
        img: "./img/5.jpg",
        name: "MEMORY GAME",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
        img: "./img/6.jpg",
        name: "ART GALLERY SHOWCASE",
        stack: ["HTML", "CSS", "JAVASCRIPT"],
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
                                    <button
                                        class="btn-outline-success btn rounded-0 fw-bold"
                                    >
                                        Посмотреть проект
                                    </button>
                                    <button
                                        class="btn-outline-success btn rounded-0 fw-bold mt-3"
                                    >
                                        Посмотреть код
                                    </button>
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
        &:hover {
            .projects__item-name {
                color: $main-title;
            }
        }
    }

    &__item-thumb {
        position: relative;
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
