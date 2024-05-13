import React from 'react';
import myPhoto from '../../../assets/images/myPhoto.jpg';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <WrapperTexts>
                    <span>Hi There</span>
                    <h2>I am Aleksandr Ishutin</h2>
                    <h1>A Web Developer. </h1>
                </WrapperTexts>
                <Photo src={myPhoto} alt="My photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    padding: 200px 150px;
    background-color: #1F1F20;
    min-height: 100vh;
`
const Photo = styled.img`
    max-width: 350px;
    border-radius: 5px;
    min-height: 430px;
    object-fit: cover;

`
const WrapperTexts = styled.div`
    color: #fff;
    font-weight: 400;
    max-width: 563px;
    min-height: 132px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
`