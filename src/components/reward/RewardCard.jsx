export default function RewardCard({ data }) {
  if (!data) return null;

  return (
    <div className="mt-6 flex border-t">
    <div className="mt-6 w-[400px] rounded-2xl bg-white shadow-lg border border-gray-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
      🎉
    </div>
    <h3 className="text-lg font-semibold text-gray-800">
      Reward Created
    </h3>
  </div>

  {/* Divider */}
  <div className="h-px bg-gray-100 mb-4"></div>

  {/* Content */}
  <div className="space-y-3 text-sm">
    
    <div className="flex justify-between">
      <span className="text-gray-500">Event</span>
      <span className="font-medium text-gray-800">{data.event}</span>
    </div>

    <div className="flex justify-between">
      <span className="text-gray-500">Reward</span>
      <span className="font-medium text-gray-800">{data.reward}</span>
    </div>

    {data.date && (
      <div className="flex justify-between">
        <span className="text-gray-500">End Date</span>
        <span className="font-medium text-gray-800">{data.date}</span>
      </div>
    )}

  </div>

</div>
</div>
  );
}