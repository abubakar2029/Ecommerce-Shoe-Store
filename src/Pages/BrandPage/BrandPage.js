import { NavigationCard } from "../../Components/NavigationCard/NavigationCard";
import "./BrandPage.css"
import { useLocation } from "react-router-dom";

export default function BrandPage() {
  const location = useLocation();
  console.log("My page", location.state);
  let brandData = location.state;
  /* Brand-name-to-TitleCase--------------------------- */
  let brandName = '';
  if (location.state) {
    for (let i = 0; i < brandData.brandName.length; i++) {
      if (i == 0) {
        brandName += brandData.brandName[i].toUpperCase();
        i++;
      }
      brandName += brandData.brandName[i];
    }
  }
  /* ------------------------------------------------ */

  return (
    <div className="flex gap-x-2">
      <div className="w-1/4 static">{/* 20 % width-here */}
        <NavigationCard />
      </div>
      {/* Product Section */}
      <div id="product-section" className="text-left w-3/4">{/* 80% width here */}
        <div><h1 className="text-2xl font-semibold ml-6">{brandName}</h1></div>
        {brandData ?
          <div className="flex">
            {brandData.products.map((card) => {
              return <div className="card">
                <img src={card.img} className="card-img" />
                <div className="card-content">
                  <p>{card.title}</p>
                  <p>{card.price}</p>
                  <p>{card.discount}</p>
                </div>
              </div>
            })}
          </div> : null}
      </div>
    </div>
  )
}
