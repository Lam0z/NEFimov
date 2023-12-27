<script setup></script>
<template>
    <section class="contact">
        <div class="container">
            <div class="contact__top">
                <div class="section-title">
                    <div class="section-title__bottom">
                        <p class="section-title__main-text">
                            Есть на примете какой-нибудь проект?
                        </p>
                        <p class="section-title__main-subtext">
                            Не стесняйтесь связаться со мной или просто
                            поздороваться!
                        </p>
                    </div>
                </div>
                <button class="btn-success btn rounded-0 fw-bold">
                    Связаться со мной
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import "../assets/main.scss";
.contact {
    background: $main-bg-second;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.625rem;
        background: $main-accent;
        @media (min-width: 768px) {
            bottom: 0;
            left: 0;

            width: 0.625rem;
            height: 100%;
        }
    }
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
}
.container {
}
.section-title {
    // margin-bottom: 0;
    @media (min-width: 992px) {
        margin-bottom: 0;
    }
    &__bottom {
    }

    &__main-text {
    }
}
</style>
