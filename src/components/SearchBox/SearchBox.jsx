import React from 'react'
import { useTranslation } from 'react-i18next';
import tire from "../../assets/images/SOne_index_bg_searchtype.jpg"
import searchBtn from "../../assets/images/SOne_index_search.png"

export default function SearchBox() {
  const { t, i18n } = useTranslation();

  const searchItems = [
    { title: t("tireFace"), subTitle: t("width"), itemPlaceholder: t("selectTireFace"), },
    { title: t("series"), subTitle: t("heightRatio"), itemPlaceholder: t("selectSeries"), },
    { title: t("wheelRims"), subTitle: t("diameters"), itemPlaceholder: t("selectWheelRims"), },
  ]

  return (
    <div className="text-white overflow-hidden lg:h-1/2 h-72 bg-black/85 border border-orange-500 w-full lg:w-1/2">
      <div className="bg-orange-500 text-xl">{t("searchTire")}</div>
      <div className='flex w-full relative'>
        <img src={tire} className="w-full lg:w-auto h-auto lg:h-full object-cover" />
        <div className="w-full flex items-end">
          <div className="absolute md:w-[60%] sm:w-[80%] w-[60%] right-0 top-0 mx-2 flex flex-col">
            {searchItems.map(({ title, subTitle, itemPlaceholder }, index) => {
              return (<div key={index} className="mb-1">
                <p className='text-xl font-semibold'>{title}</p>
                <p className='text-xs'>{subTitle}</p>
                <select name={index} className='bg-white text-sm focus:outline-none border border-orange-500 text-black w-full' >
                  <option value="1" label={`--${itemPlaceholder}--`}></option>
                </select>
              </div>)
            })}
            <div className="w-full flex justify-center">
              <img src={searchBtn} className="mt-1 cursor-pointer hover:scale-[1.05]" />
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
