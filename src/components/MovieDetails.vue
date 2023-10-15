<template>
    <div class="">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                <div class="p-8 sm:p-10 lg:flex-auto mt-20">
                    <p class="ml-auto leading-7 text-md font-semibold text-blue-600">{{ movie.Year }}</p>
                    <div class="flex">
                        <h3 class="text-2xl mt-1 font-bold tracking-tight text-red-400 title">{{ movie.Title }}</h3>
                        <p class="ml-4 leading-7 mt-1 text-lg font-semibold text-yellow-600">( {{ movie.imdbRating
                        }} )</p>
                        <p class="leading-7 text-lg font-semibold text-blue-400 ml-auto mt-1">{{ movie.Genre }} ( {{
                            movie.Rated
                        }} )</p>
                    </div>
                    <p class="mt-4 leading-7 text-lg font-semibold text-green-600">Languages: <span class="text-white">{{
                        movie.Language }}</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">Type: <span class="text-white">{{
                        movie.totalSeasons
                    }} Seasons</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">Seasons: <span class="text-white">{{
                        movie.Type }}</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">Country: <span class="text-white">{{
                        movie.Country
                    }}</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">IMDB Votes: <span class="text-white">{{
                        movie.imdbVotes }}</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">Release Date: <span class="text-white">{{
                        movie.Released }}</span></p>
                    <p class="mt-2 leading-7 text-md font-semibold text-green-600">Actors: <span
                            class="text-white underline decoration-solid">{{
                                movie.Actors }}</span></p>
                    <div class="mt-10 mb-6 flex items-center gap-x-4">
                        <h4 class="flex-none text-md font-semibold leading-6 text-indigo-600">Description:</h4>
                    </div>
                    <span class="font-semibold">{{ movie.Plot }}</span>
                </div>
                <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div class="rounded-2xl py-10 lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <img :src="movie.Poster">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import env from "@/env.js";

const movie = ref({});
const route = useRoute();

onBeforeMount(() => {
    fetch(
        `https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
    )
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            movie.value = data;
        });
});
</script>

<style scoped>
.title {
    font-family: 'Courgette', cursive;
}
</style>