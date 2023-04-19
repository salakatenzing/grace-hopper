import React from "react";
import SingleProductDetail from "../productDetail/SingleProductDetail";

export default function ProductsSubcategory() {

  const dummyData = [    {name:  `Green Apple`, price: 0.35, description: `A sweet and crunchy fruit that comes in various colors`},
  {name:  `Banana`, price: 0.5, description: `A sweet and creamy fruit that comes in a yellow peel`},
  {name:  `Orange`, price: 0.75, description: `A juicy and citrusy fruit with a thick, easy-to-peel skin`},
  {name:  `Strawberries`, price: 3.99, description: `A small and sweet berry that is often used in desserts`},
  {name:  `Blueberries`, price: 4.99, description: `A small and sweet berry that is often used in smoothies`},
  {name:  `Green Grapes, Seedless`, price: 1.99, description: `A juicy and sweet fruit that comes in various colors`},
  {name:  `Pineapple`, price: 5.99, description: `A tropical fruit with a spiky exterior and sweet yellow flesh`},
  {name:  `Mango`, price: 1.99, description: `A sweet and juicy tropical fruit with a large pit`},
  {name:  `Watermelon`, price: 4.95, description: `A refreshing and juicy fruit that is perfect for hot summer days`},
  {name:  `Cantaloupe`, price: 3.87, description: `A sweet and juicy fruit with a distinctive musky aroma`},
  {name:  `Carrots`, price: 3.99, description: `A crunchy and sweet root vegetable that comes in various colors`},
  {name:  `Broccoli`, price: 1.5323, description: `A green vegetable with a distinctive floret shape`},
]
  return (
    <div>
      <SingleProductDetail />
      <h1>Category Name Here!!!</h1>
      <hr />
      <div className="row">
      {dummyData.map((product) => {
        return(
          <div className="col-sm-3">
            <div className="card" style={{width: "18rem"}} data-bs-toggle="modal" data-bs-target="#productModal">
              <img className="card-img-top" src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="Card image cap" width="16rem"/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p>{product.price}/ea.</p>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
};