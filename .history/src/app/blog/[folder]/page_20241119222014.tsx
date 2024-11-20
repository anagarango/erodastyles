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
          <div style={{backgroundImage:`url('${post[9].cover}')`, backgroundPosition:"center", backgroundSize:"cover", position:"relative", height:"600px", width: "100%", maxWidth:"1200px", display:"flex", justifyContent:"center"}}>
            <div style={{backgroundColor:"white", position:"absolute", padding:"40px", top:"40%", textAlign:"center"}}>
              <h1 style={{fontSize:"20px", fontWeight:"500"}}>{post[9].title}</h1>
              <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingTop:"15px"}}>{post[9].date}</h4>
            </div>
          </div>
          <div style={{padding:"70px"}}>
            {/* <div dangerouslySetInnerHTML={{ __html: post[4].content }} /> */}
            <p style={{paddingBottom:"25px"}}>Grammy-winning artist Harry Styles announced on social media Wednesday (March 23, TODAY!) that his highly anticipated third studio album, Harry’s House, will arrive May 20th.</p>
            <p>According to the press release, Harry’s House will have 13 tracks — more than any of his previous albums. Though no further details on the album’s tracklist are available yet, the “Watermelon Sugar” singer did unveil the Harry’s House cover art: a photo of a confused-looking Harry scratching his face as he stands on the ceiling of an upside-down living room.</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
