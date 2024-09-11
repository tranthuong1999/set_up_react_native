import styled from 'styled-components/native';

export const Img = styled.Image`
  height: 200px;
  object-fit: fill ;
  border-radius: 8px;
`;

export const ListCourse = styled.View`
 display: flex;
 flex-direction: column;
`;

export const ItemCourse = styled.View`
    margin-bottom: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all .5s;
    width: 100%;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, .125);  
    shadow-color: rgba(0, 0, 0, 0.2);
  shadow-offset: 0px 0px;
  shadow-opacity: 0.8;
  shadow-radius: 10px;
`;
export const CardBody = styled.View`
`

export const TitleCourse = styled.View`
position: absolute;
background-color: #41b294;
top: 47%;
padding: 4px 16px;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;

`

export const TextDesc = styled.Text`
font-size: 16px;
font-weight: bold;
color: black;
`;
export const CardDesc = styled.View`
display: flex;
flex-direction: row;
align-items: center;
padding-bottom: 30px;
padding-left: 20px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,.125);
`;

export const CardBotom = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
padding:5px 20px;
align-items: center;
`