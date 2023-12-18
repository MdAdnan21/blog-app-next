import Images from '@/components/common/Images'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
   
      <div className='data'>
    <Link href="/posts"> <h1>Here is Post Data</h1></Link>
      </div>
    </div>
  )
}
