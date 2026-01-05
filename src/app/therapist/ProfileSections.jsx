'use client'
import { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Star,
  Video,
  ThumbsUp,
  Heart,
  CheckSquare,
} from 'lucide-react'

const ProfileSections = () => {
  const info =
    'Dr. Robert Downey is a senior consultant psychiatrist with extensive experience in treating anxiety, depression, mood disorders, and stress-related conditions. She follows an empathetic, evidence-based approach focused on long-term emotional well-being and patient safety.'

  const [readMore, setReadMore] = useState(false)

  const description = readMore
    ? info
    : info.length > 200
      ? info.slice(0, 200) + '...'
      : info

  return (
    <div className='flex max-w-5xl flex-col gap-6 w-full'>

      <Card className='border-none shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl font-semibold text-slate-800'>
            About
          </CardTitle>

          <p className='text-slate-600 leading-relaxed mt-2 text-base'>
            {description}
            <span
              onClick={() => setReadMore(!readMore)}
              className='text-blue-600 cursor-pointer ml-1 hover:underline font-medium'
            >
              {readMore ? 'Show less' : 'See more'}
            </span>
          </p>
        </CardHeader>

        <CardContent>
          <div className='flex flex-wrap gap-2'>
            <span className='inline-flex items-center gap-1.5 bg-teal-600 text-white text-sm px-3 py-1.5 rounded-full'>
              <Star className='w-4 h-4 fill-current' />
              Highly Rated
            </span>

            <span className='inline-flex items-center gap-1.5 border border-slate-300 text-slate-700 text-sm px-3 py-1.5 rounded-full'>
              <Video className='w-4 h-4' />
              Online Sessions
            </span>

            <span className='inline-flex items-center gap-1.5 border border-blue-200 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full'>
              <ThumbsUp className='w-4 h-4' />
              Verified Reviews
            </span>

            <span className='inline-flex items-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-700 text-sm px-3 py-1.5 rounded-full'>
              <Heart className='w-4 h-4' />
              Insurance Accepted
            </span>

            <span className='inline-flex items-center gap-1.5 border border-slate-300 bg-slate-50 text-slate-700 text-sm px-3 py-1.5 rounded-full'>
              <Star className='w-4 h-4 text-slate-400' />
              15+ Years Experience
            </span>
          </div>
        </CardContent>
      </Card>

      <Card className='border-none shadow-xl'>
        <CardHeader>
          <CardTitle className='text-2xl font-semibold text-slate-800'>
            Experience & Credentials
          </CardTitle>
        </CardHeader>

        <CardContent className='space-y-6'>
          <p className='text-slate-600 leading-relaxed'>
            Dr. Downey has practiced psychiatry for over 15 years, helping individuals
            manage emotional challenges through structured therapy, medication
            management, and lifestyle guidance.
          </p>

          <div className='bg-slate-50 rounded-lg p-4 flex items-start gap-3'>
            <div className='bg-teal-100 p-2 rounded-lg'>
              <CheckSquare className='w-6 h-6 text-teal-600' />
            </div>
            <div>
              <div className='font-semibold text-slate-800'>
                Verified Credentials
              </div>
              <div className='text-slate-600 text-sm'>
                Member — British Association for Counselling & Psychotherapy
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}

export default ProfileSections
