import React from 'react'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import NFTImage from '../../components/nft/NFTImage'
import GeneralDetails from '../../components/nft/GeneralDetails'
import Purchase from '../../components/nft/Purchase'
import ItemActivity from '../../components/nft/ItemActivity'
import {IoIosArrowBack} from "react-icons/io"
import Link from 'next/link'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1  mr-4`,
  detailsContainer: `flex-1 ml-4`,
  description:`text-black h-72 my-6 border border-[#d8d8d8] rounded-xl px-4 py-4`
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      
    )
    return sdk.getNFTModule('0xCb1161AEf049b237b160A76BbF8CF27962dDe28a')
  }, [provider])

  useEffect(() => {
    if (!nftModule) return
      ; (async () => {
        const nfts = await nftModule.getAll()
        console.log(nfts)
        const selectedNftItem = nfts.find(
          (nft) => nft.id === router.query.nftId)

        setSelectedNft(selectedNftItem)
      })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
    )

    return sdk.getMarketplaceModule(
      '0xFc3BB974Bab176551b730deB63f4BD71244830d7'
    )
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
      ; (async () => {
        setListings(await marketPlaceModule.getAllListings())
      })()
  }, [marketPlaceModule])



  return (
    <div className={style.wrapper}>
      
        <div className={style.container}>
        <Link href="/collections/0xCb1161AEf049b237b160A76BbF8CF27962dDe28a">
          <IoIosArrowBack className='text-black text-4xl mb-6 cursor-pointer'/>
        </Link>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage  selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
                marketPlaceModule={marketPlaceModule}
              />
              <div className={style.description}>
                <h2 className='font-bold text-3xl font-display mb-4 pb-2 border-b'>Description</h2>
              <p className='text-medium font-display text-[#909090]'>8K NEXT-GENERATION, HIGH FASHION HAPES. Unique, fully 3D and built to unite the ape multiverse. Designed and styled by Digimental.</p>
              </div>

            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
  )
}

export default Nft