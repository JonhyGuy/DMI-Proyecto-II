import styled from 'styled-components/native'

export const StyledViewCamera = styled.View`
    flex: 1;
    width: 100%;
    background-color: transparent;
    flex-direction: row;
`;

export const StyledToolCameraButtons = styled.TouchableOpacity`
    border-radius: 50px;   
    height: 25px;
    width: 25px;
    margin-bottom: 15px;
`;

export const StyledToolCameraLeft = styled.View`
    position: absolute;
    left: 5%;
    top: 10%;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledTakePhoto = styled.View`
    position: absolute;
    bottom: 0;
    flexDirection: row;
    flex: 1;
    width: 100%;
    padding: 20px;
    justify-content: center;
    align-items: center;
`;

export const StyledTakePhotoButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 40;
    width: 100;
    border-radius: 100;
    height: 100;
    background-color: white;
    shadow-color: black;
    hadow-offset: {
        width: 0;
        height: 6;
    };
    shadow-opacity: 0.37;
    shadow-radius: 7.49;
    elevation: 12;
`;

export const StyledTextCenter = styled.Text`
    text-align: center;
`;

