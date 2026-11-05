import MyCalendar from '/components/Calendar'
import { Suspense } from 'react'

export default function Home() {

  return (
    <div className="grid grid-cols-10">
      <div className="">
        viewselector here
      </div>
      <div className="col-span-8 grid grid-rows-5">
      <Suspense fallback="Loading">
        <MyCalendar/>
      </Suspense>
      </div>
      <div className="">
      </div>
    </div>
  );
}
