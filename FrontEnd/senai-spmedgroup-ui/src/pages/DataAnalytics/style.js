import styled from 'styled-components';

export const Container = styled.div`
    width:850px;
    margin-left:25%;
    `;
export const Titulo = styled.h2`
    color:white;
    border:1px solid #80bdde;
    text-shadow:1px 1px 1px gray;
    text-align:center;
    font-size:23pt;
    font-style:normal;
    background:#80e289;
`;
export const Tabela = styled.table`
    flex:1;
    
    margin-left:40px;
`;
export const TabelaH = styled.thead`
    color:white;
    background:#80bdde;
    font-size:11pt;
`;
export const TabelaR = styled.tr`
    font-weight:lighter;
    font-family:arial;
    position:relative;
    left:20px;
`;
export const TituloCadastrar = styled.h2`
    text-align:center;
    font-style:normal;
    background:#5581e0;
    border-left:3px solid #5590e9;
`;
export const ContainerFlex = styled.div`

    
    flex-direction:row;
    display:flex;
`;
export const CampoCadastro = styled.form`
    background-image:linear-gradient(to right,#5581e0,#5590e9);
    width:835px;
    height:457.5px;
    flex:1;
    //#5581e0
`;
export const CampoLabel = styled.label`
    padding:20px;
    display:flex;
    position:relative;
    left:33%;
    width:300px;
    top:20px;
    color:white;
    filter:opacity(95%);
`;
export const TextLabel = styled.label`
    position:relative;
    right:10px;
`;
export const Input = styled.input`
    border-radius:4px;
    background-image:linear-gradient(to right ,#7a9eeb,#5b9efb);
    border:0.01em solid white;
    color:white;
`;
export const BotaoCadastrar = styled.button`
    position:relative;
    left:40%;
    top:50px;
    background:white;
    border: 1px solid beige;
    width:70px;
    height:30px;
    font-weight:bold;
    text-transform:uppercase;
    color:#5581e0;
    border-radius:5px;
`;
export const Seletor = styled.select`
    border: 1px solid white;
    color:white;
    border-radius:10px;
    background:#5b9efb;
`;
