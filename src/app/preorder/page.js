import Image from "next/image"
import Link from "next/link"

const PreOrder = () => {
  return (
    <div className='bg-[url("/images/bg_preorder.jpeg")] min-h-screen bg-cover flex flex-col items-center justify-center py-10 px-5'>
        <div className="bg-[#fff] rounded-lg min-h-[50vh] md:w-[50%] w-[90%] shadow-lg flex flex-col items-center p-10">
          <div className="flex justify-center">
            <Image 
              src={`/images/SV4.jpg`}
              className="object-cover rounded-lg"
              width={350}
              height={350}
            />
          </div>
          <div className="text-black text-center">
            <h1>Pre-Order Pokemon TCG Paradox Rift</h1>
            <h2>Release Date: November 3, 2023</h2>
            <p className="font-bold text-sm">
              RM630.00 per Booster Box
            </p>
          </div>
        </div>

        <div className="bg-[#fff] rounded-lg md:w-[50%] w-[90%] shadow-lg flex-col items-center p-8 text-black mt-5">
            <p className="mt-5 text-[12px] text-left font-bold">
              {`How to Pre-Order?`}
            </p>

            <p className="text-[12px] text-left">
              {`1) A deposit of RM300 per Booster Box is required for confirmation.`} <br/>
              {`2) Price do not include shipping.`} <br/>
              {`3) Item will be shipped on date of release.`} <br/>
              {`4) Pick-up at Petaling Jaya area available.`} <br/>
              {`5) Remaining balance must be settled within 5 days of release date, fail to do so will result in your deposit being forfeited.`} <br/>
            </p>

            <p className="mt-5 text-[12px] text-left font-bold">
              {`Cara untuk membuat pre-order?`}
            </p>

            <p className="text-[12px] text-left">
              {`1) Deposit sebanyak RM300 setiap Booster Box diperlukan untuk pengesahan.`} <br/>
              {`2) Harga tidak termasuk caj penghantaran.`} <br/>
              {`3) Item akan dihantar pada tarikh release date produk ini.`} <br/>
              {`4) Pick up item di kawasan Petaling Jaya ada.`} <br/>
              {`5) Baki yang bayaran mesti dijelaskan dalam masa 5 hari dari tarikh release date, jika tidak, deposit anda akan rugi.`} 
            </p>

            <div className="mt-5 flex justify-center">
              <Link 
                  href={`https://api.whatsapp.com/send?phone=60162019881&text=Hi, I want to buy, RM`}
                  legacyBehavior
              >
                  <a  className="bg-emerald-800 text-white px-5 py-2 rounded-md" target="_blank" rel="noopener noreferrer">
                      Pre-order Sekarang!
                  </a>
              </Link>
            </div>
        </div>
       
    </div>
  )
}

export default PreOrder