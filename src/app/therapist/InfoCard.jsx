import React from 'react'
import { MapPin } from 'lucide-react'

const InfoCard = () => {

  return (
    <div className='w-fit flex shadow-xl rounded-2xl p-1'>

      <div className='flex bg-white rounded-2xl p-6 max-w-3xl'>

        <div className='relative mr-6 shrink-0'>
          <img
            src='https://images.unsplash.com/photo-1550831107-1553da8c8464'
            alt='Dr. Ayesha Khan - Psychiatrist'
            className='w-44 h-44 object-cover rounded-xl'
          />

          <span className='absolute bottom-2 left-2 bg-teal-600 text-white text-xs px-3 py-1 rounded-full shadow-md'>
            ⭐ Highly Recommended
          </span>
        </div>

        <div className='flex flex-col'>

          <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-semibold text-slate-800'>
              Dr. Robert Downey
            </h1>
            <span className='text-teal-600 text-lg'>✔</span>
          </div>

          <p className='text-blue-600 text-sm mt-1'>
            Consultant Psychiatrist
          </p>

          <div className='flex items-center gap-2 text-slate-500 mt-2 text-sm'>
            <MapPin className='w-4 h-4 text-teal-600' />
            <span>New Delhi, India</span>
          </div>

          <p className='text-slate-600 mt-4 text-sm leading-relaxed italic'>
            ‘Specializing in anxiety, depression, and stress-related disorders,
            providing compassionate, evidence-based mental healthcare.’
          </p>

          <div className='flex flex-wrap gap-2 mt-4'>
            <span className='px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs'>
              Anxiety & Depression
            </span>
            <span className='px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs'>
              Cognitive Behavioral Therapy
            </span>
            <span className='px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs'>
              Stress Management
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoCard
