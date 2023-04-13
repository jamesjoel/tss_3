import React, {useEffect, useState} from 'react';
import { getAllProduct } from '../services/ProductService'
import { addPro } from '../redux/ProductSlice'
import { addCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';

const Product = () => {
    let [pro, setPro] = useState([]);
    let disp = useDispatch();
    let getpro = async () =>{
        let data = await getAllProduct();
        setPro(data);
        disp(addPro(data));
    }    
    
    useEffect(()=>{
        getpro();
        
    }, [])


    let addToCart = (item) =>{
        disp(addCart(item))
    }
    
  return (
    <>
        <div className="container my-4">
            
            <div className="row">
                {
                    pro.map(item=>{
                        return(
                            <div key={item.id} className="col-md-3">
                                <div className="card m-2" style={{ minHeight : '350px'}}>
                                    <img src={item.image} className='card-img-top' style={{ height : '180px'}} />
                                    <div className="card-body">{ item.title }</div>
                                    <div className="card-footer">
                                        <button onClick={()=>addToCart(item)} className='btn btn-sm btn-dark'>Add To Cart</button>
                                    </div>
                                </div>
                            </div>              
                        )
                    })
                }
                
            </div>
        </div>
    </>
  )
}

export default Product