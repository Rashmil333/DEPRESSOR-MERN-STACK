import React from 'react';

const Dcommon=(props)=>{
	return(<>
		<div className="container" style={{marginTop:'10%'}}>
		 <div className="row">
		   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
		        <h1 style={{color:'white'}}>{props.text}</h1>
				<h3 style={{color:'white'}}>{props.description}</h3>
				<h5 style={{color:'powderblue'}}>If you are just passing your life Stop!<br/>Live your life...</h5>
				<a href="/profile"><button class="getstarted">Get started</button></a>
			
				

		   </div>
		   <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
		       <img style={{width:'300px'}}  src={props.img}/>


		   </div>
		 </div>

		</div>
		
		</>)
}

export default Dcommon;