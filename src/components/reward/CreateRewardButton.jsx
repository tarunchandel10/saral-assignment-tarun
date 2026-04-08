export default function CreateRewardButton({
  isFormValid,
  isBasicValid,
  isTimeBound,
  selectedDate,
  onClick,
}) {
  return (
    <div className="relative group flex-1">
      <button
        disabled={!isFormValid}
        onClick={onClick}
        className={`w-full px-3 md:px-5 py-2 text-white rounded-lg text-sm md:text-base transition-colors ${
          isFormValid ? "bg-[#F68DF6] hover:bg-[#E615D5]" : "bg-[#F68DF6] cursor-not-allowed"
        }`}
      >
        Create Reward
      </button>

      {!isFormValid && (
        <div className="absolute w-max bottom-full mb-2 left-1/2 -translate-x-1/2 
          bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 z-40 whitespace-nowrap">
          {!isBasicValid
            ? "Choose a reward trigger and a reward to continue"
            : isTimeBound && !selectedDate
            ? "Choose reward end date to continue"
            : ""}
        </div>
      )}
    </div>
  );
}