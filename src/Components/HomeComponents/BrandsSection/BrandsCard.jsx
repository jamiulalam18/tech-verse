import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandsCard = ({brand}) => {
    // eslint-disable-next-line react/prop-types
    const {brand_name,brand_logo,brand_main_location,_id}=brand;
    return (
        <div className="card bg-base-100 shadow-xl flex flex-col justify-between">
            <figure className="px-10 pt-10 h-2/3">
              <img
                src={brand_logo}
                alt="Logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{brand_name}</h2>
              <p>{brand_main_location}</p>
              <div className="card-actions">
                <Link to={`/brandDetails/${_id}`} className="btn btn-primary bg-[#ADCCD4AA] hover:bg-[#ADCCD4] font-extrabold text-black border-none">Browse Collection</Link>
              </div>
            </div>
          </div>
    );
};

export default BrandsCard;