import poster from '../assets/shoe_image.png'
const Hero = ()=> {
    return(
        <div className="container flex justify-content-space-between mx-20 p-16">
         <div className="content flex flex-col">
             <div className="Header font-extrabold text-9xl">
                 <h1>YOUR FEET DESERVE THE BEST </h1>
             </div>
             <div className="">
                 <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND
                     WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
             </div>

         </div>
            <div className="poster ml-14">
                <img src={poster} alt="poster" className="shoe"/>
            </div>

        </div>
    )
}
export default Hero;