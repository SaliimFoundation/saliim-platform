<template>
  <nav class="navbar d-flex justify-content-end bg-transparent py-3">
    <div class="container navbar-expand d-flex justify-content-end">
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item" active-class="active" to="/" exact><a class="nav-link font-weight-bold">Saliim.org</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/kontributor" exact><a class="nav-link">Kontributor</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="#" exact><a class="nav-link">Tentang Yayasan</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="#" exact><a class="nav-link">Kontak</a></router-link>
        <li class="nav-item"><button class="btn btn-primary">Donasi</button></li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
  .nav-link {
    color: #38C172;
    -webkit-transition: all 250ms;
    -moz-transition: all 250ms;
    -ms-transition: all 250ms;
    -o-transition: all 250ms;
    transition: all 250ms;
  }
  .nav-link:hover {
    color: #1F9D55;
  }
  .nav-item.active a, .nav-item a:hover {
    position: relative;
  }
  .nav-item.active a::after, .nav-item a:hover::after {
    content: '\f069';
    font-family: 'FontAwesome';
    position: absolute;
    font-size: .5rem;
    top: 0;
    right: 0;
    -webkit-transform: translate(10%, -10%);
    -moz-transform: translate(10%, -10%);
    -ms-transform: translate(10%, -10%);
    -o-transform: translate(10%, -10%);
    transform: translate(10%, -10%);
  }
  .nav-item.active a::after {
    color: #F16B6F;
  }
</style>
