import Image from "next/image";

export default function Types() {
  return (
    <div id="types">
      <div
        className="flex flex-col h-fit text-center transition-all ease-in duration-300 py-12"
        id="container-types"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-Roboto text-center text-[1rem] md:text-[1rem] xl:text-[3rem] transition-all ease-in duration-300 py-10">
            Jenis Batik
          </p>

          <div>
            <h2 className="flex flex-col font-bold text-2xl pb-5">
              Berdasarkan Teknik
            </h2>
            <div
              id="container-batik-tulis"
              className="flex items-center justify-center space-x-14 py-10 px-2"
            >
              <div className="w-[40%]">
                <li className="list-none font-bold py-2 text-xl text-center">
                  Batik Tulis
                </li>
                <p className="py-2 font-Roboto text-left text-lg">
                  Batik tulis atau batik tradisional merupakan salah satu varian
                  batik yang proses pembuatannya dilakukan secara manual dengan
                  menggunakan tangan. Caranya adalah dengan menerapkan lilin
                  menggunakan alat bernama canting pada kain yang sudah memiliki
                  pola. Untuk membuat satu kain batik tulis, diperlukan tingkat
                  ketelatenan dan kesabaran yang ekstra karena sedikit kesalahan
                  saja dapat mempengaruhi hasil akhirnya. Inilah yang menjadikan
                  alasan mengapa harga batik tulis jauh lebih tinggi
                  dibandingkan dengan jenis batik lainnya. Batik Tulis adalah
                  kain yang dihias dengan tekstur dan corak batik menggunakan
                  tangan. Pembuatan batik jenis ini memakan waktu kurang lebih
                  2-3 bulan.
                </p>
              </div>
              <Image
                src={"/batik-tulis.jpg"}
                width={200}
                height={100}
                alt="batik-tulis"
                className="flex"
              />
            </div>

            <div
              id="container-batik-tulis"
              className="flex items-center justify-center space-x-14 py-10 px-2"
            >
              <Image
                src={"/batik-cap.jpg"}
                width={200}
                height={100}
                alt="batik-cap"
                className="flex"
              />
              <div className="w-[40%]">
                <li className="list-none font-bold py-2 text-xl text-center ">
                  Batik Cap
                </li>
                <p className="py-2 font-Roboto text-left text-lg">
                  Batik cap atau batik stempel merupakan jenis batik yang
                  menggunakan cap atau stempel yang terbuat dari tembaga.
                  Seperti halnya batik tulis, batik cap juga menggunakan malam
                  atau lilin sebagai tinta. Pada bagian tembaga cap tersebut,
                  terdapat motif batik yang diinginkan, dan pelukisan motif
                  dilakukan pada canting cap. Dengan demikian, berbagai macam
                  gambar dan motif dapat dihasilkan. Meskipun batik cap memiliki
                  keunggulan dalam mempercepat proses pembuatan, sayangnya batik
                  cap dianggap kurang memiliki nilai seni karena semua motifnya
                  seragam. Oleh karena itu, harga batik cap lebih rendah
                  daripada batik tulis, terutama karena dapat diproduksi secara
                  massal.
                </p>
              </div>
            </div>

            <div
              id="container-batik-tulis"
              className="flex items-center justify-center space-x-14 py-10 px-2"
            >
              <div className="w-[40%]">
                <li className="list-none font-bold py-2 text-xl text-center">
                  Batik Lukis
                </li>
                <p className="py-2 font-Roboto text-left text-lg">
                  Batik Lukis adalah hasil dari teknik melukis langsung di atas
                  kain menggunakan kuas atau canting tanpa mengikuti suatu pola
                  tertentu. Batik Lukis menghasilkan corak dan warna yang bebas,
                  tidak terikat pada model batik tradisional. Proses pembuatan
                  Batik Lukis membutuhkan waktu yang lebih lama, karena selain
                  memerlukan kecermatan dan ketekunan, juga membutuhkan
                  kreativitas dari pembuatnya. Karena itu, harga Batik Lukis
                  cenderung lebih tinggi dibandingkan dengan jenis batik
                  lainnya.
                </p>
              </div>
              <Image
                src={"/batik-lukis.jpg"}
                width={300}
                height={100}
                alt="batik-lukis"
                className="flex"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
