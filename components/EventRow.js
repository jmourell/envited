
export default function EventRow({ header, subtext, icon, children }) {
  return (
    <div class="flex flex-row w-full flex-no-wrap justify-center items-center ">
      {icon}
      <div class="flex-1 p-5">
        <p class="text-primary-darkblue font-bold text-l" >{header}</p>
        <p class="text-gray-600 text-sm" >{subtext}</p>
      </div>
      <div class="flex-none"> &gt; </div>
    </div>
  )
}