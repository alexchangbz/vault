import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-[3rem] w-[100%]">
        <div>
          <Link href="https://api.whatsapp.com/send?phone=60162019881&text=Hi%2C%20wassup%20DegenKingMy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <span className='text-[#fff] text-[1.6rem] bg-gradient-to-tr from-[#128C7E80] to-[#25D36680] block h-[180px] w-[300px] font-[500] flex justify-center items-center rounded-md'>
                <span className='p-3 bg-[#33333370] rounded-md'>
                  Contact Us
                </span>
              </span>
            </a>
          </Link>
        </div>

        <div>
          <Link href="/preorder" className='text-[#fff] text-[1.6rem] bg-[url("/images/paradox_rift.png")] bg-center bg-cover block h-[180px] w-[300px] font-[500] flex justify-center items-center rounded-md'>
            <span className='p-3 bg-[#33333370] rounded-md'>
              Pre-Order
            </span>
          </Link>
        </div>

        <div>
          <Link href="/shop" className='text-[#fff] text-[1.6rem] bg-[url("/images/detective_pikachu.jpg")] bg-center bg-cover block h-[180px] w-[300px] font-[500] flex justify-center items-center rounded-md'>
            <span className='p-3 bg-[#33333370] rounded-md'>
              Shopping
            </span>
          </Link>
        </div>

        <div>
          <Link href="/lucky" className='text-[#fff] text-[1.6rem] bg-[url("/images/pokemon_bg.jpg")] bg-center bg-cover block h-[180px] w-[300px] font-[500] flex justify-center items-center rounded-md'>
            <span className='p-3 bg-[#33333370] rounded-md'>
              Lucky Draw
            </span>
          </Link>
        </div>
      </main>
    </>
  )
}
