import React from 'react';
import myPhoto from '../../../assets/images/myPhoto.jpg';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <MainFlexSlyled>
                <WrapperTexts>
                    <span>Hi There</span>
                    <h2>I am Aleksandr Ishutin</h2>
                    <h1>A Web Developer. </h1>
                </WrapperTexts>
                <Photo src={myPhoto} alt="My photo"/>
            </MainFlexSlyled>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    padding: 200px 150px;
    background-color: #1F1F20;
    min-height: 100vh;
    @media (max-width: 1200px) {
        padding: 75px 50px;
    }
    @media (max-width: 992px) {
        padding: 50px 25px;
    }
    @media (max-width: 576px) {
        padding: 5px;
    }

`
const MainFlexSlyled= styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

`
const Photo = styled.img`
    max-width: 350px;
    min-height: 430px;
    border-radius: 5px;
    object-fit: cover;
    @media (max-width: 355px) {
        max-width: 175px;
        min-height: 215px;
    }


`
const WrapperTexts = styled.div`
    color: #fff;
    font-weight: 400;
    max-width: 563px;
    min-height: 132px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
@media (max-width: 992px) {
    max-width: 400px;
    text-align: center;
}
    span {
        font-size: 14px;
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
    }

    h1 {
        font-size: 27px;

    }
    @media (max-width: 768px){
        max-width: 360px;
        text-align: center;
        margin-bottom: 25px;
    }
    
    
`