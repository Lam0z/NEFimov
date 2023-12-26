<script setup></script>
<template>
    <section class="hero">
        <div class="container">
            <h2 class="hero__main-subtitle">Hello, I'm Nick Efimov</h2>
            <h1 class="hero__main-title">Frontend Developer</h1>
            <p class="hero__description">
                I’m from Singapore and I have been working as a Product Designer
                for more than 7 years. I’ve worked for a Hanziree company Pabloo
                as a Product Designer and Front-end Developer for 3 years.
            </p>
            <div class="hero__btns-container">
                <button type="button" class="btn btn-success rounded-0 fw-bold">
                    Email Me
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@import "../assets/main.scss";
.hero {
    &__main-subtitle {
        color: $main-accent;
        font-weight: 700;
        @media (min-width: 992px) {
            font-size: 2.375rem;
            line-height: 4.25rem;
        }
    }

    &__main-title {
        color: $main-title;
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.625rem;
        @media (min-width: 992px) {
            font-size: 5.5rem;
            line-height: 5.875rem;
            margin-bottom: 2.5rem;
        }
    }

    &__description {
        max-width: 34.375rem;
        margin-bottom: 1.25rem;
        @media (min-width: 992px) {
            margin-bottom: 3.125rem;
        }
    }

    &__btns-container {
    }
}
.btn {
}
.btn-success {
}
.rounded-0 {
}
.fw-bold {
}
</style>
