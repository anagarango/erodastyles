"use client"
import Image from "next/image";
import Menu from "./components/menu";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import posts from "../../posts/posts.json"
import musicalInfluences from "../../posts/musicalinfluences.json"

export default function Home() {
	const r = useRouter()
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
			<Menu/>
			<div id="carousel">
				<div style={{backgroundImage:"url('/hs-grammys.png')", backgroundPosition:"center", backgroundSize:"cover", position:"relative"}}>
					<h1 style={{backgroundColor:"white", position:"absolute", padding:"50px", top:"45%", left:"40%", fontSize:"20px"}}>Grammy Winner</h1>
				</div>
				<div style={{backgroundImage:"url('/hs-singer.png')", backgroundPosition:"center", backgroundSize:"cover", position:"relative"}}>
					<h1 style={{backgroundColor:"white", position:"absolute", padding:"50px", top:"45%", left:"40%", fontSize:"20px"}}>Singer & Musician</h1>
				</div>
				<div style={{backgroundImage:"url('/hs-actor.png')", backgroundPosition:"center", backgroundSize:"cover", position:"relative"}}>
					<h1 style={{backgroundColor:"white", position:"absolute", padding:"50px", top:"45%", left:"40%", fontSize:"20px"}}>Actor</h1>
				</div>
				<div style={{backgroundImage:"url('/hs-model.png')", backgroundPosition:"center", backgroundSize:"cover", position:"relative"}}>
					<h1 style={{backgroundColor:"white", position:"absolute", padding:"50px", top:"45%", left:"40%", fontSize:"20px"}}>Model</h1>
				</div>
			</div>

			<div style={{width:"100%", padding:"50px", maxWidth:"1250px"}}>
				<div id="aboutblog" style={{backgroundColor:"#FCF2F1", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"3rem"}}>
					<div style={{width:"50%"}}>
						<h1 id="heading" style={{fontSize:"30px", fontWeight:"600", width:"fit-content", paddingBottom:"20px", color:"#EF9B9A"}}>About the Blog</h1>
						<p>This blog is about the stages of his life and the significant milestones that he has reached through his career, basically, an ultimate guide of his life. For the Harry fans that pretty much know everything there is to him, I'll also be making posts voicing my opinion on specific events or things related to him, so if you want to read more of those juicy details, head over to the Blog page. This blog has been something I had thought about creating for a long time ago when it seemed popular, but now that I was allowed to make a blog about anything, it seemed like the perfect time to finally start a blog like this. So enjoy explorin' and learnin'!</p>
					</div>
					<Image alt="profile" src="/cocoa.png" width={200} height={100} style={{width:"275px", height:"275px", borderRadius:"50%"}}/>
				</div>

				<div style={{padding:"50px 0", display:"flex", gap:40}}>
					<div style={{width:"80%"}}>
						<h1 style={{fontSize:"26px", fontWeight:"600", borderBottom:"1px solid #DBCDCD"}}>LATEST POSTS</h1>
						<div style={{display:"flex", flexWrap:"wrap", gap:10}}>
							{posts.toReversed().map((o,i)=>(
								<div onClick={()=>r.push(`/blog/${10-i}`)} style={{width:"45%", padding:"20px"}}>
									<h4 id="heading" style={{fontSize:"25px"}}>{o.title}</h4>
									<p style={{padding:"20px 0", textAlign:"center"}}>{o.snippet}</p>
									<img src={o.cover}/>
								</div>
							))}
						</div>
					</div>
					<div>
						<h1 style={{fontSize:"26px", fontWeight:"600" ,borderBottom:"1px solid #DBCDCD"}}>RELEASED ALBUMS</h1>
						<div style={{padding:"15px 0"}}>
							<img src="harrystyles.png"/>
							<h4 id="heading" style={{fontSize:"25px", borderBottom:"1px solid #DBCDCD"}}>HARRY STYLES</h4>
							<ul style={{textAlign:"center"}}>
								<li>Meet Me in the Hallway</li>
								<li>Sign of the Times</li>
								<li>Carolina</li>
								<li>Two Ghosts</li>
								<li>Sweet Creature</li>
								<li>Only Angel</li>
								<li>Kiwi</li>
								<li>Ever Since New York</li>
								<li>Woman</li>
								<li>From The Dining Table</li>
							</ul>
						</div>
						<div style={{padding:"15px 0"}}>
							<img src="fineline.png"/>
							<h4 id="heading" style={{fontSize:"25px", borderBottom:"1px solid #DBCDCD"}}>FINE LINE</h4>
							<ul style={{textAlign:"center"}}>
								<li>Golden</li>
								<li>Watermelon Sugar</li>
								<li>Adore You</li>
								<li>Lights Up</li>
								<li>Cherry</li>
								<li>Falling</li>
								<li>To Be So Lonely</li>
								<li>She</li>
								<li>Sunglower, Vol.6</li>
								<li>Canyon Moon</li>
								<li>Treat People with Kindness</li>
								<li>Fine Line</li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<h1 style={{fontSize:"26px", fontWeight:"600" ,borderBottom:"1px solid #DBCDCD", paddingBottom:"30px"}}>HARRY'S MUSICAL INFLUENCES</h1>
					<div style={{display:"flex", flexWrap:"wrap", gap:20}}>
						{musicalInfluences.map((o,i)=>(
							<div onClick={()=>r.push(`/musicalinfluences/${i}`)} style={{width:"49%", padding:"20px", height:"350px", borderRadius: 15, position:"relative", backgroundImage:`url(/musicalinfluences/${o.cover})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>
								<h4 id="heading" style={{width:"calc(100% - 40px)", backgroundColor:"rgba(255,255,255,0.9)", position:"absolute", padding:"30px", bottom:"5%", fontSize:"25px", borderRadius:5}}>{o.title}</h4>
								{/* <img src={`/musicalinfluences/${o.cover}`}/> */}
							</div>
						))}
					</div>
				</div>

			</div>
			
    </div>
  );
}