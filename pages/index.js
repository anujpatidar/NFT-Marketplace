import HomePage from '../components/HomePage'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import {client} from '../lib/sanityClient'

const style = {
  wrapper:`h-screen w-screen`,
  button:'bg-white opacity-70 font-bold font-heading border-none px-8 py-3 rounded-lg', 
  overlay:`bg-black opacity-60 h-full w-full`,
  text:` flex flex-col items-center justify-center absolute z-10 h-full w-full`,
}

export default function Home(){
  const {address, connectWallet} = useWeb3()
  useEffect(() =>{
    if(!address) return
    ;(async () => {
      const userDoc ={
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)
      })()
    
  }, [address] );
  
  return(
    <div className={style.wrapper}>
      {address ?(
      <>
      <HomePage/>
      </>
      ):(
        <div className="walletConnectWrapper">
          <div className={style.text}>
            <h1 className="reveal">
              NFT Store
            </h1>
           <button className="glow-on-hover" onClick={() => connectWallet('injected')}>Connect Wallet</button>
          </div>
          <div className={style.overlay}></div>
        </div>
      )}
    </div>
  )
}
      

    

       
