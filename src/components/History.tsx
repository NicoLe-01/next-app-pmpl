import Image from "next/image";

export default function History() {
  return (
    <div
      className="h-fit text-center transition-all ease-in duration-300 py-20"
      id="history"
    >
      <div className="flex flex-col space-y-10">
        <p className="flex justify-center items-center font-Roboto text-center text-[1rem] md:text-[1rem] xl:text-[3rem] transition-all ease-in duration-300">
          Sejarah Batik
        </p>

        <div className="flex">
          <div className="flex flex-row justify-center items-center space-x-10 py-10">
            <p className="text-left px-8 w-[50%] text-lg bg-[#ECE5C7] py-10 rounded-2xl shadow-2xl">
              <span className="font-semibold text-xl text-left"> Batik </span>{" "}
              adalah teknik melukis kain menggunakan malam yang diterapkan pada
              seluruh permukaan kain. Asal-usulnya berasal dari Jawa, Indonesia,
              dan telah ada selama berabad-abad. Kata &quot;batik&quot; berasal
              dari kata Jawa &quot;ambatik&quot; yang berarti &quot;tulisan
              dengan malam&quot;. Kain batik tertua yang diketahui ditemukan di
              Mesir pada abad ke-4 M, tetapi belum pasti apakah kain tersebut
              dibuat di Indonesia atau tidak. Batik mencapai puncak keunggulan
              artistik dan teknisnya di Jawa pada abad ke-19, pada masa
              pemerintahan Sultan Hamengkubuwono III. Pada saat itu, desain
              batik menjadi semakin rumit, menggunakan pewarna alami dan
              berbagai teknik pengaplikasian malam, menciptakan gaya khas Jawa.
              Setelah Jawa dianeksasi oleh Belanda pada awal abad ke-20, batik
              menjadi produk ekspor yang populer. Belanda memperkenalkan desain
              dan skema warna baru, sehingga batik menjadi simbol identitas
              Indonesia dan kebanggaan nasional. Sampai saat ini, batik tetap
              menjadi bagian penting dari budaya Indonesia dan popularitasnya
              telah menyebar ke seluruh dunia.
            </p>
            <div className="bg-white">
              <Image
                src="/batik-bali.jpg"
                width={500}
                height={500}
                alt="batik-bali"
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center space-x-10 py-5">
          <div className="">
            <Image
              src="/batik2.jpg"
              width={500}
              height={500}
              alt="batik-bali"
              className="shadow-2xl rounded-2xl"
            />
          </div>
          <p className="px-8 w-[50%] py-8 text-lg text-left rounded-lg bg-[#ECE5C7] shadow-2xl">
            Teknik pewarnaan kain dengan menggunakan malam atau lilin disebut
            batik. Batik telah dikenal sejak abad ke-4 SM di Mesir. Di Asia,
            teknik serupa batik juga digunakan di Tiongkok, India, dan Jepang.
            Di Indonesia, batik diyakini sudah ada sejak zaman Majapahit dan
            populer pada abad ke-18 atau ke-19. Asal usul batik di Jawa tidak
            jelas, mungkin dari India atau daerah lain di Indonesia. Pada abad
            ke-13, batik Jawa diekspor ke berbagai wilayah. Pada abad ke-19,
            batik dikenal di Eropa melalui buku History of Java karya Sir Thomas
            Stamford Raffles. Sekarang, batik terus berkembang di seluruh
            Indonesia dan juga internasional.
          </p>
        </div>
      </div>
    </div>
  );
}
