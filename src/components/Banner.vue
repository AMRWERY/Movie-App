<template>
    <router-link to="/movie/tt3896198">
        <section class="
        relative
        bg-[url(https://justfields.com/storage/projects/7M5rV059/one-piece.jpg)]
        bg-cover bg-center bg-no-repeat">
            <div
                class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l">
            </div>

            <div class="relative mx-auto max-w-full px-4 py-32 sm:px-6 lg:flex lg:px-8 screen">
                <div class="max-w- ltr:sm:text-left rtl:sm:text-right">
                    <div class="detail">
                        <h3>One Piece</h3>
                        <p>
                            One Piece is a Japanese manga series written and illustrated by
                            Eiichiro Oda. It has been serialized in Shueisha's shōnen manga
                            magazine Weekly Shōnen Jump since July 1997, with its individual
                            chapters compiled into 104 tankōbon volumes as of November 2022.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </router-link>
</template>
  
<script setup>

</script>

<style scoped>
.screen {
    height: 500px;
}

.detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 16px;
    z-index: 1;
}

h3 {
    color: #fff;
    margin-bottom: 16px;
}

p {
    color: #fff;
}
</style>