import logoSlogan from './../../../../public/logo-slogan-clear.png'
const HomeBanner = () => {
  return (
    <div className="pt-24 rounded-lg">
      <div
        className="hero max-w-screen-xl mx-auto h-[500px] rounded-lg place-items-start items-center"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/pLWMzZN/banner-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content rounded-lg">
          <div className="max-w-md rounded-lg">
            <img src={logoSlogan} className='glass rounded-3xl bg-gray-400 bg-opacity-75'>
            </img>
            
            <button className="btn btn-primary mt-5 bg-[#ADCCD4AA] hover:bg-[#ADCCD4] font-extrabold text-black rounded-full border-none">Start Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
