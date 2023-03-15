<template>
  <div>
      <header class="header-menu">
          <nav class="nav-menu">
              <NuxtLink to="/">
                  <h1>Xiver</h1>
              </NuxtLink>
              <v-btn>sfdg</v-btn>
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
          </nav>
      </header>

      <div>
          <slot />
      </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
}

.router-link-exact-active {
  color: #12b488;
}</style>