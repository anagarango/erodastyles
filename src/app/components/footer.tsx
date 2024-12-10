"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function Footer() {
    const r = useRouter()

  return (
			<div style={{display:"flex", width:"100%",fontSize:"16px" ,fontWeight:"300", justifyContent:"center", gap:"4%", padding:"15px 0", backgroundColor:"black", color:"white"}}>
				<h1>Ultimate Guide of Harry Styles - 2022 - Developed by Ana Arango</h1>
			</div>
  );
}
