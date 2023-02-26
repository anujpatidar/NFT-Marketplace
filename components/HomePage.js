
import Link from 'next/link'
import React from 'react'


const style ={
  wrapper: ``,
  bg:`h-screen w-screen relative overflow-hidden`,
  video: ` w-full absolute`,
  overlay:`h-full w-full absolute bg-black opacity-40`,
  overlayb:`h-52 w-full absolute opacity-85 bg-gradient-to-b from-black to-`,
  heading: `h-full w-full absolute  font-Semibold flex items-center text-white justify-center text-center font-heading text-7xl leading-tight`,
  scroll: `absolute right-10 h-32 bottom-10 hover:h-44 origin-center transition-all duration-1000`,
  navbar: `h-28 w-full text-white  flex items-center justify-between px-14 py-10 absolute z-10 `,
  left: `font-heading mx-2  `,
  right: `font-heading flex items-center gap-20 text-sm cursor-pointer`,
}


const HomePage = () => {
  
  return (
    <div className={style.wrapper}> 
    <div className={style.bg}>

        <video className={style.video}
        muted
        autoPlay={"autoplay"}
        preload="auto"
        loop
        src='/NFT.mp4'>
        </video>
        <div className={style.overlay}></div>
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
        <div class={style.heading}>
          <h1>Discover, Collect, And Sell<br/> Extraordinary NFTs</h1>
        </div>
        <img className={style.scroll} src='/scrollDown.gif'/> 
    </div>
        

    </div>

  )
}

export default HomePage