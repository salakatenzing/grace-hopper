import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const dummyData = [
    {id:1, des: 'Carrot', img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:2, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:3, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:4, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:5, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:6, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:7, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:8, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:9, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:10, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:11, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:12, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:13, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:14, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:15, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:16, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:17, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:18, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:19, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
    {id:20, des: 'Carrot',img:"https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg"},
]


export default function AllProducts(){

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };

      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    return(
        <>
        <h3>Suggestions</h3>

        <div className='relative d-flex flex-row justify-content-around p-5 '>

        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={150} />

              <div id = 'slider'
              className=' d-flex justify-content-between w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
              >
                {dummyData.map((item)=> (
                    <img
                    className='d-flex p-3 rounded inline-block cursor-pointer hover:scale-300 ease-in-out duration-300 border border-dark '
                    src={item.img}
                    width='200px'
                    height='150px'
                    alt='product pic here'
                    />
                ))}
                </div>

                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={150} />

        </div>


        <br/>
        <br/>

        <h3>Fruits</h3>
        <div className='fruits d-flex justify-content-center'>
            <span className=' border border-dark bg-light rounded w-25 p-3 d-flex justify-content-center'>
                <div>
                <img src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="product pic here" width="200px" height='170px' className='rounded'/>
                <h5 className='text-dark'>Carrots</h5>
                <h6>$1000/lb</h6>
                <button type="button" className="btn btn-primary">Add to Cart</button>
                </div>
            </span>
        </div>

            <br/>
            <br/>

            <h3>Vegetables</h3>
        <div className='vegetables d-flex justify-content-center'>
            <div className='vegetables d-flex justify-content-center border border-dark bg-light rounded w-25 p-3'>
                <div>
                <img src="https://www.freshpoint.com/wp-content/uploads/commodity-carrot.jpg" alt="product pic here" width="200px" height='170px' className='rounded'/>
                <h5 className='text-dark'>Carrots</h5>
                <h6>$1000/lb</h6>
                <button type="button" className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    </>
    )
}
