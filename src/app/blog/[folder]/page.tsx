"use client"
import Menu from "../../components/menu";
import post from "../../../../posts/posts.json"
import Image from "next/image";
import { useParams } from "next/navigation";
import images from "../../../../posts/liveontour.json"

export default function Home() {
  const {folder} = useParams()
  console.log(folder)
  return (
    <div >
			<Menu/>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", maxWidth:"1200px"}}>
          <div style={{backgroundImage:`url('${post[Number(folder)].cover}')`, backgroundPosition:"center", backgroundSize:"cover", position:"relative", height:"600px", width: "100%", maxWidth:"1200px", display:"flex", justifyContent:"center"}}>
            <div style={{backgroundColor:"white", position:"absolute", padding:"40px", top:"40%", textAlign:"center"}}>
              <h1 style={{fontSize:"20px", fontWeight:"500"}}>{post[Number(folder)].title}</h1>
              <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingTop:"15px"}}>{post[Number(folder)].date}</h4>
            </div>
          </div>
          <div style={{padding:"70px"}}>
            {Number(folder) !== 2 && <>
              <div dangerouslySetInnerHTML={{ __html: post[Number(folder)].content }} />
            </>}
            {/* <h1>Baby Harry</h1>
            <div>
              <img src=""/>
              <img src=""/>
              <img src=""/>
            </div>
            <h1>"Up All Night" Harry</h1>
            <h1>"Take Me Home" Harry</h1>
            <h1>Frat Boy Harry</h1>
            <h1>Bandana Harry</h1>
            <h1>Prince Hair Harry</h1>
            <h1>Long Hair Harry</h1>
            <h1>Dunkirk Harry</h1>
            <h1>"Live On Tour" Harry</h1>
            <h1>"Fine Line" Harry</h1>
            <h1>Quarantine Harry</h1>
            <h1>"Love On Tour Harry"</h1> */}
            {Number(folder) == 2 && <>
              <p>I would rank the Love On Tour outfits too, but I was slightly disappointed since like 80% of them were the same high-rise(all the way to the belly button) and wide-legged pants with mid-sleeve dress shirt and suspenders but had different patterns and colours :/ Live On Tour had a variety of outfits. Ones that I liked… and others that I didn’t (really) like. I’ll be ranking them from worst to best in my opinion</p>
                <h1 style={{padding:"20px 0 0 0", fontSize:"18px", fontWeight:"700"}}>NEVER again</h1>
                <p>I just wouldn’t want to see these ever again, the metallic look looks kinda weird and these sparkly ones were just not doing it.</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.hell.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <h1 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}} >Meh</h1>
                <p>Slightly better than the last one, but I thought these were pretty whatever or were just a little too crazy (especially there first two).</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.meh.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <h1 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}} >Normal</h1>
                <p>There weren’t very experimental, but were good enough to be worn normally in other events that are appropriate, so they’re good just not amazing</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.good.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <h1 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}} >Amazing</h1>
                <p>He was a bit more wild, a lot more bolder than last few ones. Amazing nonetheless and I wouldn’t mind seeing them again in some way.</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.amazing.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <h1 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}} >Angelic</h1>
                <p>These were just suits that took a while to see if they were better than the “Amazing tier” and it just didn’t feel right that they were in that category, so it made sense to make a new tier for it.</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.angelic.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <h1 style={{padding:"20px 0", fontSize:"18px", fontWeight:"700"}} >God</h1>
                <p>Just the best of the best, fell in love with how they look on him immediately. I would probably cry if I ever saw something like these again, they were just outstanding, just everything about them are just *muah* 👌</p>
                <div style={{display:"flex", flexWrap:"wrap", gap:"2px", padding:"10px 0"}}>
                  {images.god.map((o,i)=>(
                    <img src={`/liveontoursuits${o}`} style={{height:"250px",}}/>
                  ))}
                </div>
                <hr></hr>
                <p>For a more stepped back look on his suits, here is an illustration someone made for the suits he wore for you to examine and see which ones you would’ve picked to be in your “God Tier”.</p>
                <img src="/liveontoursuits/harry-styles-tour-suits.jpg"/>
            </>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
