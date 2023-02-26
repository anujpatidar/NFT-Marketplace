


const NFTImage = ({ selectedNft }) => {
    return (
        <div className='w-full'>
            <div>
                {console.log(selectedNft, '🎆')}
                <img src={selectedNft?.image} className='rounded-2xl'/>
            </div>
        </div>
    )
}

export default NFTImage