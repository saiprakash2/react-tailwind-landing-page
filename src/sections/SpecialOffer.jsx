import { useEffect } from "react";
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"
import AOS from 'aos';
import 'aos/dist/aos.css';

const SpecialOffer = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section data-aos="flip-right" className="flex justify-wrap 
    items-center max-xl:flex-col-reverse
    gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer}
          width={773}
          height={687} 
          alt=""
          className="object-contain w-full" 
          />
      </div>
      <div className="flex flex-1 flex-col">
          <h2 className='text-4xl font-palanquin 
          capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'> Special</span> Offer
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Embark on a shopping journey that redefines yor experience 
            with unbeatable deals. From premier selections to incredible deals
            savings, we offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Navigate a real  of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with
            us is nothing shortof exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
              <Button label="Shop Now" iconURL={arrowRight}/>
              <Button 
                label="Learn More" 
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
                />
          </div>
        </div>
    </section>
  )
}

export default SpecialOffer