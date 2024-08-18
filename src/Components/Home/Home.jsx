import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import Hero from '../../assets/Hero.png'
import Counter from '../Counter/Counter';
import girl from '../../assets/girl.png'
import hoodie from '../../assets/hoodie.png'


const Home = () => {

  return (
    <>
      <Banner heading="From Our Store to Your Doorstep" bannerImg={Hero}/>
      <div className='w-10/12 grid grid-cols-3 container gap-8 justify-center items-center bg-Pink text-Cream mx-auto p-7 my-10 rounded-xl'>
      <Counter start="0" end="500" counterText="Happy Customers"/>
      <Counter start="0" end="4" counterText="Discounted Deals"/>
      <Counter start="0" end="1200" counterText="Products Slod"/>
      </div>
     
      <div className='flex flex-row  my-8 justify-center'>
        <div>
          <Banner heading="Amazing Deals" bannerImg={hoodie}/>
        </div>
        <div>
          <Banner heading="Summer Sale" bannerImg={girl}/>
        </div>
        
   </div>
    </>
  );
};

export default Home;
