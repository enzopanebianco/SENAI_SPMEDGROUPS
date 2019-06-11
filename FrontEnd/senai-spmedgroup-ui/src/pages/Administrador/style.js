import styled from 'styled-components';

export const LeftContainer = styled.div`
    float:left;
    height:756px;
    background:midnightblue;
    width:400px;
    position:absolute;
    top:0;
    border-right:1px solid blueviolet;
    
`;
export const Margin = styled.div`
    margin:0;
   
padding:10px;
`;

export const Top = styled.div`
    z-index:-1;
    border-bottom:3px solid black;
    width:100%;
    background-image:linear-gradient(to right, blueviolet,violet);
    position:absolute;
    top:0;
    height:40px;

`;
export const TopTitle = styled.h2`
    font-size:21pt;
    color: #000;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight:bold;
    color:white;
    text-shadow:2px 2px 0px blue;
    position:absolute;
    top:-20px;
    left:50%;
    z-index:-1;
`;
export const ImgPerfil = styled.img`
    width:200px;
    height: 200px;
    position:absolute;
    top:100px;
    left:80px;
    background:blueviolet;
    border:3px solid black;
    border-radius:100px;
`;
export const EndPoints = styled.div`
    
    position: relative;
    top:50%;
    background:#232370;
    ul{
        list-style-type:none;
        text-decoration:none;
        color:white;
        
    }
    ul ul{
        display:none;
        
        padding:2px;
       
    }
    ul ul li a{
        list-style-type:orange;
        padding:2px;
        font-size:10pt;
        border-bottom:1px solid blueviolet;
    }
    ul ul li :hover{
        background:midnightblue;
        cursor:pointer;
        border-bottom-color:orange;
    }
`;
export const Container = styled.div`
    background:#272780;
    width:100%;
    position:absolute;
    top:39px;
    right:0;
    z-index: -3;
    height:716px;
`;
export const IconMenu = styled.div`
    
    color:white;
    margin-left:30px;
`;