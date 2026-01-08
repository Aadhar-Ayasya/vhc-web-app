"use client";
import { useState, useEffect, useRef } from "react";
import { SectionCards } from "./ui/section-cards";
import data from "./data.json";

const Upcoming = () => {
  const currentDate = new Date();
  const ref = useRef();
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        // const response = await axios.get()
        let response = data;
        setAppointments(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        setError("Failed to load appointments");
      } finally {
        setLoading(false);
      }
    };
    ref.current.click();
    fetchAppointments();
  }, []);

  const getWeekDays = () => {
    const currentDayIndex = currentDate.getDay();

    const weekStartDate = new Date(currentDate);
    weekStartDate.setDate(currentDate.getDate() - currentDayIndex);

    return dayNames.map((dayName, index) => {
      const iteratedDate = new Date(weekStartDate);
      iteratedDate.setDate(weekStartDate.getDate() + index);
      return {
        dayName,
        date: iteratedDate.getDate(),
        isToday: iteratedDate.toDateString() === currentDate.toDateString(),
        fullDate: iteratedDate,
      };
    });
  };

  const weekDays = getWeekDays();

  const handleDay = (day) => {
    setSelectedDay(day);
  };

  let appointmentsToShow = [];

  if (selectedDay !== null) {
    const day = String(selectedDay.fullDate.getDate()).padStart(2, "0");
    const month = String(selectedDay.fullDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDay.fullDate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;

    appointmentsToShow = appointments.filter(
      (appointment) => appointment.sessionDate === formattedDate
    );
  }

  return (
    <SectionCards classname="min-w-100" title="Upcoming">
      <div className="yoyo mb-8">
        <div className="flex justify-between text-lg font-medium text-gray-800">
          {weekDays.map((day, index) => {
            const isSelected =
              selectedDay !== null &&
              selectedDay.date === day.date &&
              selectedDay.dayName === day.dayName;

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() => handleDay(day)}
              >
                <span
                  className={`text-sm ${
                    isSelected
                      ? "text-blue-500 font-semibold"
                      : day.isToday
                      ? "text-green-500 font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  {day.dayName}
                </span>

                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                    isSelected
                      ? "bg-linear-to-t from-sky-200 to-blue-400"
                      : day.isToday
                      ? "bg-linear-to-t from-green-200 to-green-400"
                      : "text-gray-800 hover:bg-gray-100"
                  }`}
                  ref={day.isToday ? ref : null}
                >
                  {day.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6 mb-8 h-40 overflow-scroll">
        {loading && (
          <div className="text-center text-gray-500 py-4">
            Loading appointments...
          </div>
        )}

        {error && <div className="text-center text-red-500 py-4">{error}</div>}

        {!loading && !error && (
          <>
            {selectedDay !== null && appointmentsToShow.length > 0 && (
              <>
                {appointmentsToShow.map((appointment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full" />
                      <div>
                        <div className="font-sm text-gray-900">
                          {appointment.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {appointment.type}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">12:00</div>
                      <div className="text-sm text-gray-500">
                        {selectedDay.isToday ? "Today" : selectedDay.dayName}
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {selectedDay !== null && appointmentsToShow.length === 0 && (
              <div className="text-center text-gray-500 py-4">
                No appointments on this day
              </div>
            )}

            {selectedDay === null && (
              <div className="text-center text-gray-500 py-4">
                Click on a date to see appointments
              </div>
            )}
          </>
        )}
      </div>

      <div>
        <button className="w-full text-white text-lg py-4 rounded-full transition-all bg-linear-to-t from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700">
          Schedule a new consultation
        </button>
      </div>
    </SectionCards>
  );
};

export default Upcoming;
