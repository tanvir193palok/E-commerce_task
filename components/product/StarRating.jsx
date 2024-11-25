import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ isBig }) => {
  const starSize = isBig ? "text-3xl" : "text-xl"; 
  const dimensions = isBig ? "w-[40px] h-[40px]" : "w-[24px] h-[24px]"; 
  
  return (
    <div className="flex space-x-1 text-yellow-500">
      <span className={`${dimensions} ${starSize}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={`${dimensions} ${starSize}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={`${dimensions} ${starSize}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={`${dimensions} ${starSize}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
      <span className={`${dimensions} ${starSize}`}>
        <FontAwesomeIcon icon={faStarRegular} />
      </span>
    </div>
  );
};

export default StarRating;
