"use client"
import Image from "next/image";
import { Button, Space, DatePicker, Dropdown, version } from 'antd';
import Menu from "../components/menu";
import recentprojects from "../../../posts/recentprojects.json"
import { useRouter } from "next/navigation";

export default function RecentProjects() {
  const r = useRouter()
  return (
    <div>
      <Menu/>
        <div style={{display:"flex", flexDirection:"column", gap:"70px", padding:"70px"}}>
            {recentprojects.map((o,i)=>{
              return(
                <div style={{display:"flex", gap:15}}>
                  <Image alt={`Cover for ${o.title}`} src={`/recentprojects${o.cover}`} width={300} height={300} />
                  <div style={{width:"70%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                    <h1 id="heading" style={{fontSize:"35px"}}>{o.title}</h1>
                    <h4 style={{fontSize:"13px", color:"#EF9B9A", paddingBottom:"15px"}}>{o.date}</h4>
                    <p>{o.snippet}</p>
                    <Button type="default" size="large" variant="filled" onClick={()=>r.push(`/recentprojects/${i}`)}>Read More...</Button>
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  );
}
