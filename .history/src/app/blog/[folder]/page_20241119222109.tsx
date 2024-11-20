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
            <p style={{paddingBottom:"30px"}}>Grammy-winning artist Harry Styles announced on social media Wednesday (March 23, TODAY!) that his highly anticipated third studio album, Harry’s House, will arrive May 20th.</p>
            <p>According to the press release, Harry’s House will have 13 tracks — more than any of his previous albums. Though no further details on the album’s tracklist are available yet, the “Watermelon Sugar” singer did unveil the Harry’s House cover art: a photo of a confused-looking Harry scratching his face as he stands on the ceiling of an upside-down living room.</p>
            {/* <p style='padding-bottom:30px'>After One Direction came in 3rd in the X-Factor, Simon Cowell was willing enough to sponsor them to continue their careers as singers. They released their debut track “What Makes You Beautiful” (that has now reached over 1 Billion views) and it premiered at No.28 on the Billboard Hot 100 Singles. After this, they went on to create their first debut album “Up All Night” and they became household names in the U.K, U.S, and beyond. The popular song became so impactful that they found themselves on the biggest of international stages when they performed “What Makes You Beautiful” at the closing ceremony o the 2012 Summer Olympics in London. They then released “Take Me Home”, “Midnight Memories”, “Four”, and “Made in the A.M”. After 5 years together, the band announced their “hiatus”(it’s been 7 years!!) and each one pursued their solo careers.</p><p>In 2016, Harry signed a solo contract with Columbia Records and released his self-titled debut album 11 months later to critical acclaim, and later embarked on a world tour (I was lucky enough to attend). Through this time however of his first release of his set-titled album, he was relatively not as big as Justin Bieber or Shawn Mendes, but only after his sophomore album, “Fine Line” came out in late 2019, his hit singles hit a different chord in the world. Two of his songs, “Watermelon Sugar and “Adore You”</p><div style='display:flex; justify-content:space-around; padding:30px 0'><div><Image src='/HarryStyles-SelfTitled.png' width={150} height={150} style='width:100%'/><h4 style='font-weight:600'>3.9 Billion Streams (as of 2021)</h4></div><div> <Image src='/HarryStyles-FineLine.png' width={150} height={150} style='width:100%'/><h4 style='font-weight:600'>7.4 Billion Streams (as of 2021)</h4></div></div><p>This only means that his popularity as a solo artist will continue to climb to the charts. (as of right now [March 2022], #67 most listened artist on Spotify).</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
