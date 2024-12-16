"use client"
import { useRouter } from 'next/navigation'
import { CaretDownOutlined } from '@ant-design/icons';
import { Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

export default function Menu() {
    const r = useRouter()
		type MenuItem = Required<MenuProps>['items'][number];

    const about: MenuItem[] = [
        {
          key: '1',
          label: (
            <h1 style={{fontSize:"16px", fontFamily:"Montserrat"}} onClick={()=>r.push("/about/author")}>ABOUT THE AUTHOR</h1>
          )
        },
        {
          key: '2',
          label: (
						<h1 style={{fontSize:"16px", fontFamily:"Montserrat"}} onClick={()=>r.push("/about/singer")}>ABOUT THE SINGER</h1>
          )
        }
    ];
		const funsies: MenuItem[] = [
			{
				key: '1',
				label: (
					<h1 style={{fontSize:"16px", fontFamily:"Montserrat"}}  onClick={()=>r.push("/sources")}>SOURCES</h1>
				)
			},
			{
				key: '2',
				label: (
					<a style={{fontSize:"16px", fontFamily:"Montserrat"}}  target="_blank" rel="noopener noreferrer" href="https://youtu.be/dQw4w9WgXcQ?si=s1KEHa2UNg8g31Yy">
						HARRY STYLES IS LOWKEY OVERRATED
					</a>
				)
			}
		];
		const inspirations: MenuItem[] = [
			{
				key: '1',
				label: (
					<h1 style={{fontSize:"16px", fontFamily:"Montserrat"}} onClick={()=>r.push("/musicalinfluences")}>MUSICAL INFLUENCES</h1>
				)
			},
			{
				key: '2',
				label: (
					<h1 style={{fontSize:"16px", fontFamily:"Montserrat"}} onClick={()=>r.push("/recentprojects")}>RECENT PROJECTS</h1>
				)
			}
		];
  return (
		<>
			<div style={{display:"flex", fontSize:"16px" ,fontWeight:"300", justifyContent:"center", gap:"4%", padding:"15px 0"}}>
				<Dropdown menu={{ items:about }}>
					<Space>
						ABOUT
						<CaretDownOutlined style={{ color: '#F4CCC2' }}/>
					</Space>
				</Dropdown>
				<h1 onClick={()=>r.push("/blog")} style={{cursor:"pointer"}}>BLOG</h1>
				<Dropdown menu={{ items:funsies }}>
					<Space>
						FUNSIES
						<CaretDownOutlined style={{ color: '#F4CCC2' }}/>
					</Space>
				</Dropdown>
				<Dropdown menu={{ items:inspirations }}>
					<Space>
						INSPIRATIONS
						<CaretDownOutlined style={{ color: '#F4CCC2' }}/>
					</Space>
				</Dropdown>
			</div>

			<div className="header" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"60px 20px"}}>
				<h1 id="heading" style={{fontSize:"55px", fontWeight:"600", width:"fit-content", cursor:"pointer"}} onClick={()=>r.push("/")}>Ultimate Guide to Harry Styles</h1>
				<div className="behind"></div>
				<h1>A blog dedicated to Grammy winner, singer, songwriter, and actor Harry Styles</h1>
			</div>
		</>
  );
}
