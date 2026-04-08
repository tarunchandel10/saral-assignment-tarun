
import MainLayout from "../layouts/MainLayout";

export default function InsightsPage() {
  
  return (
    <MainLayout>
     
          <div className="w-full overflow-hidden">
          <div className="relative rounded-2xl border border-purple-200 p-4 md:p-12 overflow-hidden bg-[url('/home-bg.svg')] bg-cover bg-center pt-6 md:pt-15 pb-10 md:pb-20 dashboard_content w-full">
    
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#f3e8ff_1px,transparent_1px),linear-gradient(90deg,#f3e8ff_1px,transparent_1px)] bg-[size:40px_40px] pb-20" />
    
          {/* Content */}
          <div className="relative z-10 text-center max-w-sm mx-auto">
            
            <h1 className="text-xl md:text-3xl font-semibold text-[#561056]">
              Insights Page
            </h1>
    
            <p className="text-xs md:text-base text-gray-500 mt-2 ">
              Enable gamification to start crafting <br /> your custom reward system.
            </p>
    
            <button
              // onClick={onOpen}
              className="mt-4 md:mt-6 bg-[#C530C5] text-white text-center py-2 rounded-xl w-full text-sm md:text-base"
            >
              Enable Gamification
            </button>
          </div>
    
          {/* Cards */}
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 -mt-8 md:-mt-12 px-4 md:px-5 dashboard_card w-full">
    
            <div className="bg-white border rounded-xl p-4 md:p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
              <div className="size-12 md:size-16 mx-auto mb-3 md:mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
                <img src="/icon-one.png" />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800">
                Reward Your Ambassadors
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Boost campaign performance by setting up rewards for ambassadors
              </p>
            </div>
    
            <div className="bg-white border rounded-xl p-4 md:p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
              <div className="size-12 md:size-16 mx-auto mb-3 md:mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
                <img src="/icon-two.png" />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800">
                Set Milestones
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Set up custom goals for sales, posts, or time-based achievements
              </p>
            </div>
    
            <div className="bg-white border rounded-xl p-4 md:p-6 text-center shadow-sm bg-[url('/card-bg.svg')] bg-cover bg-center">
              <div className="size-12 md:size-16 mx-auto mb-3 md:mb-4 bg-purple-100 flex items-center justify-center rounded-xl">
                <img src="/icon-three.png" />
              </div>
              <h3 className="font-medium text-sm md:text-base text-gray-800">
                Customise Incentives
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Create custom incentives like flat fees, free products, or special commissions.
              </p>
            </div>
    
          </div>
        </div>
        </MainLayout>
  );
}