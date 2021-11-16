import styled from 'styled-components/native'



// Styles of Tareas
export const StyledViewTareas = styled.View`
    position: absolute;
    flex: 1;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    top: 0;
    background-color: #F1DCF7;
`;
export const StyledButtonAdd = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #CC74EC;
    justify-content: center;
    align-items: center;
`;


export const StyledInput = styled.TextInput`
    height: 50px;
    padding: 10px;
    background-color: white;
    border: 1px solid black
    
`;

// Stled list of Tareas

export const StyledScrollView = styled.ScrollView`
    padding: 0;
    margin: 0;
`;
export const StyledTitleContainer = styled.View`
    width: 100%;
    height: auto;
    align-items: center;
    margin-top: 15px;
`;
export const StyledTitleText = styled.Text`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const StyledElementList = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    border-bottom-width: 3px;
`;

export const StyledDeleteButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #D6231E;
    justify-content: center;
    border-radius: 20px;
    align-items: center;
`;


// Styles of Perfi

export const StyledViewContainer = styled.View`
    width: 100%;
    flex: 1;
    background-color: #F1DCF7;
`;

export const StyledContainerImage = styled.View`
    align-items: center;
    margin: 20px;
`;

export const StyledImage = styled.Image`
    width: 300px;
    height: 300px;
    border-radius: 200px;
    margin-top: 100px;
`;

export const StyledViewButtons = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    align-content: center;
`;

export const StyledContainerButtons = styled.View`
    flex-direction: row;
`;

export const StyledTextButton = styled.Text`
    color: white;
    font-size: 20px;
    text-align: center;
`;

export const StyledContainerCamera = styled.View`
    width: 100%;
    height: 100%;
`;

export const StyledButtonBack = styled.TouchableOpacity`
    width: 100%;
    height: 7%;
    background-color: #CC74EC;
    justify-content: center;
`;

// Styles of Camera

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

export const StyledButtonOut = styled.TouchableOpacity`
    background-color: #D6231E;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 20px;
`;
export const StyledTextOut = styled.TouchableOpacity`
    color: white;
    font-size: 14px;
    font-weight: bold;
`;
