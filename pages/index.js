import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div class="bg-secondary-purple-light md:container md:mx-auto flex flex-col center px-60 p-10">
      <div className='text-primary-darkblue font-serif font-bold text-6xl text-center'>
        Imagine if <div className="text-transparent bg-clip-text text-center bg-gradient-to-r from-primary-purple to-primary-pink">Snapchat</div> had events

      </div>
      <div class="font-helevicta text-lg text-gray-600 text-center">
        Easily host and share events with your friends across any social media.
      </div>
      <div class=" flex flex-col items-center justify-center md:p-12 lg:p-20 s:p-4 rounded-md space-y-10" >
        <img src="/Landing page image.svg" alt="An image on the landing page" />
        <Link href="/create">
          <button class="rounded-md p-6 w-full  bg-gradient-to-r from-primary-purple to-primary-pink br-4 text-center font-bold text-gray-100">🎉Create my event</button>
        </Link>
      </div>


    </div >



  )
}
