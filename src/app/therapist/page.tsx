import React from 'react'
import InfoCard from './InfoCard'
import ConnectCard from './ConnectCard'
import ProfileSections from './ProfileSections'


function Page() {
  return (
    <div className="w-full bg-slate-50  min-h-screen m-0 p-0">

        <div className="max-w-5xl m-auto mt-2 flex justify-center gap-10 ">
          <InfoCard />

          <ConnectCard />
        </div>

        <div className="w-full mt-8 flex justify-center">
          <ProfileSections />
        </div>
    </div>
  )
}

export default Page
