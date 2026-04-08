import DatePicker from "../ui/DatePicker";

export default function TimeBoundSection({
  isTimeBound,
  setIsTimeBound,
  selectedDate,
  setSelectedDate,
  showCalendar,
  setShowCalendar,
}) {
  return (
    <>
      <div
        onClick={() => {
          setIsTimeBound(!isTimeBound);
          if (isTimeBound) setShowCalendar(false);
        }}
        className="flex justify-between cursor-pointer gap-3 my-3 md:my-4"
      >
        <div className="flex-1">
            <p className="text-xs md:text-sm">Make the reward time bound</p>
            <span className="text-[#616161] text-xs">Choose an end date to stop this reward automatically.</span>
        </div>
        

        <div className={`w-11 h-6 rounded-full p-1 flex-shrink-0 ${isTimeBound ? "bg-[#C530C5]" : "bg-gray-300"}`}>
          <div className={`bg-white w-4 h-4 rounded-full ${isTimeBound ? "translate-x-5" : ""}`} />
        </div>
      </div>

      {isTimeBound && (
        <div className="mt-2 md:mt-3 relative">
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            className="border px-2 md:px-3 py-2 rounded-lg cursor-pointer flex gap-2 calendar text-xs md:text-sm"
          >
            <img src="/calendar.svg" className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
            <span className="truncate">
              {selectedDate ? new Date(selectedDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }) : "Select End Date"}
            </span>
          </div>

          {showCalendar && (
            <DatePicker
              value={selectedDate}
              onChange={(date) => {
                setSelectedDate(date);
                setShowCalendar(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}