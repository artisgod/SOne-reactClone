import React from 'react'
import { useTranslation } from "react-i18next";

import tip from "../../assets/images/SOne_index_tips1.png"
import pic66 from "../../assets/images/SOne_index_pic66.png"
import pic99 from "../../assets/images/SOne_index_pic99.png"
import go from "../../assets/images/SOne_index_btgo.jpg"
import call from "../../assets/images/SOne_index_call.png"

export default function SafetyTips() {

  const { t } = useTranslation();

  return (
    <div className="flex sm:w-fit w-full flex-col">
      <div className="flex">
        <img src={tip} alt="" />
        <div className="flex w-full bg-black/85 mb-2 border-r border-y border-orange-500 flex-col">
          <p className='text-xl text-orange-500 whitespace-nowrap'>Safety Tips</p>
          <div className="w-full"><img src={pic66} className="w-3 h-auto" /></div>
          <p className='text-white px-2 text-center text-xs whitespace-pre-line'>{t("quote")}</p>
          <div className="w-full pr-2 flex justify-end"><img src={pic99} className="w-3 h-auto" /></div>
        </div>
      </div>
      <div className="flex w-full items-center gap-1 my-2 justify-between">
        <p className="whitespace-nowrap">{t("sign")}</p>
        <div className="flex w-full sm:max-w-40">
          <input
            type="text"
            className="border w-full focus:outline-none border-orange-500 p-1"
            placeholder={t("email")}
          />
          <img
            className="cursor-pointer border border-l-0 border-orange-500 w-10"
            src={go}
          />
        </div>
      </div>
      <img src={call} alt="call" className='py-2 mt-2 border-t border-dashed border-orange-500' />
    </div>
  )
}
