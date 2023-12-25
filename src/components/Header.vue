<script setup></script>
<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 col-xl-6 d-flex align-items-center">
                    <a href="#" class="header__logo">NEfimov <span>.</span></a>
                </div>
                <div class="col-12 col-md-8 col-xl-6">
                    <ul
                        class="header__nav list-unstyled d-md-flex justify-content-md-between align-items-center"
                    >
                        <li class="header__nav-item"><a href="#">Home</a></li>
                        <li class="header__nav-item">
                            <a href="#">Services</a>
                        </li>
                        <li class="header__nav-item"><a href="#">Work</a></li>
                        <li class="header__nav-item">
                            <a href="#">About us</a>
                        </li>
                        <li class="header__nav-item"><a href="#">Blog</a></li>
                        <li class="header__nav-item">
                            <button
                                type="button"
                                class="btn btn-outline-success rounded-0 fw-bold"
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    padding: 1.125rem 0;
    &__logo {
        span {
            color: var(--main-accent);
        }
        @media (min-width: 768px) {
            font-size: 1.5rem;
            font-weight: 700;
            line-height: 1.75rem;
        }
    }
    &__nav {
        &-item {
            // color: var(--main-title);
            &:hover {
                cursor: pointer;
            }
        }
    }
}
</style>
