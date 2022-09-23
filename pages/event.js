import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import EventCard from '../components/EventCard'

export default function Event() {
  return (<div class="bg-secondary-purple-light md:container md:mx-auto flex flex-col center px-60 p-10">
    <EventCard />
  </div>)
}