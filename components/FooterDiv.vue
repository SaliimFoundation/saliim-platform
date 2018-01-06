<template>
  <footer>
    <div class="primary">
      <div class="container">
        <div class="row py-4">
          <div class="col-12 col-md-4">
            <h5 class="text-light pb-3">Saliim Foundation</h5>
            <p class="text-light small">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="text-light pb-3">Silaturahmi</h5>
            <address class="text-light small">
              Yayasan Saliim Foundation<br>
              Jln. Gegerkalong Girang Bandung, 50211<br>
              Jawa Barat, Indonesia
            </address>
          </div>
          <div class="col-12 col-md-4">
            <h5 class="text-light pb-3">Sosial Media</h5>
            <div class="d-flex align-items-center">
              <ul class="list-inline d-inline-block">
                <li class="list-inline-item"><a class="text-light" href="#"><i class="fab fa-github-square fa-2x"></i></a></li>
                <li class="list-inline-item"><a class="text-light" href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
                <li class="list-inline-item"><a class="text-light" href="#"><i class="fab fa-facebook-square fa-2x"></i></a></li>
                <li class="list-inline-item"><a class="text-light" href="#"><i class="fab fa-twitter-square fa-2x"></i></a></li>
              </ul>
              <button class="btn btn-sm btn-ghost border-white text-white">Mari Berdonasi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="secondary py-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="text-center text-light text-md-left"><i class="fab fa-creative-commons"></i> lisensi terbuka dari <strong>Saliim.org</strong></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
  hr {
    border-color: #ffffff;
  }
  footer .primary {
    background: #3c3c3c;
  }
  footer .secondary{
    background: #4a4a4a;
  }
  .list-inline {
    margin: 0;
  }
  .list-inline-item:not(:last-child), .list-inline-item:last-child {
    margin-right: 20px;
  }
  .secondary p {
    margin: 0;
  }
</style>
