import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-screen grid place-content-center gap-x-[3vw]'>
      <div>
        <h1 className='text-[clamp(140px,_10vw,_200px)] text-white uppercase font-bold'>Maintance</h1>
        <small className='text-white text-center font-light'>Please try again later</small>
      </div>
      <Link href="/" className='text-white font-normal text-[30px] text-center border-t-2 border-t-[#222] py-[3vw]'>Home</Link>
    </div>
  )
}