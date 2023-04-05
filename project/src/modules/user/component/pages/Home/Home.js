import React, {useEffect, useState} from 'react'
import News from '../../shared/News/News'
import Slider from '../../shared/Slider/Slider'
import Products from '../../shared/Products/Products'
import { getAllData } from '../../../../../services/ProductService'
const Home = () => {

	let [allPro, setAllPro] = useState([]);

	useEffect(()=>{
		fetchData();
	}, [])

	let fetchData = async ()=>{
		let res = await getAllData();
		console.log(res);
		setAllPro(res);
	}

  return (
    <>
	<Slider />
    <div className="product-section mt-150 mb-150">
		<div className="container">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 text-center">
					<div className="section-title">	
						<h3><span className="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div className="row">
				{
					allPro.map(item=><Products key={item._id} obj={item}/>)
				}
				
				
			</div>
		</div>
	</div>
	<News />
    </>
  )
}

export default Home