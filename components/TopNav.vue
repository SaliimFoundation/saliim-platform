<template>
  <nav class="navbar d-flex justify-content-end bg-transparent py-3" ref="nav">
    <div v-if="!isPhone" class="container navbar-expand d-flex justify-content-end">
      <ul class="navbar-nav">
        <router-link tag="li" class="nav-item" active-class="active" to="/" exact><a class="nav-link font-weight-bold" v-bind:class="[ navStyle == 'light' ? 'text-white' : '' ]">Saliim.org</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="/kontributor" exact><a class="nav-link" v-bind:class="[ navStyle == 'light' ? 'text-white' : '' ]">Kontributor</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="#" exact><a class="nav-link" v-bind:class="[ navStyle == 'light' ? 'text-white' : '' ]">Tentang Yayasan</a></router-link>
        <router-link tag="li" class="nav-item" active-class="active" to="#" exact><a class="nav-link" v-bind:class="[ navStyle == 'light' ? 'text-white' : '' ]">Kontak</a></router-link>
        <li class="nav-item"><button class="btn" v-on:click="$router.push('/donasi')" v-bind:class="[ navStyle == 'light' ? 'btn-white text-green' : 'btn-primary' ]">Donasi</button></li>
      </ul>
    </div>
    <div v-else="" class="container navbar-expand d-flex justify-content-between">
      <router-link tag="a" class="navbar-brand text-green font-weight-bold" active-class="active" to="/" exact v-bind:class="[ navStyle == 'light' ? 'text-white' : '' ]">Saliim.org</router-link>
      <div>
        <button class="btn mr-2" v-bind:class="[ navStyle == 'light' ? 'btn-outline-light text-white' : 'btn-ghost' ]">Donasi</button>
        <span class="fa-stack fa-lg text-green"  v-on:click="phoneMenuShown = true">
          <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-bars fa-stack-1x fa-inverse"></i>
        </span>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showMenuPhone" v-on:click="phoneMenuShown = false" class="pm-container position-absolute" v-bind:style="{ height: windowHeight +'px' }">
        <div class="pm-menu-wrapper position-relative">
          <div class="pm-menu card m-3" v-bind:style="{transform: 'translateY(' + navHeight + 'px)'}">
            <div class="card-body">
              <ul class="navbar-nav flex-column">
                <router-link tag="li" to="/" class="nav-item"><a class="nav-link text-green font-weight-bold">Saliim.org</a></router-link>
                <router-link tag="li" to="/kontributor" class="nav-item"><a class="nav-link text-green font-weight-bold">Kontribusi</a></router-link>
                <router-link tag="li" to="/" class="nav-item"><a class="nav-link text-green font-weight-bold">Tentang Yayasan</a></router-link>
                <router-link tag="li" to="/" class="nav-item"><a class="nav-link text-green font-weight-bold">Kontak</a></router-link>
                <router-link tag="li" to="/donasi" class="nav-item"><a class="nav-link text-green font-weight-bold">Donasi</a></router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
<script>
  if (process.browser) {
    window.globalVar = 'global variable'
  }

  export default {

    data () {
      return {
        windowHeight: 0,
        windowWidth: 0,
        windowScroll: 0,
        txt: '',
        phoneBreakPoint: 576,
        phoneMenuShown: false,
        navHeight: 0
      }
    },
    props: [
      'navStyle'
    ],
    watch: {
      windowWidth: function (width) {
      }
    },

    computed: {
      isPhone () {
        return this.windowWidth < this.phoneBreakPoint
      },
      showMenuPhone () {
        if (this.isPhone && this.phoneMenuShown) {
          return true
        } else {
          return false
        }
      }
    },

    mounted () {
      console.log(this.$el.style)
      let that = this
      that.windowWidth = window.innerWidth
      that.windowHeight = document.body.offsetHeight
      that.navHeight = this.$refs.nav.clientHeight
      this.$nextTick(function () {
        window.addEventListener('resize', function (e) {
          that.windowWidth = window.innerWidth
        })
        window.addEventListener('scroll', function (e) {
          that.windowScroll = window.scrollY
        })
      })
    }
  }
</script>
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
  .text-green {
    color: #38c172;
  }
  .pm-container {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  }
  .pm-menu {

  }

  /*ANIMATION*/

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    -webkit-transform: translateY(-5rem);
    -moz-transform: translateY(-5rem);
    -ms-transform: translateY(-5rem);
    -o-transform: translateY(-5rem);
    transform: translateY(-5rem);
    height: 50px;
  }
</style>
