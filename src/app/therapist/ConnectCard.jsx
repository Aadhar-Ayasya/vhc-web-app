import React from 'react'
import { Video, DollarSign, ShieldAlert } from 'lucide-react'

const ConnectCard = () => {
  return (
    <div className='flex w-fit max-w-3xl h-full'>
      <div className='flex flex-col bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full'>

        <h2 className='text-xl font-semibold text-slate-800 mb-4'>
          Connect with Doctor
        </h2>

        <div className='flex flex-col gap-6'>

          <div className='flex flex-col gap-3'>
            <div className='flex justify-center items-center px-4 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 transition text-white font-medium cursor-pointer'>
              Book Appointment
            </div>

            <div className='flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-300 hover:bg-slate-50 cursor-pointer'>
              <span className='text-slate-500'>✉️</span>
              <span className='text-blue-600 hover:underline'>
                Send Enquiry
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-3 text-slate-600 text-sm'>
            <div className='flex items-center gap-2'>
              <Video className='w-5 h-5 text-teal-600' />
              Available Online
            </div>
            <div className='flex items-center gap-2'>
              <DollarSign className='w-5 h-5 text-teal-600' />
              ₹70 per session
            </div>
          </div>

        </div>

        <div className='flex items-center gap-2 text-slate-500 mt-6 pt-4 border-t text-sm'>
          <ShieldAlert className='w-5 h-5 text-teal-600' />
          Free 30-minute initial consultation
        </div>

      </div>
    </div>
  )
}

export default ConnectCard
