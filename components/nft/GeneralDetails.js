import { AiFillHeart } from 'react-icons/ai'
import { MdRefresh } from 'react-icons/md'
import { RiShareBoxLine } from 'react-icons/ri'
import { FiMoreVertical } from 'react-icons/fi'
import { GiShare } from 'react-icons/gi'
import Link from 'next/link'

const style = {
    wrapper: `flex text-black font-display`,
    infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
    accent: `text-[#2081e2] font-medium text-2xl cursor-pointer`,
    accent2: `text-[#2081e2]  cursor-pointer`,
    nftTitle: `text-5xl font-extrabold `,
    otherInfo: `flex`,
    ownedBy: `text-[#8a939b] mr-4 `,
    likes: `flex items-center text-[#000]`,
    likeIcon: `mr-1 text-xl text-[#ff0000]`,
    actionButtonsContainer: `w-44 text-black`,
    actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
    actionButton: `my-2`,
    divider: `border-r-2`,
}

const GeneralDetails = ({ selectedNft }) => {
    return (
        <div className={style.wrapper}>
            <div className={style.infoContainer}>
                <Link href="/collections/0xCb1161AEf049b237b160A76BbF8CF27962dDe28a">
                    <div className={style.accent}>Hape Club</div>
                    
                </Link>
                <div className={style.nftTitle}>Hape Club {selectedNft?.name}</div>
                <div className={style.otherInfo}>
                    <div className={style.ownedBy}>
                        Owned by <span className={style.accent2}>psd_artist</span>
                    </div>
                    <div className={style.likes}>
                        <AiFillHeart className={style.likeIcon} /> 1.5K favorites
                    </div>
                </div>
            </div>
            <div className={style.actionButtonsContainer}>
                <div className={style.actionButtons}>
                    <div className={`${style.actionButton} ml-2`}>
                        <MdRefresh />
                    </div>
                    <div className={style.divider} />
                    <div className={style.actionButton}>
                        <RiShareBoxLine />
                    </div>
                    <div className={style.divider} />
                    <div className={style.actionButton}>
                        <GiShare />
                    </div>
                    <div className={style.divider} />
                    <div className={`${style.actionButton} mr-2`}>
                        <FiMoreVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralDetails