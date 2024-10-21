import Image from "next/image";
import { Button, Space, DatePicker, Dropdown, version } from 'antd';

export default function Home() {
  return (
    <div>
        <div style={{display:"flex"}}>
            <h1>About</h1>
            <h1>Blog</h1>
            <h1>Funsies</h1>
            <h1>Contact</h1>
            <h1>Inspirations</h1>
        </div>
        {/* <Space>
      <DatePicker />
      <Button type="primary">Primary Button</Button>
    </Space> */}
    </div>
  );
}
