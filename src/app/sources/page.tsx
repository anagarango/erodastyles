import Image from "next/image";
import { Button, Space, DatePicker, Dropdown, version } from 'antd';
import Menu from "@/app/components/menu";

export default function Sources() {
  return (
    <div>
      <Menu/>
        <div style={{display:"flex", flexDirection:"column", gap:"30px", padding:"70px"}}>
          <p>Sources:</p>
        </div>
    </div>
  );
}
