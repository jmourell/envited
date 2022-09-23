
import { ImCalendar, ImLocation } from "react-icons/im"
import EventIcon from './EventIcon'
import EventRow from './EventRow'
export default function EventCard() {
  return (<div class="max-w-md overflow-hidden ">
    <img class="w-full" src="/Birthday cake.png" alt="Birthday cake" />
    <div class="">
      <p class="font-bold  mb-4 text-primary-darkblue text-6xl">Birthday bash</p>
      <p class="text-gray-600 text-l">
        Hosted by <span class="font-bold">Elysia</span>
      </p>
    </div>
    <EventRow icon={<EventIcon><ImCalendar /></EventIcon>} header={"18 August 6:00PM"} subtext={<p>{"to "} <span class="font-bold">{"19 August 1:00PM"}</span> {"UTC +10"}</p>} />
    <EventRow icon={<EventIcon><ImLocation /></EventIcon>} header={"Street name"} subtext={"Suburb, State, Postcode"} />


  </div >)
}