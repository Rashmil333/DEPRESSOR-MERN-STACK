import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';




const Dbuycard =(props)=>{

	const [statement,setstatement]=useState();
	const [count,setcount]=useState();
	const add_item=async(e)=>{
    e.preventDefault();
    setstatement("Added to cart.")
    const img=props.img;
    const product_name=props.type;
    const cost=props.cost;
    const res=await fetch("/addtocart",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
      	product_name,cost,img
      })
    });

    const data=await res.json();


    
  }



	const call=()=>{
		props.callitem(props.img,props.type,props.cost);
	}
	


	return(<>
				<div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
	  				<div className="card" id="card_feel" style={{border:'none',width:'300px',marginLeft:'18px'}}  >
	  					<img style={{height:'400px',width:'300px'}} src={props.img} className="card-img"/>
						<div className="card-body">
							<b style={{color:'black'}}>{props.type}<br/>
							Rs {props.cost}</b><Button onClick={call}> Buy</Button><Button onClick={add_item}><AddIcon/>cart</Button><br/>
							{statement}
						

							
						</div>
					</div>
				</div>
		</>);
}

export default Dbuycard;