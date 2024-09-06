import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: papayawhip;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: red;
`;

export const Img = styled.Image`
  height: 300px;
  object-fit: contain;
`;

export const Btn = styled.TouchableOpacity`
  border-radius: 5px;
  align-self: center;
  background-color: #f6ba35;
    transition: all .5s;
    text-transform: uppercase;
    padding:10px 10px;
    margin-bottom: 50px;
`;

export const BtnText = styled.Text`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
`;
export const TextHeader = styled.Text`
color:black;
font-weight: 600;
font-size: 20px;
margin-top:30px;
`

