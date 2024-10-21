"use client"
import Menu from "../../components/menu";
import post from "../../../../posts/posts.json"

export default function Home() {

  return (
    <div >
			<Menu/>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", maxWidth:"1200px"}}>
          <div style={{backgroundImage:`url('${post[1].cover}')`, backgroundPosition:"center", backgroundSize:"cover", position:"relative", height:"600px", width: "100%", maxWidth:"1200px"}}>
            <div style={{backgroundColor:"white", position:"absolute", padding:"40px", top:"40%", left:"27vw", textAlign:"center"}}>
              <h1 style={{fontSize:"20px", fontWeight:"500"}}>{post[1].title}</h1>
              <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingTop:"15px"}}>{post[1].date}</h4>
            </div>
          </div>
          <div style={{padding:"70px"}}>
          <div dangerouslySetInnerHTML={{ __html: post[1].content }} />
            {/* <p style={{paddingBottom:"30px"}}>I’d say I’ve listened to about 85% of the songs One Direction had released just because I judged the first 15 seconds of the song, and if I didn’t like it, I would skip to the chorus, and if I still didn’t like it, I completely ignored that song. So, I can’t say I can adequately rank the albums, but I’m still gonna do it (idc). I’m ranking these from least favourite to best. I’m also going to be picking my favourite (no singles) song of each album (but most likely, I had 1-4 favourites, so I’m going to have to make some sacrifices). Let’s get this party started!</p>
            <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
              <Image src="/UpAllNight.png" width={150} height={150} style={{width:"40%", height:"fit-content"}}/>
              <div style={{width:"50%"}}>
                <h4 style={{fontWeight:"600", fontSize:"25px", paddingBottom:"15px"}}>#5 – Up All Night</h4>
                <p>Given that this was their first album, all the songs sound the same to me. I got tired of WMYB to the point where I’m just annoyed that anytime One Direction is mentioned, people automatically start singing that song</p>
                <p style={{paddingTop:"20px"}}>Favourite: Gotta Be You</p>
              </div>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-between", padding:"70px 0"}}>
              <div style={{width:"50%"}}>
                <h4 style={{fontWeight:"600", fontSize:"25px", paddingBottom:"15px"}}>#4 – Take Me Home</h4>
                <p>There’s not much to say other than I find myself singing some of the catchy songs from this album like “Kiss You” and “I Would” and the overall mix of songs were better than the last one.</p>
                <p style={{paddingTop:"20px"}}>Favourite: C’mon C’mon (Harry’s vocals in this 🤯)</p>
              </div>
              <Image src="/TakeMeHome.png" width={150} height={150} style={{width:"40%", height:"fit-content"}}/>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
              <Image src="/MidnightMemories.png" width={150} height={150} style={{width:"40%", height:"fit-content"}}/>
              <div style={{width:"50%"}}>
                <h4 style={{fontWeight:"600", fontSize:"25px", paddingBottom:"15px"}}>#3 – Midnight Memories</h4>
                <p>Here is where I believe their music really took off. Harry actually wrote his first song here, “Happily”, a pretty good bop. For sure, I have many favourites in this album that are just super upbeat. I live for Zayn’s high notes on “You and I” and “Right Now”. Love, love, and love it!</p>
                <p style={{paddingTop:"20px"}}>Favourite: Through the Dark</p>
              </div>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-between", padding:"70px 0"}}>
              <div style={{width:"50%"}}>
                <h4 style={{fontWeight:"600", fontSize:"25px", paddingBottom:"15px"}}>#2 – Made in the A.M</h4>
                <p>The overall sound of the album sounded very mature, and not sure if the maturer-me just prefers it because of that, or else I would think Midnight Memories is #2. It ranges from sad songs like “I Want to Write You a Song”, “Infinity” or “If I Could Fly” that are just calming, or when I’m in a dancing/grooving mood, “Olivia” or “What a Feeling” are great. The only bad thing is, DJ Malik had “zayned” 😥</p>
                <p style={{paddingTop:"20px"}}>Favourite: What A Feeling</p>
              </div>
              <Image src="/MadeInTheAM.png" width={150} height={150} style={{width:"40%", height:"fit-content"}}/>
            </div>
            <div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
              <Image src="/Four.png" width={150} height={150} style={{width:"40%", height:"fit-content"}}/>
              <div style={{width:"50%"}}>
                <h4 style={{fontWeight:"600", fontSize:"25px", paddingBottom:"15px"}}>#1 – Four</h4>
                <p>This album for sure had more bops that I think possibly anyone who listens to it can leave with one song being stuck in their head. Beautiful harmonies are heard in “Once in a Lifetime” and “Illusion” which I adore. There are only 2 songs I don’t like, so that about sums up how this ended up being my favourite album. Best songs to dance/groove to are “Act my Age”, “Girl Almighty”, and “No Control”. And here is where Niall sung, “we took a chonce”.</p>
                <p style={{paddingTop:"20px"}}>Favourite: Fireproof❤️‍🔥</p>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
