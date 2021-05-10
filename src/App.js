import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'








function App() {


  const [background, setBackground] = useState('blue')
  const [imageApp, setImageApp] = useState('data:image/png;base64,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')

  const setBackgroundApp = (prop, img) => {
    setBackground(prop)
    setImageApp(img)
  }


  const AppCont = styled.div`
display: inline-block;
background-color: yellow;
width: 100%;
height: 100%;
`

  const Header = styled.div`
display: flex;
background-color: blue;
width: 100%;
height: 10vh;
text-align: center;
justify-content: center;
align-items: center;
`

  const Main = styled.div`
display: flex;
background-color: orange;
width: 100%;
height: 80vh;
text-align: center;
justify-content: center;
align-items: center;
`

  const Footer = styled.div`
display: flex;
background-color: ${background};
width: 100%;
height: 100%;
height: 10vh;
text-align: center;
justify-content: center;
align-items: center;
`

  const AppList = styled.ul`
display: flex;
width: 100%;
height: auto;
text-align: center;
justify-content: center;
align-items: center;
padding: 10px;
flex-wrap: wrap;
z-index: 10;
list-style-type: square;

`

  const AppItem = styled.li`
background-color: purple;
width: auto;
height: auto;
font-size: 34px;
margin: 25px;
`
  const ImageDiv = styled.div`
background-image: url(${imageApp});
width: 50%;
height: 50%;
font-size: 34px;
margin: 25px;
position: absolute;
z-index:7;
`
  const AppImage = styled.image`
background-image: url(${imageApp});
width: 50%;
margin: 10px;


z-index:5;
opacity: 0.8;



`



  return (
    <AppCont>
      <Header>

        Bradley Mulick
      </Header>
      <Main>

        <AppList>
          <AppItem onMouseOver={() => setBackgroundApp("red", "https://media.istockphoto.com/photos/chicken-sunset-picture-id872646276?k=6&m=872646276&s=612x612&w=0&h=o8KfMxQbpRz_4rBOA0tnSIlPbP9XCtdmfCNlElRD5-c=")}>
            Utah County Beekeepers
            </AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("yellow")}>
            NowOsa
          </AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("grey")}>V-Trade</AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("grey")}>Copper Miners Rest</AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("yellow")}>iFishIt</AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("yellow", "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350")}>Liquid Money</AppItem>
          <AppItem onMouseOver={() => setBackgroundApp("black", "https://media.istockphoto.com/photos/chicken-sunset-picture-id872646276?k=6&m=872646276&s=612x612&w=0&h=o8KfMxQbpRz_4rBOA0tnSIlPbP9XCtdmfCNlElRD5-c=")}>APPLICATION APPLICATION</AppItem>
        </AppList>
        <ImageDiv>
          <AppImage>
            {/* <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt="Logo" /> */}
          </AppImage>

        </ImageDiv>
      </Main>
      <Footer>
        FOOOT
      </Footer>
    </AppCont>
  );



}

export default App;


