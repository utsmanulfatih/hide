<script>
document.addEventListener("DOMContentLoaded", function() {
  var isMobile = window.innerWidth <= 768;
  var hasRequiredKeywords = /facebook.*traffic.*ads.*ID/i.test(window.location.href);

  // Tambahkan syarat untuk lokasi Indonesia
  var isIndonesia = false;

  // Panggil layanan GeoIP untuk mendapatkan informasi lokasi
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      // Periksa apakah lokasi pengguna berada di Indonesia
      isIndonesia = data.country === 'ID';

      // Lakukan tindakan sesuai dengan kondisi
      if (isMobile && hasRequiredKeywords && isIndonesia) {
        // Menghilangkan elemen dengan ID "sidebar"
        var sidebarElement = document.getElementById("sidebar");
        if (sidebarElement) {
          sidebarElement.style.display = "none";
        }

        // Menghilangkan elemen dengan class ".crp_related.crp-text-only"
        var crpRelatedElements = document.querySelectorAll(".crp_related.crp-text-only");
        crpRelatedElements.forEach(function(element) {
          element.style.display = "none";
        });

        // Menampilkan elemen dengan class "tombol" jika ada
        var buttonElement = document.querySelector(".tombol");
        if (buttonElement) {
          buttonElement.style.display = "block";
        }

        // Sembunyikan elemen dengan class "artikel" jika ada
        var artikelElement = document.querySelector(".artikel");
        if (artikelElement) {
          artikelElement.style.display = "none";
        }

        // Menghilangkan elemen dengan class ".yarpp-template-list"
        var yarppTemplateListElements = document.querySelectorAll(".yarpp-template-list");
        yarppTemplateListElements.forEach(function(element) {
          element.style.display = "none";
        });
      }
    })
    .catch(error => {
      console.error('Error fetching location data:', error);
    });
});
</script>