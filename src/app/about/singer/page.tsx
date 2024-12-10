import Image from "next/image";
import { Button, Space, DatePicker, Dropdown, version } from 'antd';
import Menu from "@/app/components/menu";

export default function Singer() {
  return (
    <div>
      <Menu/>
        <div style={{display:"flex", flexDirection:"column", gap:"30px", padding:"70px"}}>
          <h1 style={{fontSize:"20px", fontWeight:"700"}}>About the Singer</h1>
          <img src="/singer.webp"/>
          <p>English-born singer Harry Styles rose to fame as one of the five members of the boy band One Direction. He launched his solo career in 2016 and made his acting debut in the 2017 film ‘Dunkirk.’English-born singer Harry Styles rose to fame as one of the five members of the boy band One Direction. He launched his solo career in 2016 and made his acting debut in the 2017 film ‘Dunkirk.’</p>
          <p>In 2010 Harry Styles auditioned for the UK television show The X Factor, where the judges combined him with four other young male singers to form One Direction. The boy band became a pop music sensation, delivering hits like “Best Song Ever” and “Story of My Life” through five immensely successful studio albums. Styles then made a solo splash in 2017 with his debut single, “Sign of the Times,” and a self-titled album. In 2020, he received praise for his second solo album, Fine Line.</p>
        </div>
    </div>
  );
}
