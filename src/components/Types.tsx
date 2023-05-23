import Image from "next/image";

export default function Types() {
  return (
    <div id="types">
      <div
        className="flex flex-col h-fit text-center mb-[10rem] mt-[7rem] transition-all ease-in duration-300"
        id="container-types"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-Roboto text-center text-[1rem] md:text-[1rem] xl:text-[3rem] transition-all ease-in duration-300 py-10">
            Jenis Batik
          </p>
          <h2 className="text-3xl pb-5">Batik dapat dibedakan menjadi beberapa macam</h2>
          <h2 className="font-bold text-2xl">Berdasarkan Teknik</h2>
          <div
            id="container-batik-tulis"
            className="flex flex-col items-center justify-center py-2 w-[70%]"
          >
            <li className="list-none font-bold py-2 text-xl">Batik Tulis</li>
            <p className="py-2 font-Roboto">
              Batik Tulis adalah kain yang dihias dengan tekstur dan corak batik
              menggunakan tangan. Pembuatan batik jenis ini memakan waktu kurang
              lebih 2-3 bulan.
            </p>
            <Image
              src={"/batik-tulis.jpg"}
              width={300}
              height={100}
              alt="batik-tulis"
            />
          </div>

          <div
            id="container-batik-lukis"
            className="flex flex-col items-center justify-center py-2  pt-10 w-[70%]"
          >
            <li className="list-none font-bold py-2 text-xl">Batik Lukis</li>
            <p className="py-2 font-Roboto">
              Batik Lukis adalah kain yang dihias dengan tekstur dan corak batik
              yang dibentuk dengan cap (biasanya terbuat dari tembaga). Proses
              pembuatan batik jenis ini membutuhkan waktu kurang lebih 2-3 hari.
            </p>
            <Image
              src={"/batik-lukis.jpg"}
              width={300}
              height={100}
              alt="batik-lukis"
            />
          </div>

          <div
            id="container-batik-cap"
            className="flex flex-col items-center justify-center py-2 pt-10 w-[70%]"
          >
            <li className="list-none font-bold py-2 text-xl">Batik Cap</li>
            <p className="py-2 font-Roboto">
              Batik Cap adalah proses pembuatan batik dengan cara langsung
              melukis pada kain putih.
            </p>
            <Image
              src={"/Batik_cap.jpg"}
              width={300}
              height={100}
              alt="batik-cap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
