import React from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { delCart } from '../redux/CartSlice';


const MyCart = () => {
    let data = useSelector(state=>state.CartReducer);
    let disp = useDispatch();

    let deleteItem = (item)=>{
        disp(delCart(item.id));
    }
  return (
    <>
    <div className="container my-4">
        <div className="row">
            <div className="col-md-10 offset-md-1">
                {
                    data.map(item=>{
                        return(
                            <div key={item.id}>
                                <div className='row my-2 border border-info'>
                                    <div className='col-md-3'>
                                        <img src={item.image} style={{ height : '100px'}} className='img-thumbnail' />
                                    </div>
                                    <div className='col-md-7'>
                                        <p>{ item.title }</p>
                                        <br />
                                        <button onClick={()=>deleteItem(item)} className='btn btn-danger btn-sm'>x</button>
                                    </div>
                                    <div className='col-md-2'>
                                        { item.price }
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default MyCart