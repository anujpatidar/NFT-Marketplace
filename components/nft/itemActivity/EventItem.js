import { BsFillCartFill } from 'react-icons/bs'

const style = {
    eventItem: `flex px-4 text-[#606060] py-5 font-display font-medium border-t border-[#d8d8d8]`,
    event: `flex items-center`,
    eventIcon: `mr-2 text-xl`,
    eventName: `text-lg`,
    eventPrice: `flex items-center`,
    eventPriceValue: `text-lg`,
    ethLogo: `h-5 mr-2`,
    accent: `text-[#2081e2]`,
}

const EventItem = ({ event }) => {
    return (
        <div className={style.eventItem}>
            <div className={`${style.event} flex-[2]`}>
                <div className={style.eventIcon}>
                    <BsFillCartFill />
                </div>
                <div className={style.eventName}>Sale</div>
            </div>
            <div className={`${style.eventPrice} flex-[2]`}>
                <img
                    src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
                    alt="eth"
                    className={style.ethLogo}
                />
                <div className={style.eventPriceValue}>{event.price}</div>
            </div>
            <div className={`${style.accent} flex-[3]`}>{event.from}</div>
            <div className={`${style.accent} flex-[3]`}>{event.to}</div>
            <div className={`${style.accent} flex-[2]`}>{event.date}</div>
        </div>
    )
}

export default EventItem