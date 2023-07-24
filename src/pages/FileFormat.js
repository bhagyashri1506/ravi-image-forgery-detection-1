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

export default function FileFormat({ metaData, exifData }) {
    console.log("metaData", metaData, exifData)
    return (
        <>
            <Data>
                <Table border="1" cellpadding="0" cellspacing="0" >
                    <tr><th>Id</th><th>Name</th><th>Evidence Image Value</th></tr>
                    <tr><td>1</td><td>Filename</td><td>{metaData?.filename}</td></tr>
                    <tr><td>2</td><td>Exif ModifyDate</td><td>{new Date(exifData?.ModifyDate?exifData.ModifyDate:metaData?.modified).toUTCString()}</td></tr>
                    <tr><td>3</td><td>File Size</td><td>{parseFloat(metaData?.size/1024/1024).toFixed(2)} MB ({metaData?.size} bytes)</td></tr>
                    <tr><td>4</td><td>Format</td><td>{metaData?.type?.split("/")[1]?.toUpperCase()}</td></tr>
                    {/* <tr><td>5</td><td>Format Description</td><td>JPEG - JIFF</td></tr> */}
                    <tr><td>5</td><td>Image Dimensions</td><td>{`${metaData?.width} x ${metaData?.height}`}</td></tr>
                    {/* <tr><td>7</td><td>Image Displayed Size</td><td>2749 x 1827</td></tr>
                    <tr><td>8</td><td>Image Normalized Size</td><td>2749 x 1827</td></tr>
                    <tr><td>9</td><td>Aspect Ratio</td><td>1.50</td></tr>
                    <tr><td>10</td><td>Number of Channels</td><td>3</td></tr>
                    <tr><td>11</td><td>Brightness Value</td><td>{exifData?.BrightnessValue}</td></tr>
                    <tr><td>12</td><td>Thumbnail Size</td><td>564 x 372</td></tr>
                    <tr><td>13</td><td>Thumbnail Normalized Size</td><td>564 x 372</td></tr>
                    <tr><td>14</td><td>Preview Size</td><td>256 x 170</td></tr>
                    <tr><td>15</td><td>Preview Normalized Size</td><td>256 x 170</td></tr>
                    <tr><td>16</td><td>Exif rotate tag</td><td>Horizontal (normal)</td></tr> */}
                    {/* <tr><td>17</td><td>Number of Exif fields</td><td>58</td></tr>
                    <tr><td>18</td><td>Number of MakerNotes fields</td><td>76</td></tr>
                    <tr><td>19</td><td>Number of IPTC fields</td><td>0</td></tr>
                    <tr><td>20</td><td>Number of XMP fields</td><td>2</td></tr>
                    <tr><td>21</td><td>Number of Photoshop fields</td><td>0</td></tr>
                    <tr><td>22</td><td>Number of ICC fields</td><td>0</td></tr> */}
                    <tr><td>6</td><td>Exif Version</td><td>{exifData?.ExifVersion}</td></tr>
                    <tr><td>7</td><td>Exif Make</td><td>{exifData?.Make}</td></tr>
                    <tr><td>8</td><td>Exif Model</td><td>{exifData?.Model}</td></tr>
                    <tr><td>9</td><td>Exif Software</td><td>{exifData?.Software}</td></tr>
                    {/* <tr><td>27</td><td>JPEG Quality</td><td>90</td></tr>
                    <tr><td>28</td><td>JPEG QT is standard IJG</td><td>true</td></tr>
                    <tr><td>29</td><td>JPEG QT Hash</td><td>6D025456456SD465SSGSSFV0FRWE</td><TdYellow>Compression signature not found in the Db for this camera</TdYellow></tr>
                    <tr><td>30</td><td>Jpeg Chroma Subsampling</td><td>4:2:0 (2, 2)</td></tr>
                <tr><td>31</td><td>JPEG HT is standard IJG</td><td>true</td></tr> */}
                    <tr><td>10</td><td>Exif DateTimeOriginal</td><td>{new Date(exifData?.DateTimeOriginal).toUTCString()}</td></tr>
                    <tr><td>11</td><td>Exif CreateDate</td><td>{new Date(exifData?.CreateDate?exifData.CreateDate:metaData?.modified).toUTCString()}</td></tr>
                  {Object.entries({...(exifData?exifData:{})}).filter(([key,values])=>(typeof values=="string")||(typeof values=="number")).map(([key,values],i)=>(<tr><td>{i+12}</td><td>{key}</td><td>{values}</td></tr>))}
                </Table>
            </Data>
        </>
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