import styled from 'styled-components';

export const LeftContainer = styled.div`
    float:right ;
    height:756px;
    background:midnightblue;
    width:400px;
    position:absolute;
    top:0;
    border-right:1px solid blueviolet;
  
    
`;

export const Top = styled.div`
    z-index:-1;
    border-bottom:2px solid blueviolet;
    width:100%;
    background: blueviolet;
    position:absolute;
    top:0;
    height:60px;

`;
export const TopTitle = styled.h2`
    font-size:21pt;
    color: #000;
    font-weight:bold;
    color:white;
    text-transform:uppercase;
    position:absolute;
    top:10px;
    left:50%;
    z-index:-1;
    
    ::first-letter{
        color:blueviolet;   
        background: white;
    }

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
        font-size:14pt;
        text-align:center;
    }
    ul ul{
        display:none;
        
        padding:2px;
       
    }
    ul ul li a{
        color:white;
        list-style-type:none;
        outline:none;
        text-decoration:none;
        padding:2px;
        font-size:12pt;
        
    }
    ul ul li :hover{
        background:midnightblue;
        cursor:pointer;
        border-bottom-color:orange;
    }
`;
export const Container = styled.div`
    z-index:-3;
    width:100%;
    position:absolute;
    top:39px;
    right:0;
    height:716px;
`;
export const IconMenu = styled.div`
    
    color:white;
    margin-left:30px;
`;
export const TextP = styled.p`
    color:white;
    background: #5910aa;
    width:80px;
    font-weight:lighter;
    font-size:10pt;
    border-radius:0px 0px 10px 0px;
    :hover{
        color:orange;
        cursor: pointer;
        
    }
`;
export const Nome = styled.p`
    color:white;
    position:absolute;
    bottom:55%;
    background: darkviolet;
    
    text-align:center;
    text-transform:uppercase;
    
    left:40%;
`;
export const Exit = styled.p`
      position:absolute;
    bottom:50%;
    left:40%;
    color:orange;
`;