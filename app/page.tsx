export default function Home() {
  return (
   <>
    <div
        className="desktop-section mx-4 md:mx-35 my-8 md:my-10 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center">
        <div className="flex flex-col items-center md:items-center space-y-6">
            <h1 className=" text-md md:text-4xl  text-center md:text-left mt-4">Find Skilled Professionals</h1>
            <p className="text-xl text-center md:text-left">100K+ Downloads</p>
            <p className="font-semibold text-center md:text-left">Now India Added</p>
            <div className="flex space-x-4">
                <a target="_blank" href="https://bit.ly/sriyog"> 
                <img src="images/google.png" className="h-16" alt=""/>
                </a>
                <a target="_blank" href="https://bit.ly/sriyogios">
                 <img src="/images/apple.png" className="h-16" alt=""/>
                 </a>   
            </div>
        </div>
        <div className="mobile-image">
            <img src="/images/mobile.png" className="h-100 md:h-96" alt=""/>
        </div>
    </div>
   </>
  );
}
