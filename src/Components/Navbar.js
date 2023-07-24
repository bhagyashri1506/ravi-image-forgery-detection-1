import React from "react";
import { Styled, styled } from "styled-components";

export default function Navbar({setSelectedImage}) {

    const Section= styled.section`font-family: Poppins; `
    const Title= styled.h4`margin:7px `
    const MenuButton = styled.button`border: 0; margin:2px; border-radius:2px;cursor:pointer; box-shadow: gray 0 2px 4px;outline: 0;transition: 0.3s linear;
    &:active{transform: scale(0.85); box-shadow: 3px 2px 25px 1px rgba(0,0,0,0.25);} `
    const MenuContainer = styled.div`display:flex;`
    const MenuDiv= styled.div`border:1px solid gray; display:flex; margin: 3px; width:60%; box-shadow: gray 0 2px 4px `
    const MenuDiv1= styled.div`border:1px solid gray; display:flex; margin:3px; width:40%; box-shadow: gray 0 2px 4px`
    const MenuImg= styled.img`width:75px;`
    const MenuIcon= styled.img`margin:20px 5px 5px 5px`
    const Form= styled.form`margin: 5px 0 0 5px; `
    const Input= styled.input`margin: 5px 0 0 5px; `

    
    return(
        <Section>
            <div><Title>Image Forgery Detection</Title></div>
            <div>
            <MenuButton>File</MenuButton>
            <MenuButton>Tools</MenuButton>
            <MenuButton>View</MenuButton>
            <MenuButton>Help</MenuButton>
            </div>
            <MenuContainer>
                <MenuDiv>
                    <MenuImg src={require("../Images/kpmg-logo.png")}/>
                    <div>
                        <Form>
                            <label>Evidence Image:</label>
                            <Input type="text"></Input>
                        </Form>
                        <div>
                        <div style={{display: "inline-block", position: "relative"}}>
                            <MenuIcon src={require("../Images/folder-arrow.png")}/>
                            <input type="file" name="" id="" style={{position:"absolute", top: "0", left: "0", width: "100%", height: "100%", zIndex: "2", opacity: "0", cursor: "pointer"}} onChange={e=>{
                                console.log(e.target.files[0])
                                setSelectedImage(e.target.files[0])}} />
                        </div>
                        <MenuIcon src={require("../Images/delete.png")}/>
                        <MenuIcon src={require("../Images/folder_up.png")}/>
                        <MenuIcon src={require("../Images/navigate_beginning.png")}/>
                        <MenuIcon src={require("../Images/navigate_left.png")}/>
                        <MenuIcon src={require("../Images/navigate_right.png")}/>
                        <MenuIcon src={require("../Images/navigate_end.png")}/>
                        <MenuIcon src={require("../Images/folder_up.png")}/>
                        <MenuIcon src={require("../Images/folder_delete.png")}/>
                        <MenuIcon src={require("../Images/reload.png")}/>
                        <MenuIcon src={require("../Images/refresh.png")}/>

                        </div>
                    </div>
                </MenuDiv>
                {/* <MenuDiv1>
                    <MenuImg src={require("../Images/blank-gray-img.png")}/>
                    <div>
                        <Form>
                            <label>Reference Image:</label>
                            <Input type="text"></Input>
                        </Form>
                        <div>
                        <MenuIcon src={require("../Images/folder-arrow.png")}/>
                        <MenuIcon src={require("../Images/delete.png")}/>
                        <MenuIcon src={require("../Images/folder_up.png")}/>
                        <MenuIcon src={require("../Images/gray-navigate_beginning.png")}/>
                        <MenuIcon src={require("../Images/gray-navigate-left.png")}/>
                        <MenuIcon src={require("../Images/gray-navigate-right.png")}/>
                        <MenuIcon src={require("../Images/gray-navigate_end.png")}/>
                        <MenuIcon src={require("../Images/folder_up.png")}/>
                        <MenuIcon src={require("../Images/folder_delete.png")}/>
                        <MenuIcon src={require("../Images/reload.png")}/>
                        <MenuIcon src={require("../Images/folder-folder.png")}/>
                        <MenuIcon src={require("../Images/checkbox.png")}/>

                        </div>
                    </div>
                </MenuDiv1> */}
               
            </MenuContainer>
        </Section>
        
    )
}