import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        {/* Add your favicon link below */}
        <link rel="icon" href="/cards.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-[6rem]">
        <div>
          <Link href="https://api.whatsapp.com/send?phone=60162019881&text=Hi%2C%20wassup%20DegenKingMy" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/whatsapp.png"
                height={250}
                width={250}
                className='w-[75px]'
              />
            </a>
          </Link>
        </div>

        <div>
          <Link href="/lucky" className='font-[500] text-[1.2rem] border-2 rounded-md p-2'>
            Lucky Draw
          </Link>
        </div>
      </main>
    </>
  )
}
