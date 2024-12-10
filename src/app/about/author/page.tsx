import Image from "next/image";
import { Button, Space, DatePicker, Dropdown, version } from 'antd';
import Menu from "@/app/components/menu";

export default function Author() {
  return (
    <div>
      <Menu/>
        <div style={{display:"flex", flexDirection:"column", gap:"30px", padding:"70px"}}>
          <h1>About the Author</h1>
          <img src="/author.jpg"/>
          <p>I’m Ana Arango, a Digital Design and Development student at BCIT. This blog is dedicated to my favourite music artist, and this blog idea has been something I’ve wanted to do for some time, and it seemed like the right time to have some start on it now as a project.</p>
          <p>I was a fan when One Direction's debut single "What Makes You Beautiful" came out although I was a Louis girlie at that time. I never got into One Direction thereafter, I don't even remember when Zayn left or the band broke up. But one day when I didn't have school in 2017, my brother and I didn't have school so he suggested to go to the theaters. He wanted to watch Dunkirk and I didn't really want to go, but he mentioned that Harry Styles was going to be in it. And I thought that was weird, like I can't imagine a member of a boyband in a Christopher Nolan WW2 movie, so I went. And ever since that day, I was hooked on him. He looked so good in that movie and his acting wasn't half bad, I think he played it appropriately without drawing away the attention of the story, I mean, he didn't have that many lines. But ever since that day, I was watching past and current interviews, follow fan accounts, got really into One Direction, learned about 90% of their songs, and just became an absoulte fan girl.</p>
        </div>
    </div>
  );
}
