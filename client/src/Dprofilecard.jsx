import React,{useState,useEffect} from "react";
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Dprofilecard=(props)=>{

			const [set,seta]=useState(true);
			const [relievers,setrelievers]=useState([]);
		 const update_rel_dep=async(e)=>{

  
    const email=props.email;
    const img=props.img;
    const name=props.name;
    const type=props.type
    const phone=props.mobile;
    const res=await fetch("/updaterelievers",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,name,img,phone,type
      })
    });

   
     



    
  }

		const [profile,setprofile]=useState(false);
		const expand=()=>{
		getdata();
		setprofile(!profile);
		}

	  const getdata=async()=>{
    
    
    const res=await fetch("/getdata",{
      method:"GET",
       headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:"include"
     
    });
    const data=await res.json();
    console.log(data.mydepressor);
    console.log(data.myreliever);
    setrelievers(data.myreliever);
    console.log(relievers);
    relievers.map((cvalue)=>{
    	if(cvalue.email==props.email){
    		seta(false);

    	}
    })

    


   }

   useEffect(()=>{
   	getdata();
   },2)
	return(<>
		
		<div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12" id="text_pink">
					<div className="card" id="profile_card">
				        <div className="card-body" style={{marginLeft:'30%'}}>
								<br/><br/><br/>
								
								<h1>{props.name}</h1>
								<img id="profile_img" src={props.img}/><Button style={{color:'white'}} onClick={expand}><ExpandMoreIcon/></Button>
								<h3><i>{props.type}</i></h3> 
								{profile==true?<div>
								<p>Email:{props.email}</p>
								<p>Phone_no:{props.mobile}</p>
								
								 {set==true?<Button style={{color:'pink'}} onClick={update_rel_dep}>
								I accept this as my{props.type}</Button>:<span style={{color:'white',fontWeight:'bold'}}>Already family member</span>}
								
								</div>:null}
							
						</div>
					</div>

				</div>

		</>)
}

export default Dprofilecard;