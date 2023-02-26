import { CgArrowsExchangeV } from 'react-icons/cg'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import { useState } from 'react'
import { dummyEvents } from '../../static/dummyEvents.js'
import EventItem from './itemActivity/EventItem'

const style = {
    wrapper: `w-full mt-8 border border-[#d8d8d8] rounded-xl overflow-hidden font-display`,
    title: `text-black px-6 py-4 border-b border-[#d8d8d8] flex items-center`,
    titleLeft: `flex-1 flex items-center text-xl font-bold`,
    titleIcon: `text-3xl mr-2`,
    titleRight: `text-xl`,
    filter: `flex items-center border border-[#d8d8d8] mx-4 my-6 px-3 py-4 rounded-xl text-[#d8d8d8] `,
    filterTitle: `flex-1 `,
    tableHeader: `flex w-full text-black bg-white border-t border-[#d8d8d8] mt-8 px-4 py-1`,
    eventItem: `flex px-4`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#2081e2]`,
    activityTable:` bg-[#fafafa] pt-2`
}

const ItemActivity = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <div className={style.wrapper}>
            <div className={style.title} onClick={() => setToggle(!toggle)}>
                <div className={style.titleLeft}>
                    <span className={style.titleIcon}>
                        <CgArrowsExchangeV />
                    </span>
                    Item Activity
                </div>
                <div className={style.titleRight}>
                    {toggle ? <AiOutlineUp /> : <AiOutlineDown />}
                </div>
            </div>
            {toggle && (
                <div className={style.activityTable}>
                    <div className={style.filter}>
                        <div className={style.filterTitle}>Filter</div>
                        <div className={style.filterIcon}>
                            {' '}
                            <AiOutlineDown />{' '}
                        </div>
                    </div>
                    <div className={style.tableHeader}>
                        <div className={`${style.tableHeaderElement} flex-[2]`}>Event</div>
                        <div className={`${style.tableHeaderElement} flex-[2]`}>Price</div>
                        <div className={`${style.tableHeaderElement} flex-[3]`}>From</div>
                        <div className={`${style.tableHeaderElement} flex-[3]`}>To</div>
                        <div className={`${style.tableHeaderElement} flex-[2]`}>Date</div>
                    </div>
                    {dummyEvents.map((event, id) => (
                        <EventItem key={id} event={event} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ItemActivity