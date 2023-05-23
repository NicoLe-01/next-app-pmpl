import Image from "next/image";

export default function History() {
  return (
    <div className="h-fit text-center mb-[10rem] mt-[7rem] transition-all ease-in duration-300">
      <div id="titleText">
        <p
          id="history"
          className="flex justify-center items-center font-Roboto text-center text-[1rem] md:text-[1rem] xl:text-[3rem] transition-all ease-in duration-300"
        >
          Sejarah Batik
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center w-[70%]">
          Batik adalah teknik pewarnaan dengan menggunakan malam yang
          diaplikasikan pada seluruh kain. Awalnya, batik berasal dari Jawa,
          Indonesia, dan telah dipraktikkan selama berabad-abad. Kata &quot;
          batik &quot; berasal dari kata Jawa &quot; ambatik &quot;, yang
          berarti &quot; tulisan malam.&quot; Kain batik tertua yang diketahui
          ditemukan di Mesir dan berasal dari abad ke-4 M, meskipun tidak jelas
          apakah kain tersebut dibuat di Indonesia atau tidak. Batik mencapai
          puncak keunggulan artistik dan teknisnya di Jawa pada abad ke-19, pada
          masa pemerintahan Sultan Hamengkubuwono III. Pada periode ini, desain
          batik menjadi lebih rumit, dan penggunaan pewarna alami serta beragam
          teknik malam menciptakan gaya Jawa yang khas. Setelah Jawa dianeksasi
          oleh Belanda pada awal abad ke-20, batik menjadi produk ekspor yang
          populer. Belanda memperkenalkan desain dan skema warna baru, dan batik
          menjadi simbol identitas Indonesia dan sumber kebanggaan nasional.
          Saat ini, batik masih merupakan bagian penting dari budaya Indonesia,
          dan popularitasnya telah menyebar ke seluruh dunia.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-center w-[70%]">
          Seni pewarnaan kain dengan teknik perintang pewarnaan menggunakan
          malam atau lilin adalah salah satu bentuk seni kuno. Ditemukan bukti
          teknik ini telah dikenal sejak abad ke-4 SM di Mesir, dengan penemuan
          kain pembungkus mumi yang dilapisi malam untuk membentuk pola. Di
          Asia, teknik serupa batik juga diterapkan di Tiongkok, India, dan
          Jepang. Di Afrika, teknik yang mirip dengan batik dikenal oleh
          beberapa suku di Nigeria dan Senegal.
          <br />
          <br />
          Di Indonesia, batik dipercaya sudah ada sejak zaman Majapahit, dan
          menjadi populer pada akhir abad ke-18 atau awal abad ke-19. Asal usul
          batik di Jawa sendiri tidak tercatat secara jelas. Terdapat pendapat
          bahwa teknik batik kemungkinan diperkenalkan dari India atau Srilangka
          pada abad ke-6 atau ke-7. Namun, ada juga pendapat bahwa tradisi batik
          berasal dari daerah seperti Toraja, Flores, Halmahera, dan Papua yang
          memiliki tradisi kuno membuat batik.
          <br />
          <br />
          Pada abad ke-13, batik dari Jawa telah diekspor ke berbagai wilayah
          seperti kepulauan Karimata, Siam, dan Mosul. Legenda dalam literatur
          Melayu abad ke-17, Sulalatus Salatin, juga menyebutkan kisah tentang
          batik. Pada abad ke-19, batik mulai dikenal di Eropa melalui buku
          History of Java karya Sir Thomas Stamford Raffles.
          <br />
          <br />
          Dengan adanya industrialisasi dan globalisasi, muncul jenis batik baru
          seperti batik cap dan batik cetak yang menggunakan teknik otomatisasi.
          Sementara itu, batik tradisional yang dibuat dengan teknik tulisan
          tangan menggunakan canting dan malam disebut batik tulis. Batik juga
          telah berkembang di berbagai tempat di Indonesia di luar Jawa, bahkan
          hingga ke mancanegara.
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Image
          src="/batik-bali.jpg"
          width={500}
          height={500}
          alt="batik-bali"
        />
      </div>
    </div>
  );
}
