import React from 'react';


const Dcard=(props)=>{
	return(<>
		
		<div className="col-xl-6 col-md-12 col-lg-6 col-sm-12 col-12" style={{width:'400px'}}>
			<a href="#" style={{color:'black',textDecoration:'none'}}>
					<div className="card" id="card_feel" style={{marginLeft:'8%'}}>
						<img src={props.img} className="card-img"/>
						<div className="card-body">
							<h3>{props.heading}</h3>
							<h5>{props.descript}</h5>
						</div>
					</div>
		 </a>
				 
		</div>

		</>)
}

export default Dcard;