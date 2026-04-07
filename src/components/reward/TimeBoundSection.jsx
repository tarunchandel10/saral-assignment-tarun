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
        className="flex justify-between cursor-pointer"
      >
        <div className="">
            <p className="text-sm">Make the reward time bound</p>
            <span className="text-[#616161] text-xs">Choose an end date to stop this reward automatically.</span>
        </div>
        

        <div className={`w-11 h-6 rounded-full p-1 ${isTimeBound ? "bg-purple-500" : "bg-gray-300"}`}>
          <div className={`bg-white w-4 h-4 rounded-full ${isTimeBound ? "translate-x-5" : ""}`} />
        </div>
      </div>

      {isTimeBound && (
        <div className="mt-3 relative">
          <div
            onClick={() => setShowCalendar(!showCalendar)}
            className="border px-3 py-2 rounded-lg cursor-pointer flex gap-2 calendar"
          >
            <img src="/calendar.svg" className="w-5 h-5" />
            {selectedDate ? new Date(selectedDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }) : "Select End Date"}
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