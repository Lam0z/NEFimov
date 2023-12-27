<script setup>
import { onMounted, ref } from "vue";
const menuIsActive = ref(false);
const isScroll = ref(false);
onMounted(() => {
    window.addEventListener("scroll", (e) => {
        window.scrollY > 1 ? (isScroll.value = true) : (isScroll.value = false);
    });
});
window.addEventListener("resize", (e) => {
    menuIsActive.value = false;
});

const toggleMenu = () => (menuIsActive.value = false);
</script>
<template>
    <header class="header" :class="{ 'header--scroll': isScroll }">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-4 col-xl-6 d-flex align-items-center">
                    <a href="#" class="header__logo">NEfimov <span>.</span></a>
                </div>
                <div class="col-6 col-md-8 col-xl-6">
                    <ul
                        class="header__nav list-unstyled d-md-flex justify-content-md-between align-items-center"
                        :class="[menuIsActive ? 'is-active ' : 'd-none']"
                    >
                        <!-- <li class="header__nav-item">
                            <a href="#" @click="toggleMenu">Home</a>
                        </li> -->
                        <li class="header__nav-item">
                            <a href="#exp" @click="toggleMenu">Опыт</a>
                        </li>
                        <li class="header__nav-item">
                            <a href="#projects" @click="toggleMenu"
                                >Мои работы</a
                            >
                        </li>
                        <li class="header__nav-item">
                            <a href="#reviews" @click="toggleMenu">Отзывы</a>
                        </li>
                        <li class="header__nav-item">
                            <button
                                type="button"
                                class="btn btn-outline-success rounded-0 fw-bold"
                            >
                                Написать мне
                            </button>
                        </li>
                    </ul>
                    <button
                        class="hamburger hamburger--spin"
                        :class="{ 'is-active': menuIsActive }"
                        @click="menuIsActive = !menuIsActive"
                        type="button"
                    >
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;

    @media (min-width: 768px) {
        padding: 1.125rem 0;
    }
    &--scroll {
        background: $main-bg;
    }
    &__logo {
        span {
            color: $main-accent;
        }
        @media (min-width: 768px) {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.75rem;
        }
    }
    &__nav {
        &.is-active {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0.9375rem;
            background: $main-bg;
            .btn {
                margin-top: 0.625rem;
                // width: 100%;
            }
        }
        @media (min-width: 768px) {
            display: block;
        }
        &-item {
            // color: var(--main-title);
            &:hover {
                cursor: pointer;
            }
            a {
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    // transform: translateY(-50%);
                    width: 0;
                    height: 2px;
                    background: $main-accent;
                    transition: 0.5s all ease-in-out;
                }
                &:hover {
                    color: $main-accent;
                    &::before {
                        width: 100%;
                    }
                }
            }
        }
    }
    .hamburger {
        display: block;
        margin-left: auto;
        @media (min-width: 768px) {
            display: none;
        }
    }
}
</style>
