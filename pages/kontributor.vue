<template>
  <div>
    <header>
      <TopNav/>
      <div class="container py-5">
        <div class="row align-items-center">
          <transition name="slide-down" appear>
            <div class="col-12 col-md-6">
              <h1>Kontributor Saliim</h1>
              <p><i>Hall of Fame</i> para kontributor yang telah berpartisipasi pada setiap program Saliim. <a href="#">Mari bergabung</a> dalam proyek yang sedang Saliim kerjakan.</p>
            </div>
          </transition>
        </div>
      </div>
    </header>
    <section>
      <div class="container">
        <div class="row py-5 project">
          <div class="col-12 col-md-3">
            <h4>Saliim Audio Book</h4>
            <p>Aplikasi buku digital yang menawarkan buku-buku Islami berkualitas dengan rekaman suara jernih.</p>
            <a v-on:click="hide()" class="btn btn-sm btn-block btn-gradient text-muted"><i class="fab fa-google-play"></i> Download untuk Android</a>
            <a href="#" class="btn btn-sm btn-block btn-gradient text-muted"><i class="fab fa-app-store-ios"></i> Download untuk iPhone</a>
          </div>
          <div class="col-12 col-md-9 mt-4 mt-md-5">
            <div class="row">
              <div class="media col-6 col-md-3 pb-4" ref="contributors1">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="media col-6 col-md-3 pb-4" ref="contributors2">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="media col-6 col-md-3 pb-4" ref="contributors3">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="media col-6 col-md-3 pb-4" ref="contributors4">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="media col-6 col-md-3 pb-4" ref="contributors5">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="media col-6 col-md-3 pb-4" ref="contributors6">
                <img src="https://randomuser.me/api/portraits/women/64.jpg" class="rounded-circle mr-3" width="50">
                <div class="media-body">
                  <h6>Tracy Medina</h6>
                  <span class="small">Android Developer</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a href="#"><i class="fab fa-github"></i></a></li>
                    <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            Something
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
      TopNav,
      FooterDiv
    },
    data () {
      return {
        conts: ''
      }
    },
    beforeMount () {
      console.log(this.$refs)
    },
    mounted () {
      // this.conts = this.$refs.contributors1
    },
    methods: {
      hide () {
        console.log(JSON.stringify(this.$refs))
        // console.log(this.$refs.contributors1.style.display)
      }
    }
  }
</script>
<style scoped>
  .media img {
    transition: all 500ms ease-out;
  }
  .media:hover img {
    transform: rotateY(360deg);
  }
  .project + .project {
    border-top: 1px solid #f1f1f1;
  }
  a, li a {
    color: #38C172;
  }
  .btn-gradient {
    background: linear-gradient(#ffffff, #fafaff);
    box-shadow: none;
    border: 1px solid #fafaff;
  }
</style>
