import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const TreeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const TreeElement = styled.div`
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    margin-left: ${props => props.isChild ? '20px' : ''};
    &>div{
        display: flex;
        align-items: center;
    }
    & .toggler {
        margin-right: 6px;
        font-size: 28px;
    }
`

export const elements = [{
    name: "Overview",
    isExpandable: true,
    items: [
        {
            name: "Visual Inspection",
            isExpandable: false,
            path: "/visual-inspection"
        },
        {
            name: "File Format",
            isExpandable: false,
            path: "/file-format"
        },
    ]
},
{
    name: "File Analysis",
    isExpandable: true,
    items: [
        {
            name: "JPEG Structure",
            isExpandable: false
        },
        {
            name: "Hex Viewer",
            isExpandable: false
        },
        {
            name: "Hex Strings",
            isExpandable: false
        },
        {
            name: "EXIF",
            isExpandable: false
        },
        {
            name: "JPEG QT",
            isExpandable: false
        },
        {
            name: "JPEG HT",
            isExpandable: false
        },
        {
            name: "Social Media Identification",
            isExpandable: false
        },
    ]
},
{
    name: "Global Analysis",
    isExpandable: false,
},
{
    name: "Camera Identificattion",
    isExpandable: false,
},
{
    name: "Local Analysis",
    isExpandable: false,
    path: "/local-analysis"
}
]



function Expander({ ele, selected, setSelected }) {
    const [expand, setExpand] = useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div onClick={(e) => {
                e.stopPropagation()
                if (ele.isExpandable) {
                    setExpand(!expand)
                } else {
                    setSelected(ele.name)
                }
            }}>
                <span className="toggler" style={{transform: expand?'rotate(90deg)':'rotate(0deg)', opacity: ele.isExpandable?"1":"0"}}>&#8250;</span>
                {/* {
                    expand?
                    <span className="toggler" style={{ opacity: ele.isExpandable?"1":"0"}}>+</span>
                    :
                    <span className="toggler" style={{ opacity: ele.isExpandable?"1":"0"}}>-</span>
                } */}
                <span style={ele.name === selected?{background: "#ddd"}:{}}
                onClick={()=>{
                    if(ele.path) {
                        navigate(ele.path)
                    }
                }}
                >{ele.name}</span>
            </div>
            <div style={{ display: expand ? "block" : "none", paddingLeft: "18px" }}>
                {
                    ele.items && ele.items.length &&
                    <Tree elements={ele.items} selected={selected} setSelected={setSelected} />
                }
            </div>
        </>
    )
}

function Tree({ elements, selected, setSelected }) {
    return (
        <TreeContainer>
            {
                elements && elements.length && elements.map(ele => (
                    <TreeElement>
                        <Expander ele={ele} selected={selected} setSelected={setSelected} />
                    </TreeElement>
                ))
            }
        </TreeContainer>
    )
}

export default Tree