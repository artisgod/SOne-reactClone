import React from 'react'
import SearchBox from '../../components/SearchBox/SearchBox'
import Banner from '../../components/Banner/Banner'
import Catagories from '../../components/Catagories/Catagories'
import ServiceLocator from '../../components/ServiceLocator/ServiceLocator'
import NewsEvents from '../../components/NewsEvents/NewsEvents'
import SafetyTips from "../../components/SafetyTips/SafetyTips"

export default function ProductServicesPage() {
    return (
        <>
            <div className="flex md:items-between justify-center h-full w-full items-center md:flex-row flex-col md:gap-2 gap-4 mb-4 lg:mb-0">
                <SearchBox />
                <Banner />
            </div>
            <Catagories />
            <div className="lg:flex hidden gap-2 justify-center flex-col lg:flex-row">
                <ServiceLocator />
                <NewsEvents />
                <SafetyTips />
            </div>
            <div className="lg:hidden w-full flex gap-2 justify-center my-4 lg:my-0 flex-col lg:flex-row mb-4">
                <div className="flex sm:flex-row flex-col w-full gap-2 mb-2 justify-center">
                    <ServiceLocator />
                    <SafetyTips />
                </div>
                <NewsEvents />
            </div>
        </>
    )
}
