<template>
  <div>
    <header>
      <top-nav nav-style="light"></top-nav>
      <div class="container py-5">
        <div class="row align-items-center">
          <transition name="slide-down" appear>
            <div class="col-12 col-md-6">
              <h1 class="text-light">Berinfaq adalah ibadah</h1>
              <p class="text-light">Mari berinfaq sebagai bentuk ibadah di jalan Allah melalui Saliim untuk memudahkan ummat beribadah melalui teknologi.</p>
            </div>
          </transition>
        </div>
      </div>
    </header>
    <section>
      <div class="container py-5">
        <div class="row">
          <div class="col-12 col-md-6 offset-md-4">
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
</style>
