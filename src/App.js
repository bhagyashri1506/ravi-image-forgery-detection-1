import React, { useEffect, useState } from "react";
import { Styled, styled } from "styled-components";
import Navbar from "./Components/Navbar";
import LocalAnalysis from "./pages/LocalAnalysis";
import FileFormat from "./pages/FileFormat";
import Tree, { elements } from "./Components/TreeComponent";
import exifr from 'exifr';
import { Route, Routes, useLocation } from "react-router-dom";
import VisualInspection from "./pages/VisualInspection";
import Login from "./pages/Login";


const Section = styled.div` height:calc(100vh - 190px) `
const ContentDiv = styled.div`display:flex;height:100%;`
const Filter = styled.div`border:1px solid gray; display:flex; margin: 3px; width:25%; box-shadow: gray 0 2px 4px; height: 100%; overflow-y: auto; padding: 10px 10px; `

function App() {
  const [metaData, setMetaData] = useState(null)
  const [exifData, setExifData] = useState(null)
  const location = useLocation()
  console.log(location.pathname)
  const [selectedImage, setSelectedImage] = useState(null)
  const [selected, setSelected] = useState("Visual Inspection")
  const getMetaData = async (file) => {
    try {
      const allData = await exifr.parse(file,true);
      console.log('allpasrse',allData);

      const exifData = await exifr.parse(file, { exif: true });
      console.log('exifparse',exifData);
      setExifData(allData)
    } catch (error) {
      console.error('Error parsing metadata:', error);
    }
  };
  useEffect(() => {
    if (selectedImage) {
      async function test(file) {
        // const file = event.target.files[0];

        // Check if the selected file is an image
        if (file.type && file.type.startsWith('image/')) {
          const reader = new FileReader();

          reader.onload = function (readerEvent) {
            const image = new Image();
            image.onload = function () {
              // Access the image metadata
              setMetaData({
                filename: file.name,
                type: file.type,
                size: file.size,
                width: this.width,
                height: this.height,
                modified: (new Date(file.lastModified)).toUTCString()
              })
              console.log("file", this, file);
            };
            image.src = readerEvent.target.result;
          };

          reader.readAsDataURL(file);
        }
      }
      test(selectedImage)
      getMetaData(selectedImage)
    }
  }, [selectedImage])
  return (
    <div className="App">
      {location.pathname != "/" && <Navbar setSelectedImage={setSelectedImage} />}
      <Section>
        <ContentDiv>
          {location.pathname != "/" && <Filter>
            <Tree elements={elements} selected={selected} setSelected={setSelected} />
          </Filter>}
          <Routes>
            <Route path="/" element={
              <Login />
            } />
            <Route path="/local-analysis" element={
              <LocalAnalysis selectedImage={selectedImage} />
            } />
            <Route path="/file-format" element={
              <FileFormat selectedImage={selectedImage} metaData={metaData} exifData={exifData} />
            } />
            <Route path="/visual-inspection" element={
              <VisualInspection selectedImage={selectedImage} />
            } />
          </Routes>
        </ContentDiv>
      </Section >
    </div >
  );
}

export default App;
