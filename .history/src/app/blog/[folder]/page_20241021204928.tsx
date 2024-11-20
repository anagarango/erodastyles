"use client"
import Menu from "../../components/menu";
import post from "../../../../posts/posts.json"
import Image from "next/image";

export default function Home() {

  return (
    <div >
			<Menu/>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", maxWidth:"1200px"}}>
          <div style={{backgroundImage:`url('${post[4].cover}')`, backgroundPosition:"center", backgroundSize:"cover", position:"relative", height:"600px", width: "100%", maxWidth:"1200px", display:"flex", justifyContent:"center"}}>
            <div style={{backgroundColor:"white", position:"absolute", padding:"40px", top:"40%", textAlign:"center"}}>
              <h1 style={{fontSize:"20px", fontWeight:"500"}}>{post[4].title}</h1>
              <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingTop:"15px"}}>{post[4].date}</h4>
            </div>
          </div>
          <div style={{padding:"70px"}}>
            <div dangerouslySetInnerHTML={{ __html: post[4].content }} />
            
          </div>
        </div>
      </div>
    </div>
  );
}
