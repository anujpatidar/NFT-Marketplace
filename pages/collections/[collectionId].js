import Link from 'next/link'
import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import NFTCard from '../../components/NFTCard'
import { useRouter } from 'next/router'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { client } from '../../lib/sanityClient.js'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'

const style = {
  bannerImageContainer: `h-[50vh] w-screen overflow-hidden flex justify-center items-center`,
  bannerImage: `w-full mt-20 object-cover`,
  overlayb: `h-40 w-full absolute opacity-85 bg-gradient-to-b from-black to-`,
  infoContainer: `w-screen  px-16`,
  midRow: `w-full flex  text-black`,
  endRow: `w-full flex justify-end text-black`,
  profileImg: `w-40 h-40 object-cover rounded-3xl border-4 border-[#fff] mt-[-7rem]`,
  socialIconsContainer: `flex text-3xl mb-[-2rem]`,
  socialIconsWrapper: `w-44`,
  socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
  socialIcon: `my-2`,
  divider: `border-r-2`,
  title: `text-4xl font-display font-bold mb-4`,
  createdBy: `text-lg mt-[-1rem] mb-4`,
  statsContainer: `w-[24vw] font-display flex items-center justify-between py-4 mb-4`,
  collectionStat: `w-1/3 flex flex-col items-left`,
  statValue: `text-2xl font-semibold w-full flex items-center justify-left`,
  ethLogo: `h-6 mr-2`,
  statName: `text-lg w-full font-display text-[#8a8a8a] font-regular text-left  mt-[-0.25rem]`,
  description: `text-[#8a939b]  font-display w-max-1/4 flex-wrap mt-4`,
  scroll: `absolute right-10 h-32 bottom-10 hover:h-44 origin-center transition-all duration-1000`,
  navbar: `h-28 w-full text-white  flex items-center justify-between px-14 py-10 absolute z-10 `,
  left: `font-heading mx-2  `,
  right: `font-heading flex items-center gap-20 text-sm cursor-pointer`,
  color: `text-black font-display ml-2`,
  coll:` w-[20vw] flex `

}
const Collection = () => {
  const router = useRouter()
  const { collectionId } = router.query
  const { provider } = useWeb3()
  const [listings, setListings] = useState([])
  const [collection, setCollection] = useState({})
  const [nfts, setNfts] = useState([])


  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getNFTModule(collectionId)
  }, [provider])

  useEffect(() => {
    if (!nftModule) return

      ; (async () => {
        const nfts = await nftModule.getAll()
        setNfts(nfts)
      })()
  }, [nftModule])


  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const marketAddr = '0xFc3BB974Bab176551b730deB63f4BD71244830d7'

    const sdk = new ThirdwebSDK(provider.getSigner())
    return sdk.getMarketplaceModule(marketAddr)
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return

      ; (async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
  }, [marketPlaceModule])


  const fetchCollectionData = async (sanityClient = client) => {
    const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`

    const collectionData = await sanityClient.fetch(query)
    setCollection(collectionData[0])
  }

  useEffect(() => {
    fetchCollectionData()
  }, [collectionId])
  return (
    <div className="overflow-hidden">
      <div className={style.overlayb}></div>
      <div className={style.navbar}>
        <div className={style.left}>
          <Link href="/">
            <h1 class="reveal-text" style={{ cursor: "pointer" }}>
              NFTStore
            </h1>
          </Link>
        </div>
        <div className={style.right}>
          <Link href="/">
            <div class="hover:text-lg origin-center transition-all duration-700">Explore</div>
          </Link>
          <Link href="/collections/0xCb1161AEf049b237b160A76BbF8CF27962dDe28a">
            <div class="hover:text-lg origin-center transition-all duration-700 ">Collections</div>
          </Link>
          <div class="hover:text-lg origin-center transition-all duration-700">Create</div>
          <div class="hover:text-lg origin-center transition-all duration-700">Account</div>
        </div>

      </div>
      <div className={style.bannerImageContainer}>
        <img className={style.bannerImage}
        src={
          collection?.bannerImageUrl
           ? collection.bannerImageUrl
            : "https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8f87130553681.6182b7d098180.png"
        } alt ="banner"
        />
      </div>
      <div className={style.infoContainer}>
        <div className={style.midRow}>
          <img
            className={style.profileImg}
            src={
              collection?.imageUrl
                ? collection.imageUrl
                : 'https://via.placeholder.com/200'
            }
            alt="profile image"
          />
        </div>
        <div className={style.endRow}>
          <div className={style.socialIconsContainer}>
            <div className={style.socialIconsWrapper}>
              <div className={style.socialIconsContent}>
                <div className={style.socialIcon}>
                  <CgWebsite />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineInstagram />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <AiOutlineTwitter />
                </div>
                <div className={style.divider} />
                <div className={style.socialIcon}>
                  <HiDotsVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.midRow}>
          <div className={style.title}>{collection?.title}</div>
        </div>
        <div className={style.midRow}>
          <div className={style.createdBy}>
            by{' '}
            <span className="text-[#2081e2]">{collection?.creator}</span>
          </div>
        </div>
            <div className={style.coll}>
              <div className={style.statName}>Items: <span className={style.color}> {nfts.length}</span></div>
              <div className={style.statName}>Chain: <span className={style.color}> Polygon</span></div>
            </div>
        <div className={style.midRow}>
          <div className={style.description}>{collection?.description}</div>
        </div>
        <div className={style.midRow}>
          <div className={style.statsContainer}>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                {collection?.allOwners ? collection.allOwners.length : ''}
              </div>
              <div className={style.statName}>owners</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                <img
                  src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                {collection?.floorPrice} 
              </div>
              <div className={style.statName}>floor price</div>
            </div>
            <div className={style.collectionStat}>
              <div className={style.statValue}>
                
                <img
                  src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
                  alt="eth"
                  className={style.ethLogo}
                />
                {collection?.volumeTraded}
              </div>
              <div className={style.statName}>volume traded</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap px-5">
        {nfts.map((nftItem, id) => (
          <NFTCard
            key={id}
            nftItem={nftItem}
            title={collection?.title}
            listings={listings}
          />
        ))}
      </div>

    </div>
  )
}

export default Collection 
