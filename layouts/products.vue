<template>
    <div>
        <header>
            <nav style="margin-top: 40px; margin-bottom: 40px; margin-left: 40px;">
                <NuxtLink to="/">
                    <h1>Xiver</h1>
                </NuxtLink>
            </nav>
        </header>

        <div>
            <slot />
        </div>

        <footer class="footer-menu">
            <h3>Xiver</h3>
            <ul class="list-menu">
                <li>
                    <NuxtLink to="/">Главная</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">О нас</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products">Каталог</NuxtLink>
                </li>
            </ul>
        </footer>
    </div>
</template>
  
<style scoped>
.footer-menu{
    max-width: 100%;
    background-color: white;
    box-shadow: 5px 5px 5px black, -1px 0px 5px black;
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 0;
    margin-top: 40px;
}
a {
    text-decoration: none;
    color: black;
}

li {
    list-style: none;
}

.router-link-exact-active {
    color: #12b488;
}
</style>