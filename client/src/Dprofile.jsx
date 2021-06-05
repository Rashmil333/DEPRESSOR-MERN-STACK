import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom";
import Dnavbar from "./Dnavbar";
import Button from '@material-ui/core/Button';
import Dfooter from "./Dfooter";
import Dprofilesown from "./Dprofilesown";
import Dprofilecard from "./Dprofilecard";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const image="https://thumbs.gfycat.com/DependableHeavenlyKentrosaurus-size_restricted.gif";


const Dprofile=()=>{
	const history =useHistory();
	const [hobbies,sethobbies]=useState();
	const [work,setwork]=useState();
	const [category,setcategory]=useState();
	const [profile_status,setprofile_status]=useState();
	const [profile,setprofile]=useState([]);
	const [toggle,settoggle]=useState(false);
	const [refresh,setrefresh]=useState(false);

	const [name_d,setname_d]=useState();
	const [mobile_no,setmobile_no]=useState();
	const [email_id,setemail_id]=useState();

	const [depressors,setdepressors]=useState([]);
	const [relievers,setrelievers]=useState([]);
	const [both,setboth]=useState([]);
	 const getalldata=async(e)=>{

  	settoggle(!toggle);
    const email="allusers@gmail.com"
    const res=await fetch("/getalldata",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email
      })
    });

   
     const data=await res.json();
     console.log(data);
     console.log(data.depressors);
     console.log(data.firstname)
     setdepressors(data.depressors);
     setrelievers(data.relievers);
     setboth(data.both);
    




    
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
    console.log(data);
   
    console.log(data.phone);
    setname_d(data.firstname);
    setemail_id(data.email);
    setmobile_no(data.phone);
    console.log("phone",data.phone)
    console.log("name",data.firstname)
    console.log(mobile_no)
    console.log(name_d)
    console.log(data.profile_status)
    setprofile_status(data.profile_status);
    setprofile(data.profile);
    console.log(data.profile);
    


   }

  const check_f=()=>{
  	const val_work=document.getElementById('what_doing').value;
  	const val_category=document.getElementById('category').value;
  	const val_hobbies=document.getElementById('hobbies').value;
  	console.log(val_work);
  	setwork(val_work);
  	setcategory(val_category);
  	sethobbies(val_hobbies);
  }

  		const [state,setstate]=useState({
    img:"",description:"",age:""
  });

  let name,value;
  const inputevent=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setstate({...state,[name]:value});
    console.log(state)
  }
  const postdata=async()=>{
  	validation();
  	setrefresh(!refresh);

 	
    const {img,description,age}=state;
    const type="first_send";

    const res=await fetch("/profile",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
         name_d,mobile_no,email_id,hobbies,work,category,img,age,type,description
      })
    });

    const data=await res.json();

   


    
  }

	const validation=()=>{
	var url=document.getElementById('img_url').value;
  	var description=document.getElementById('description').value;
  	var age_n =document.getElementById('age').value;
  	if(url==""){
  	alert("please give the url of your profile image. ")
  	}
  	else if(description==""){
  	alert("Please tell us about yourself")
  	}
  	else if(age_n==""){
  	alert("Please enter the image");
  	}
		
	}

	useEffect(()=>{
	getdata();

	},[])


 
	
	return(<>
		<Dnavbar/>

		{refresh==true?<>
			<img src="https://i.ibb.co/YB2pncx/relax.jpg" style={{width:'100%'}}/>

		</>:null}
		
		{profile_status==0?<>
									<div className="container" style={{textAlign:'center',marginTop:'100px'}} id="formshadowdiv">
			<div className="row">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<h1 id="text_pink">Let us Create your Profile</h1><br/>
					<div>
					 <form method="POST">
						<label id="text_white">Give the url of your image</label><br/>
						<input id="img_url" type="text" placeholder="http://imgurl.png" className="letusinput" name="img" value={state.img} onChange={inputevent}/><br/><br/>
						<label id="text_white">Give a description about you so that people can understand you more</label><br/>
						<textArea id="description" style={{height:'80px'}} type="text" placeholder="I feel amazing after helping people." className="letusinput" name="description" value={state.description} onChange={inputevent}/><br/>
						
						<label id="text_white">Age</label><br/>
						<input id="age" type="number" placeholder="24" className="letusinput" name="age" value={state.age} onChange={inputevent} /><br/><br/>
						<label id="text_white">Category</label><br/>
						<select id="category"  className="letus_select">
							<option value="Depressor">Depressor</option>
							<option value="Reliever">Reliever</option>
							<option value="Both">Both</option>
						</select><br/>
						<label id="text_white">Hobbies</label><br/>
						<select id="hobbies" className="letus_select">
							<option value="Singing and Dancing">Singing and Dancing</option>
							<option value="Reading and Writing">Reading and Writing</option>
							<option value="Sports and Yoga">Sports and Yoga</option>
							<option value="Movies and Documentories">Movies and Documentories</option>
						</select><br/>
						<label id="text_white">What you are doing</label><br/>
						<select id="what_doing" className="letus_select">
							<option value="School Student">School Student</option>
							<option value="College Student">College Student</option>
							<option value="Emplpoyed but not married">Emplpoyed but not married</option>
							<option value="Employed and married">Employed and married</option>
						</select><br/><br/>
						<label id="text_white"><h5>DcOo-333</h5></label><br/>
						<input type="text" placeholder="please write the left code DcOo" className="letusinput" onChange={check_f} style={{width:'200px'}} />-<input type="text" placeholder="please write the right code 333" className="letusinput" onChange={getdata} style={{width:'200px'}} /><br/><br/>

						
						<Button type="submit" id="Dsendbut" style={{float:'right'}} onClick={postdata}>Go</Button>
	                 </form>
					</div>
				</div>
			</div>
		</div><br/><br/>



		</>:<div> { profile.map((cvalue)=>{
			return(<Dprofilesown name={cvalue.name} email={cvalue.email_id} phone={cvalue.mobile_no}
			 img={cvalue.img} type={cvalue.category} hobbies={cvalue.hobbies} description={cvalue.description} work={cvalue.work} age={cvalue.age}/>)
		})}</div>
		}


		
		
		
	
		<div className="container" >
			<div className="row">
				<Dprofilecard name="Pooja" email="poojasingh333@gmail.com" type="Reliever" img="https://d3b4rd8qvu76va.cloudfront.net/690/aaa29/8eba/4e1a/964a/7a96e13e54a9/large/72012.jpg"/><Button id="text_pink" onClick={getalldata}>Show {toggle==false?"More":"Less"}</Button>
			 {toggle==true?
			  <>
				{depressors.map((cvalue)=>{
				return(<Dprofilecard name={cvalue.name} email={cvalue.email} type="Depressor" img={cvalue.img} mobile={cvalue.mobile_no}/>)
				})}

				{relievers.map((cvalue)=>{
				return(<Dprofilecard name={cvalue.name} email={cvalue.email} type="Reliever" img={cvalue.img} mobile={cvalue.mobile_no}/>)
				})}

				{both.map((cvalue)=>{
				return(<Dprofilecard name={cvalue.name} email={cvalue.email} type="Reliever" img={cvalue.img} mobile={cvalue.mobile_no}/>)
				})}
			 </>:
			 null}

			</div>
		</div>
		<Dfooter/>
		

	</>)


}

export default Dprofile;