
import MainLayout from "../layouts/MainLayout";

export default function ApplicationsPage() {
  
  return (
    <MainLayout>
 
      <div className="relative rounded-2xl border border-purple-200 p-12 overflow-hidden bg-[url('/home-bg.svg')] bg-cover bg-center pt-15 pb-20 dashboard_content">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#f3e8ff_1px,transparent_1px),linear-gradient(90deg,#f3e8ff_1px,transparent_1px)] bg-[size:40px_40px] pb-20" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-sm mx-auto">
        
        <h1 className="text-3xl font-semibold text-[#561056]">
          Applications Page
        </h1>

        <p className="text-gray-500 mt-2 ">
          Enable gamification to start crafting <br /> your custom reward system.
        </p>

        <button
          // onClick={onOpen}
          className="mt-6 bg-[#C530C5] text-white text-center py-2 rounded-xl w-full"
        >
          Enable Gamification
        </button>
      </div>

      {/* Cards */}
      
    </div>
    <div className="relative z-10  grid grid-cols-3 gap-6 -mt-12 pl-5 pr-5 dashboard_card">

        <div className="bg-white border rounded-xl p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
          <div className="size-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
            <img src="/icon-one.png" />
          </div>
          <h3 className="font-medium text-gray-800">
            Reward Your Ambassadors
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Boost campaign performance by setting up rewards for ambassadors
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
          <div className="size-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
            <img src="/icon-two.png" />
          </div>
          <h3 className="font-medium text-gray-800">
            Set Milestones
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Set up custom goals for sales, posts, or time-based achievements
          </p>
        </div>

        <div className="bg-white border rounded-xl p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
          <div className="size-16 mx-auto mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
            <img src="/icon-three.png" />
          </div>
          <h3 className="font-medium text-gray-800">
            Customise Incentives
          </h3>
          <p className="text-sm text-gray-500 mt-2">
            Create custom incentives like flat fees, free products, or special commissions.
          </p>
        </div>

      </div>
    </MainLayout>
  );
}