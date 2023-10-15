<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" v-on:submit.prevent="searchMovies()">
            <div class="relative mt-2">
                <div class="flex">
                    <input v-model="search" type="text" name="company" id="company" autocomplete="organization"
                        placeholder="What are you looking for?"
                        class="block w-full bg-slate-200 rounded-lg border-0 px-3.5 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mx-2" />
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3">
                        <i class="fas fa-search text-gray-400 mr-2"></i>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="movie in movies" :key="movie.imdbID" class="group relative">
                <router-link :to="'/movie/' + movie.imdbID">
                    <div
                        class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img :src="movie.Poster" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-white">
                                <span aria-hidden="true" class="absolute inset-0" />
                                {{ movie.Title }}
                            </h3>
                            <p class="mt-1 text-md text-blue-500">{{ movie.Type }}</p>
                        </div>
                        <p class="text-md font-medium text-green-600">{{ movie.Year }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";
import env from "@/env.js";

const search = ref("");
const movies = ref([]);

const searchMovies = () => {
    if (search.value != "") {
        fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
            .then((response) => response.json())
            .then((data) => {
                movies.value = data.Search;
                search.value = "";
            });
    }
};
</script>