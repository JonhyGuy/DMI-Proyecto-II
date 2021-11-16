import styled from 'styled-components/native';

export const StyledView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const StyledInput = styled.TextInput`
    font-size: 20px;
    color: gray;
    background-color: white;
    border-radius: 20px;
    margin: 15px;
    padding-left: 15px;
    width: 60%;
    height: 45px;

`;
export const StyledButtons = styled.TouchableOpacity`
    background-color: #cc74ec;
    width:60%;
    height:45px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin: 10px;

`;
export const StyledButtonText = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;
export const StyledText = styled.Text`
    padding: 10px;
    margin: 10px;
    color: #9E78E5;
    font-size: 24px;
`;

export const StyledImage = styled.Image`
    width: 200px;
    height: 200px;
    border-radius:  100px;
    margin-bottom: 30px;
`;