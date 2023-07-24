import React, { useEffect, useState } from "react";
import { Styled, styled } from "styled-components";
import Tree, { elements } from "../Components/TreeComponent";
import exifr from 'exifr';
import canon from "../Images/home-page.png"


const Section = styled.div` height:calc(100vh - 190px) `
const ContentDiv = styled.div`display:flex;height:100%;`
const Filter = styled.div`border:1px solid gray; display:flex; margin: 3px; width:25%; box-shadow: gray 0 2px 4px; height: 100%; overflow-y: auto; padding: 10px 10px; `
const Data = styled.div`border:1px solid gray; display:flex; flex-direction: column; margin:3px; width:75%; box-shadow: gray 0 2px 4px; height: 100%; overflow-y:auto;`
const SideTreeDiv = styled.div`border:1px solid gray; width:25%; box-shadow: gray 0 2px 4px; `
const Project = styled.div`border:1px solid gray; height:34.5%;font-family: Poppins; `
const Title = styled.div`background-color: rgb(192, 227, 239);border-bottom: 1px solid black;`
const H5 = styled.h5`padding:0; margin:0`
const EditingTool = styled.img`margin:20px 5px 5px 5px;`
const TextArea = styled.textarea`width:98.3%; height:170px`

const Table = styled.table`width:100%;font-family: 'Courier New', Courier, monospace;`
const TdRed = styled.td`color: red;;`
const TdYellow = styled.td`color: rgb(208, 208, 7);`
const VIHeader = styled.div`margin-top: 10px; font-family: Poppins;
padding: 10px 20px;
display: flex; align-items: center;justify-content: end; gap: 15px;
border-bottom: 1px solid #ddd;
input[type=number] {
    width: 50px;
} 
`
const VIFooter = styled.div`margin-top: 10px; font-family: Poppins;
padding: 10px 20px;
display: flex; align-items: center; gap: 15px;
border-top: 1px solid #ddd;
input[type=number] {
    width: 50px;
}
`
const Button = styled.button`
background: #ddd; border: none; outline: none; padding: 10px 20px; border-radius: 6px; cursor: pointer;
`

export default function VisualInspection({ selectedImage }) {

    return (
        <Data>
            <VIHeader>
                <Button role="button">Swap</Button>
                <div style={{ display: "flex", gap: "5px" }}>
                    <label htmlFor="">View:</label>
                    <select name="" id="" style={{ background: "#ddd" }}>
                        <option value="" selected>Processed (Evidence)</option>
                    </select>
                    <input type="range" name="" id="" />
                    <select name="" id="">
                        <option value="" selected>25.00</option>
                    </select>
                </div>
                <Button role="button">+</Button>
                <Button role="button">-</Button>
                <Button role="button">100</Button>
                <Button role="button">Fit</Button>
            </VIHeader>

            {
                selectedImage ?
                    <div style={{ width: "100%", height: "calc(100% - 132px)", overflow: "auto" }}>
                        <img src={URL.createObjectURL(selectedImage)} alt="" style={{ width: "auto", height: "auto" }} />
                    </div>
                    :
                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        Loaded Image will be visible here
                    </div>
            }
            <VIFooter>
                <div style={{ display: "flex", gap: "5px" }}>
                    <label htmlFor="">Highlight:</label>
                    <input type="range" name="" id="" />
                    <input type="number" name="" id="" />
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                    <label htmlFor="">Midtones:</label>
                    <input type="range" name="" id="" />
                    <input type="number" name="" id="" />
                </div>
                <div style={{ display: "flex", gap: "5px" }}>
                    <label htmlFor="">Shadow:</label>
                    <input type="range" name="" id="" />
                    <input type="number" name="" id="" />
                </div>
                <Button role="button">Reset</Button>
            </VIFooter>
        </Data>
    )
}


{/* <Project>
                        <Title><H5>Project</H5></Title>
                        <EditingTool src={require("../Images/blue-flag.png")}/>
                        <EditingTool src={require("../Images/delete.png")}/>
                        <EditingTool src={require("../Images/pen-paper.png")}/>
                        <EditingTool src={require("../Images/paper-sun.png")}/>
                        <EditingTool src={require("../Images/folder-arrow.png")}/>
                        <EditingTool src={require("../Images/save-icon.png")}/>
                        <EditingTool src={require("../Images/paper-hand.png")}/>
                        <TextArea></TextArea>
                        <i>Select a bookmark to view and edit the description</i>
                    </Project> */}