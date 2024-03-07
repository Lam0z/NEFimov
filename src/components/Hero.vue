<script setup>
import { ref } from "vue";
import { TELEGRAM } from "@/constants";
const job = ref("");

const printJob = () => {
    const fullJob = "Frontend Developer".split("");
    let count = 0;
    setInterval(() => {
        if (count < fullJob.length) {
            job.value += fullJob[count];
            count++;
        } else {
            clearInterval();
        }
    }, 100);
};
printJob();
</script>
<template>
    <section class="hero d-flex flex-column justify-content-center">
        <div class="container">
            <h2 class="hero__main-subtitle">Hello, I'm Nick Efimov</h2>
            <h1 class="hero__main-title">
                {{ job }}<span class="pulse">|</span>
            </h1>
            <p class="hero__description">
                Я из Подмосковья, работаю веб-разработчиком более 3-х лет. За
                это время успел поработать как в компаниях, так и на фрилансе, в
                качестве HTML-верстальщика / frontend skills
                Frontend-разработчика.
            </p>
            <div class="hero__btns-container">
                <a
                    target="_blank"
                    :href="`${TELEGRAM}`"
                    class="btn btn-success rounded-0 fw-bold"
                >
                    Связаться со мной
                </a>
            </div>
        </div>
        <video class="hero__video-bg" autoplay loop>
            <source src="../assets/video/bg.mp4" type="video/mp4" />
        </video>
    </section>
</template>

<style lang="scss">
@import "../assets/main.scss";
.hero {
    padding-top: 5rem;
    @media (min-width: 768px) {
        margin-top: 0;
        min-height: 100vh;
    }

    position: relative;
    &__video-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        // min-width: 500px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__main-subtitle {
        color: $main-accent;
        font-weight: 700;
        @media (min-width: 768px) {
            font-size: 2.375rem;
            line-height: 4.25rem;
        }
    }

    &__main-title {
        color: $main-title;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 2.625rem;
        @media (min-width: 768px) {
            font-size: 5.5rem;
            line-height: 5.875rem;
            margin-bottom: 2.5rem;
        }
        span {
            color: $main-accent;
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
