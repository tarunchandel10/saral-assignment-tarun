import InlineSelect from "../ui/InlineSelect";
import { useEffect, useState } from "react";
export default function RewardWithField({
  rewardWith,
  bonusValue,
  setBonusValue,
  rewardEvent,
  tier,
  dispatch,
  setRewardWith,
  openTierModal,
  openExternal,       
  setOpenExternal,    
}) {

const [forceOpen, setForceOpen] = useState(false);

useEffect(() => {
  const handler = () => {
    setForceOpen(true);
  };

  window.addEventListener("open-reward-with", handler);

  return () => {
    window.removeEventListener("open-reward-with", handler);
  };
}, []);
  return (
    <div className="mb-4">
      <label className="text-[#616161] text-sm">
        Reward with <span className="text-red-500">*</span>
      </label>

      <InlineSelect
        openExternal={forceOpen}
        setOpenExternal={setForceOpen}

        placeholder="Select a reward"
        options={[
          { label: "Flat $X bonus", value: "Flat $X bonus" },
          {
            label: "Upgrade Commission Tier",
            value: "Upgrade Commission Tier",
            disabled:
              rewardEvent === "Is Onboarded" ||
              rewardEvent === "Posts X times per Y period",
          },
        ]}

        value={
          rewardWith === "Flat $X bonus" && bonusValue
            ? `Flat $${bonusValue} bonus`
            : rewardWith === "Upgrade Commission Tier" && tier
            ? `Upgrade to ${tier}`
            : rewardWith
        }

        onChange={(val) => {
          dispatch(setRewardWith(val));

          if (val === "Upgrade Commission Tier") {
            dispatch(openTierModal());
          }
        }}

        // 🔥 Input field
        renderExtra={(val) => {
          if (val === "Flat $X bonus" || rewardWith === "Flat $X bonus") {
            return (
              <input
                value={bonusValue}
                onChange={(e) =>
                  setBonusValue(e.target.value.replace(/\D/g, ""))
                }
                placeholder="$ | e.g. 100"
                className="w-full border rounded-lg px-3 py-2 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C530C5]"
              />
            );
          }

          return null;
        }}

        // 🔥 Footer (CLEAN VERSION)
        footer={({ close }) => {
          // ❌ Nothing selected
          if (!rewardWith) return null;

          // ❌ Flat bonus but no value
          if (rewardWith === "Flat $X bonus" && !bonusValue) return null;

          return (
            <>
              <button
                onClick={() => {
                  if (rewardWith === "Flat $X bonus") {
                    setBonusValue("");
                  }
                  close();
                }}
                className="flex-1 px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() => close()}
                className="flex-1 px-4 py-2 text-white rounded-lg bg-[#F68DF6]"
              >
                Save
              </button>
            </>
          );
        }}
      />
    </div>
  );
}