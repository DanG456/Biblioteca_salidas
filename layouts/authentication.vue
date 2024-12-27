<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <nuxt-link to="/">
                <a class="nav-link active" aria-current="page">Inicio</a>
                </nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <slot></slot>
  </div>
</template>
