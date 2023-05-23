import Image from 'next/image'

export default function Types() {
  return (
    <div className="h-fit text-center mb-[10rem] mt-[7rem] transition-all ease-in duration-300">
      <div>
        <p
          id="types"
          className="font-Roboto text-center text-[1rem] md:text-[1rem] xl:text-[3rem] transition-all ease-in duration-300"
        >
          Jenis Batik
        </p>
      </div>
      <p>Batik dapat dibedakan menjadi beberapa macam</p>
      <h2 className="font-bold">Berdasarkan Teknik</h2>

      <li>Batik Tulis</li>
      <p>
        Batik Tulis adalah kain yang dihias dengan tekstur dan corak batik menggunakan
        tangan. Pembuatan batik jenis ini memakan waktu kurang lebih 2-3 bulan.
      </p>
      <Image 
      src={'/batik-bali.jpg'}
      width={500}
      height={500}
      alt='batik-tulis'
      />
      <li>Batik Lukis</li>
      <p>
        Batik Lukis adalah kain yang dihias dengan tekstur dan corak batik yang dibentuk
        dengan cap (biasanya terbuat dari tembaga). Proses pembuatan batik jenis
        ini membutuhkan waktu kurang lebih 2-3 hari.
      </p>
      <li>Batik Cap</li>
      <p>
        Batik Cap adalah proses pembuatan batik dengan cara langsung melukis pada kain
        putih.
      </p>
    </div>
  );
}
