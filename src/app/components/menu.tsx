"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { CaretDownOutlined } from '@ant-design/icons';
import { Space, Dropdown } from 'antd';
import type { MenuProps } from 'antd';

export default function Menu() {
    const r = useRouter()

    const about: MenuProps['about'] = [
        {
          key: '1',
          label: (
            <h1 style={{fontSize:"16px"}} onClick={()=>r.push("/author")}>ABOUT THE AUTHOR</h1>
          )
        },
        {
          key: '2',
          label: (
						<h1 style={{fontSize:"16px"}} onClick={()=>r.push("/author")}>ABOUT THE SINGER</h1>
          )
        }
    ];
		const funsies: MenuProps['funsies'] = [
			{
				key: '1',
				label: (
					<h1 style={{fontSize:"16px"}}  onClick={()=>r.push("/author")}>Gallery</h1>
				)
			},
			{
				key: '2',
				label: (
					<h1 style={{fontSize:"16px"}}  onClick={()=>r.push("/author")}>Quiz</h1>
				)
			},
			{
				key: '3',
				label: (
					<h1 style={{fontSize:"16px"}}  onClick={()=>r.push("/author")}>Sources</h1>
				)
			},
			{
				key: '4',
				label: (
					<a style={{fontSize:"16px"}}  target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
						Harry Styles is Overrated 
					</a>
				)
			}
		];
		const inspirations: MenuProps['inspirations'] = [
			{
				key: '1',
				label: (
					<h1 style={{fontSize:"16px"}} onClick={()=>r.push("/author")}>Musical Influences</h1>
				)
			},
			{
				key: '2',
				label: (
					<h1 style={{fontSize:"16px"}} onClick={()=>r.push("/author")}>Recent Projects</h1>
				)
			}
		];
  return (
		<>
			<div style={{display:"flex", fontSize:"16px" ,fontWeight:"300", justifyContent:"center", gap:"35px", padding:"15px 0"}}>
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
				<h1>CONTACT</h1>
				<Dropdown menu={{ items:inspirations }}>
					<Space>
						INSPIRATIONS
						<CaretDownOutlined style={{ color: '#F4CCC2' }}/>
					</Space>
				</Dropdown>
			</div>

			<div className="header" style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"60px 0"}}>
				<h1 id="heading" style={{fontSize:"55px", fontWeight:"600", width:"fit-content", cursor:"pointer"}} onClick={()=>r.push("/")}>Ultimate Guide to Harry Styles</h1>
				<div className="behind"></div>
				<h1>A blog dedicated to Grammy winner, singer, songwriter, and actor Harry Styles</h1>
			</div>
		</>
  );
}
