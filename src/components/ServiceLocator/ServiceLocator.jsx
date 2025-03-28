import React from 'react'
import { useTranslation } from 'react-i18next';
import searchBtn from "../../assets/images/SOne_index_search.png"

export default function ServiceLocator() {

  const { t } = useTranslation();

  const searchItems = [
    { title: t("province"), subTitle: t("selectProvince") },
    { title: t("district"), subTitle: t("selectDistrict"), },
    { title: t("road"), subTitle: t("selectRoad"), },
  ]

  return (
    <div className="text-white w-full lg:h-full sm:w-fit">
      <div className="bg-orange-500 text-xl p-1 whitespace-nowrap">{t("nearService")}</div>
      <div className='flex w-ful border bg-black/85 border-orange-500'>
        <div className="w-full flex items-end">
          <div className="w-full m-2 gap-2 flex justify-end flex-col">
            {searchItems.map(({ title, subTitle }, index) => {
              return (<div key={index} className="flex justify-end my-1 gap-1">
                <p className='text-xl whitespace-nowrap font-semibold'>{title}</p>
                <select name={index} className='bg-white text-sm focus:outline-none border border-orange-500 text-black w-40' >
                  <option value="1" label={`--${subTitle}--`}></option>
                </select>
              </div>)
            })}
            <p className='text-center text-orange-500'>{t("note")} : {t("detail")}</p>
            <div className="w-full flex justify-center">
              <img src={searchBtn} className="mt-1 cursor-pointer hover:scale-[1.05]" />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
