<template>
  <div>
    <transition name="slide-down" appear>
      <header>
        <top-nav nav-style="light"></top-nav>
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <h1 class="text-light">Berinfaq adalah ibadah</h1>
              <p class="text-light">Mari berinfaq sebagai bentuk ibadah di jalan Allah melalui Saliim untuk memudahkan ummat beribadah melalui teknologi.</p>
            </div>
          </div>
        </div>
      </header>
    </transition>
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-6 offset-4">
            <h3>Menjadi donatur bagi karya developer muslim</h3>
            <p>Saliim tidak mengambil keuntungan dan uang donasi akan sepenuhnya diputar untuk menjadi wakaf produktif dan menjadi manfaat bagi masyarakat luas.</p>
            <p>Kami menyediakan <i>channel</i> donasi melalui <a class="font-weight-bold" href="https://patreon.com" v-bind:style="{color: '#F96854'}">Patreon</a> dan <a class="font-weight-bold" href="https://opencollective.com" v-bind:style="{color: '#7FADF2'}">Open collective</a></p>
            <div class="d-inline-flex align-items-center">
              <a href="#"><img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160"></a>
              <a href="#" class="open-collective media d-inline-flex align-items-center p-1">
                <img src="https://opencollective.com/public/images/oc-logo-icon.svg" width="20">
                <div class="media-body">
                  <span class="">Open collective</span>
                </div>
              </a>
            </div>
            <br><br>
            <p>Di samping itu, Saliim juga tetap menerima donasi melalui transfer antar bank.</p>
            <a href="#" class="banking">Transfer antar bank</a>
          </div>
        </div>
      </div>
    </section>
    <FooterDiv/>
  </div>
</template>
<script>
  import TopNav from '~/components/TopNav.vue'
  import FooterDiv from '~/components/FooterDiv.vue'
  export default {
    components: {
      TopNav, FooterDiv
    },
    data () {
      return {
        docState: 'saved'
      }
    },
    methods: {
    },
    computed: {
    }
  }
</script>
<style scoped>
  header {
    background-color: #38c172;
  }
  .open-collective {
    border: 1px solid #7FADF2;
    width: auto;
    margin-left: 1em;
  }
  .open-collective span {
    color: #7FADF2;
    margin-left: .5em;
    font-size: .9rem;
  }
  a.open-collective:hover {
    text-decoration: none;
  }
  .banking {
    width: auto;
    padding: .8em 1em;
    background: #4A4A4A;
    color: #FAFAFF;
    font-size: .8rem;
  }
  .slide-down-enter-active, .slide-down-leave-active {
    -webkit-transition: all 650ms;
    -moz-transition: all 650ms;
    -ms-transition: all 650ms;
    -o-transition: all 650ms;
    transition: all 650ms;
  }
  .slide-down-enter, .slide-down-leave-to {
    -webkit-transform: translateY(-100%);
    -moz-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: .5;
  }
</style>
