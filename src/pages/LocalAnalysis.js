import React, { useEffect, useState } from "react";
import { Styled, styled } from "styled-components";
import Tree, { elements } from "../Components/TreeComponent";
import canon from "../Images/home-page.png"


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

export default function LocalAnalysis({ selectedImage }) {

    return (


                <Data>
                    <>
                        <VIHeader>
                            <Button role="button">Swap</Button>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <label htmlFor="">View:</label>
                                <select name="" id="" style={{ background: "#ddd" }}>
                                    <option value="" selected>Unprocessed VS Processed (Evidence)</option>
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
                    </>
                    <div style={{ display: "flex", flex: "1", gap: "10px", height: "calc(100% - 132px)" }}>
                        <div style={{ height: "100%", width: "calc(50% - 5px)" }}>
                            <header style={{ padding: "10px 30px", background: "#ddd" }} />
                            <div style={{ width: "100%", height: "calc(100% - 60px)", overflow: "auto" }}>
                                <img src={selectedImage?URL.createObjectURL(selectedImage):""} alt="" style={{ width: "auto", height: "auto" }} />
                            </div>
                        </div>
                        <div style={{ height: "100%", width: "calc(50% - 5px)" }}>
                            <header style={{ padding: "10px 30px", background: "#ddd" }} />
                            <div style={{ width: "100%", height: "calc(100% - 60px)", overflow: "auto" }}>
                                <img src={selectedImage?URL.createObjectURL(selectedImage):""} alt="" style={{ width: "auto", height: "auto" }} />
                            </div>
                        </div>
                    </div>
                    <VIFooter>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <label htmlFor="">Mode:</label>
                            <select name="" id="" style={{ background: "#ddd" }}>
                                    <option value="" selected>MSE</option>
                                </select>
                        </div>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <label htmlFor="">Midtones:</label>
                            <input type="range" name="" id="" />
                            <input type="number" name="" id="" />
                        </div>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <label htmlFor="">Quality(0=auto):</label>
                            <input type="range" name="" id="" />
                            <input type="number" name="" id="" />
                        </div>
                        <div style={{ display: "flex", gap: "5px" }}>
                            <label htmlFor="">Scale(0=auto):</label>
                            <input type="range" name="" id="" />
                            <input type="number" name="" id="" />
                        </div>
                        <Button role="button">Reset</Button>
                    </VIFooter>
                    {/* {
                        selected === "Visual Inspection" ?
                            <>
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
                                <>
                                    {
                                        selectedImage ?
                                            <div style={{ width: "100%", height: "calc(100% - 132px)", overflowY: "auto" }}>
                                                <img src={URL.createObjectURL(selectedImage)} alt="" style={{ width: "100%", height: "auto" }} />
                                            </div>
                                            :
                                            <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                Loaded Image will be visible here
                                            </div>
                                    }
                                </>
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
                            </>
                            :
                            <Table border="1" cellpadding="0" cellspacing="0" >
                                <tr><th>Id</th><th>Name</th><th>Evidence Image Value</th><th>Evidence Image Warning</th><th>Ref</th></tr>
                                <tr><td>1</td><td>Filename</td><td>nikonD50.JPG</td><td></td><td></td></tr>
                                <tr><td>2</td><td>Full Path</td><td>D:\demo\nikonD50.JPG</td><td></td><td></td></tr>
                                <tr><td>3</td><td>MD5</td><td>456456af564564acdeca36</td><td></td><td></td></tr>
                                <tr><td>4</td><td>Format</td><td>JPEG</td><td></td><td></td></tr>
                                <tr><td>5</td><td>Format Description</td><td>JPEG - JIFF</td><td></td><td></td></tr>
                                <tr><td>6</td><td>Image Encoded Size</td><td>2749 x 1827</td><TdRed>Odd width(2749 is not multipe of 4)<br />Odd height(2749 is not multipe of 4)<br />Unknown resolution for this device (274 x 1027 is not listed at ht)</TdRed><td></td></tr>
                                <tr><td>7</td><td>Image Displayed Size</td><td>2749 x 1827</td><td></td><td></td></tr>
                                <tr><td>8</td><td>Image Normalized Size</td><td>2749 x 1827</td><td></td><td></td></tr>
                                <tr><td>9</td><td>Aspect Ratio</td><td>1.50</td><td></td><td></td></tr>
                                <tr><td>10</td><td>Number of Channels</td><td>3</td><td></td><td></td></tr>
                                <tr><td>11</td><td>BPP</td><td>24</td><td></td><td></td></tr>
                                <tr><td>12</td><td>Thumbnail Size</td><td>564 x 372</td><td></td><td></td></tr>
                                <tr><td>13</td><td>Thumbnail Normalized Size</td><td>564 x 372</td><td></td><td></td></tr>
                                <tr><td>14</td><td>Preview Size</td><td>256 x 170</td><td></td><td></td></tr>
                                <tr><td>15</td><td>Preview Normalized Size</td><td>256 x 170</td><td></td><td></td></tr>
                                <tr><td>16</td><td>Exif rotate tag</td><td>Horizontal (normal)</td><td></td><td></td></tr>
                                <tr><td>17</td><td>Number of Exif fields</td><td>58</td><td></td><td></td></tr>
                                <tr><td>18</td><td>Number of MakerNotes fields</td><td>76</td><td></td><td></td></tr>
                                <tr><td>19</td><td>Number of IPTC fields</td><td>0</td><td></td><td></td></tr>
                                <tr><td>20</td><td>Number of XMP fields</td><td>2</td><td></td><td></td></tr>
                                <tr><td>21</td><td>Number of Photoshop fields</td><td>0</td><td></td><td></td></tr>
                                <tr><td>22</td><td>Number of ICC fields</td><td>0</td><td></td><td></td></tr>
                                <tr><td>23</td><td>Exif Make</td><td>NIKON CORPORATION</td><td></td><td></td></tr>
                                <tr><td>24</td><td>Exif Model</td><td>NIKON D50</td><td></td><td></td></tr>
                                <tr><td>25</td><td>Exif Software</td><td>Windows Photo Editor 10.0.100.11</td><TdRed>EXIF Software is an editing application</TdRed><td></td></tr>
                                <tr><td>26</td><td>Serial Number</td><td></td><td></td><td></td></tr>
                                <tr><td>27</td><td>JPEG Quality</td><td>90</td><td></td><td></td></tr>
                                <tr><td>28</td><td>JPEG QT is standard IJG</td><td>true</td><td></td><td></td></tr>
                                <tr><td>29</td><td>JPEG QT Hash</td><td>6D025456456SD465SSGSSFV0FRWE</td><TdYellow>Compression signature not found in the Db for this camera</TdYellow><td></td></tr>
                                <tr><td>30</td><td>Jpeg Chroma Subsampling</td><td>4:2:0 (2, 2)</td><td></td><td></td></tr>
                                <tr><td>31</td><td>JPEG HT is standard IJG</td><td>true</td><td></td><td></td></tr>
                                <tr><td>32</td><td>Exif DateTimeOriginal</td><td>2014:07:28 20:22:09</td><td></td><td></td></tr>
                                <tr><td>33</td><td>Exif CreateDate</td><td>2014:07:28 20:22:09</td><td></td><td></td></tr>
                                <tr><td>34</td><td>Exif ModifyDate</td><td>2023:07:08 00:25:09</td><TdRed>EXIF ModifyDate differs significantly from Exif DateTimeOriginal</TdRed><td></td></tr>
                                <tr><td>35</td><td>File Size</td><td>1.1852 MB (1242747 bytes)</td><td></td><td></td></tr>
                            </Table>
                    } */}
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