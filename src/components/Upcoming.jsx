'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SectionCards } from './ui/section-cards'
import data from './data.json'

const Upcoming = () => {

  const currentDate = new Date()

  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedDay, setSelectedDay] = useState(null)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true)
        // const response = await axios.get()
        let response = data
        setAppointments(response.data)
        setError(null)
      } catch (err) {
        console.error('Error fetching appointments:', err)
        setError('Failed to load appointments')
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [])

  const getWeekDays = () => {
    const currentDayIndex = currentDate.getDay()

    const weekStartDate = new Date(currentDate)
    weekStartDate.setDate(currentDate.getDate() - currentDayIndex)

    return dayNames.map((dayName, index) => {
      const iteratedDate = new Date(weekStartDate)
      iteratedDate.setDate(weekStartDate.getDate() + index)
      return {
        dayName,
        date: iteratedDate.getDate(),
        isToday: iteratedDate.toDateString() === currentDate.toDateString(),
        fullDate: iteratedDate
      }
    })
  }

  const weekDays = getWeekDays()

  const handleDay = (day) => {
    setSelectedDay(day)
  }

  let appointmentsToShow = []

  if (selectedDay !== null) {
    const day = String(selectedDay.fullDate.getDate()).padStart(2, '0')
    const month = String(selectedDay.fullDate.getMonth() + 1).padStart(2, '0')
    const year = selectedDay.fullDate.getFullYear()
    const formattedDate = `${day}-${month}-${year}`

    appointmentsToShow = appointments.filter((appointment) =>
      appointment.sessionDate === formattedDate
    )
  }

  return (

    <SectionCards title='Upcoming'>

      <div className='mb-8'>
        <div className='flex justify-between text-lg font-medium text-gray-800'>
          {weekDays.map((day, index) => {
            const isSelected = selectedDay !== null && selectedDay.date === day.date && selectedDay.dayName === day.dayName

            return (
              <div
                key={index}
                className='flex flex-col items-center gap-1 cursor-pointer'
                onClick={() => handleDay(day)}
              >
                <span className={`text-sm ${isSelected
                  ? 'tex-green-500 font-semibold'
                  : day.isToday
                    ? 'text-green-500 font-semibold'
                    : 'text-gray-600'
                  }`}>
                  {day.dayName}
                </span>

                {isSelected ? (
                  <div className='w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full'>
                    {day.date}
                  </div>
                ) : day.isToday ? (
                  <div className='w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full'>
                    {day.date}
                  </div>
                ) : (
                  <span>{day.date}</span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className='space-y-6 mb-8'>

        {loading && (
          <div className='text-center text-gray-500 py-4'>
            Loading appointments...
          </div>
        )}

        {error && (
          <div className='text-center text-red-500 py-4'>
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            {selectedDay !== null && appointmentsToShow.length > 0 && (
              <>
                {appointmentsToShow.map((appointment, index) => (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                      <div className='w-12 h-12 bg-gray-300 rounded-full' />
                      <div>
                        <div className='font-sm text-gray-900'>{appointment.name}</div>
                        <div className='text-xs text-gray-500'>{appointment.type}</div>
                      </div>
                    </div>
                    <div className='text-right'>
                      <div className='font-medium text-gray-900'>12:00</div>
                      <div className='text-sm text-gray-500'>
                        {selectedDay.isToday ? 'Today' : selectedDay.dayName}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {selectedDay !== null && appointmentsToShow.length === 0 && (
              <div className='text-center text-gray-500 py-4'>
                No appointments on this day
              </div>
            )}

            {selectedDay === null && (
              <div className='text-center text-gray-500 py-4'>
                Click on a date to see appointments
              </div>
            )}
          </>
        )}

      </div>

      <div>
        <button className='w-full bg-blue-700 text-white font-medium py-4 rounded-full hover:bg-blue-800 transition'>
          Schedule a new consultation
        </button>
      </div>
    </SectionCards>
  )
}

export default Upcoming
