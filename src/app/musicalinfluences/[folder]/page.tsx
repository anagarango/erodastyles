"use client"
import Menu from "../../components/menu";
import musicalinfluences from "../../../../posts/musicalinfluences.json"
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Home() {
  const {folder} = useParams()
  console.log(folder)
  return (
    <div >
			<Menu/>
      <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", maxWidth:"1200px"}}>
          <div style={{backgroundImage:`url('/musicalinfluences/${musicalinfluences[Number(folder)].cover}')`, backgroundPosition:"center", backgroundSize:"cover", position:"relative", height:"600px", width: "100%", maxWidth:"1200px", display:"flex", justifyContent:"center"}}>
            <div style={{backgroundColor:"white", position:"absolute", padding:"40px", top:"40%", textAlign:"center"}}>
              <h1 style={{fontSize:"20px", fontWeight:"500"}}>{musicalinfluences[Number(folder)].title}</h1>
              <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingTop:"15px"}}>{musicalinfluences[Number(folder)].date}</h4>
            </div>
          </div>
          <div style={{padding:"70px"}}>
            <div dangerouslySetInnerHTML={{ __html: musicalinfluences[Number(folder)].content }} />
            {/* <p style={{paddingBottom:"30px"}}>Grammy-winning artist Harry Styles announced on social media Wednesday (March 23, TODAY!) that his highly anticipated third studio album, Harry’s House, will arrive May 20th.</p>
            <p style={{paddingBottom:"30px"}}>According to the press release, Harry’s House will have 13 tracks — more than any of his previous albums. Though no further details on the album’s tracklist are available yet, the “Watermelon Sugar” singer did unveil the Harry’s House cover art: a photo of a confused-looking Harry scratching his face as he stands on the ceiling of an upside-down living room.</p>
            <h4 style={{fontWeight:600, padding:"30px 0"}}>Trailer Teaser and Dedicated Page</h4>
            <p style={{paddingBottom:"30px"}}>Styles also released a 40-second trailer for the new album, wherein he walks pensively onto a theater stage and smiles into the camera as the outline of a yellow house rises above him.</p>
            <p style={{paddingBottom:"30px"}}>The 28-year-old pop star’s announcement confirms the theories of some of his detective-eyed fans, who noticed he’d followed social media accounts titled You Are Home. They also discovered a mysterious website YouAreHome.co, which shows nothing but a beige door that updates every day to open up and show a different image when you hover over it (doesn’t work well on mobile).</p>
            <p style={{paddingBottom:"30px"}}>As of the album announcement, the door has changed to the Harry’s House cover art.</p>
            <p style={{paddingBottom:"30px"}}>Harry’s House follows 2019’s Fine Line — for which he just finished up his world tour —  and his 2017 self-titled debut album</p>
            <h4 style={{fontWeight:600, padding:"30px 0"}}>My Thoughts...</h4>
            <p style={{paddingBottom:"30px"}}>I was in class when my friend sent me the instagram post Harry announced the release of his new album. Although, I had been anticipating that he was going to release something soon, like a music video, because of what the Harry accounts that I follow were posting about some speculations and he had been filming a music video in London, but I was not waiting for that new release to be a whole album! The cover of the album is just soooo pretty, it’s the best one so far, but I don’t know how I feel about the name of the album… it’s the second album where he has included his name in an album and it just makes him look like he’s full of himself…</p>
            <p>As we wait for the new release, here are some fan reaction’s to the announcements:</p> */}
            {/* <p style='padding-bottom:30px'>After One Direction came in 3rd in the X-Factor, Simon Cowell was willing enough to sponsor them to continue their careers as singers. They released their debut track “What Makes You Beautiful” (that has now reached over 1 Billion views) and it premiered at No.28 on the Billboard Hot 100 Singles. After this, they went on to create their first debut album “Up All Night” and they became household names in the U.K, U.S, and beyond. The popular song became so impactful that they found themselves on the biggest of international stages when they performed “What Makes You Beautiful” at the closing ceremony o the 2012 Summer Olympics in London. They then released “Take Me Home”, “Midnight Memories”, “Four”, and “Made in the A.M”. After 5 years together, the band announced their “hiatus”(it’s been 7 years!!) and each one pursued their solo careers.</p><p>In 2016, Harry signed a solo contract with Columbia Records and released his self-titled debut album 11 months later to critical acclaim, and later embarked on a world tour (I was lucky enough to attend). Through this time however of his first release of his set-titled album, he was relatively not as big as Justin Bieber or Shawn Mendes, but only after his sophomore album, “Fine Line” came out in late 2019, his hit singles hit a different chord in the world. Two of his songs, “Watermelon Sugar and “Adore You”</p><div style='display:flex; justify-content:space-around; padding:30px 0'><div><Image src='/HarryStyles-SelfTitled.png' width={150} height={150} style='width:100%'/><h4 style='font-weight:600'>3.9 Billion Streams (as of 2021)</h4></div><div> <Image src='/HarryStyles-FineLine.png' width={150} height={150} style='width:100%'/><h4 style='font-weight:600'>7.4 Billion Streams (as of 2021)</h4></div></div><p>This only means that his popularity as a solo artist will continue to climb to the charts. (as of right now [March 2022], #67 most listened artist on Spotify).</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
