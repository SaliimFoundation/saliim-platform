<template>
  <div>
    <transition name="slide-down" appear>
      <header>
        <TopNav/>
        <div class="container hero">
          <div class="row">
            <div class="col-12 py-5">
              <div class="hero-body col-12 col-md-6 text-center text-md-left">
                <h1>Bersama <span>Saliim Foundation</span>,<br>beramal dalam teknologi</h1>
                <p class="hero-p">Mari berkontribusi positif terhadap sekitar dan ummat melalui pengembangan teknologi yang membantu kemudahan beribadah bagi sesama muslim.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </transition>
    <section class="benefit py-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="text-center mb-5 font-weight-bold">Dengan menjadi kontributor, kamu akan ...</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 text-center">
            <img src="http://via.placeholder.com/350x250" class="img-fluid">
            <h3 class="text-center pt-4 pb-3 font-weight-bold">Mendapat Amal Baik</h3>
            <p class="text-center">Insya allah produk yang dikembangkan akan berdampak bagi kegiatan ibadah umat muslim. Kamu insya allah akan mendapatkan pahala jariyah yang telah dijanjikan Allah SWT.</p>
          </div>
          <div class="col-12 col-md-4 text-center">
            <img src="http://via.placeholder.com/350x250" class="img-fluid">
            <h3 class="text-center pt-4 pb-3 font-weight-bold">Mendapat sahabat dalam kebaikan</h3>
            <p class="text-center">Dengan niat dan motivasi yang sama, yaitu menyebarkan amal baik dan manfaat, insya allah kita semua akan saling tolong menolong dalam kebaikan di jalan Islam.</p>
          </div>
          <div class="col-12 col-md-4 text-center">
            <img src="http://via.placeholder.com/350x250" class="img-fluid">
            <h3 class="text-center pt-4 pb-3 font-weight-bold">Tercantum sebagai kontributor</h3>
            <p class="text-center">Sekecil apa pun kontribusi kamu, akan dicantumkan dalam kredit repository Saliim. Insya Allah dapat membantu melancarkan rezeki kamu. Amin.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="project py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-11">
            <div class="project-card card py-5">
              <div class="row">
                <div class="col-12 col-md-4 d-flex align-items-end px-auto pt-5 pt-md-0 pl-md-5 pr-md-0 py-md-auto">
                  <img src="~/assets/img/saliim-audio-book-iphone.png" class="img-fluid">
                </div>
                <div class="col-12 col-md-8">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-12 col-md-6">
                        <h5 class="text-muted">Proyek Berjalan</h5>
                        <h2 class="font-weight-bold">Saliim Audio Book</h2>
                        <span class="category">Mobile app</span><span>&nbsp;&bullet;&nbsp;</span><span class="contributors">12 kontributor</span>
                      </div>
                      <div class="col-12 col-md-6 d-flex align-items-end">
                        <div class="w-100 text-left text-md-right">
                          <p class="text-right"><i class="fab fa-android"></i><span>&nbsp;&bullet;&nbsp;</span><i class="fab fa-apple"></i></p>
                          <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <span class="font-weight-bold">25% selesai</span><span> &mdash; rekaman audio</span>
                        </div>
                      </div>
                    </div>
                    <hr>
                    <div class="row py-1">
                      <div class="col-12">
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-12">
                        <button class="btn btn-primary btn-block">Sumbang kontribusi</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="open-source">
      <div class="container py-5">
        <div class="row align-items-center">
          <div class="col-12 col-md-5 p-5">
            <img src="~/assets/img/web.svg" class="img-fluid p-5">
          </div>
          <div class="col-12 col-md-7 py-5">
            <h2 class="text-light font-weight-bold">Berbagi <code>&lt;kode&sol;&gt;</code>, berbagi manfaat</h2>
            <p class="text-white">Saliim sebagai yayasan tidak mengejar keuntungan duniawi dan fokus pada manfaat yang diberikan kepada masyarakat. Semua produk yang Saliim hasilkan akan bersifat open source untuk memudahkan semua orang mendapatkan manfaat terbaik tanpa ada kewajiban membayar.</p>
            <button class="btn btn-ghost text-white border-white"><i class="fab fa-github"></i> GitHub Saliim</button>
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
  }
}
</script>
<style scoped>
  header {
    background-color: #f1f1f1;
  }
  .hero-body {
  }
  .hero-body h1 {
    color: #596A73;
    line-height: 120%;
  }
  .hero-body h1 span {
    color: #38C172;
    font-size: inherit;
    line-height: 120%;
  }
  .hero-body .hero-p {
    margin: 2.2em 0;
    color: #9BABB4;
    line-height: 1.8em;
  }
  .benefit {
    background: linear-gradient(#f1f1f1 0%, #ffffff 35%);
  }
  .project .container {
    height: 100%;
  }
  .bg-placeholder {
    height: 100%;
  }
  .bg-primary {
    height: 100%;
  }
  .project-card {
    width: 100%;
    height: auto;
  }
  .benefit h3 {
    height: 100px;
  }
  .open-source {
    background-color: #3c3c3c;
  }
  code {
    background: #fafaff;
    display: inline-block;
    padding: 4px;
    border-radius: 12px;
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
  @media (max-width: 767px) {
    .bg-placeholder {
      height: 250px;
    }
  }
</style>
