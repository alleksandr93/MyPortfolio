import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';
import imageBorder from '../../../assets/images/Vector 2.png'
import {Skill} from './Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'center'}>
                    <Skill iconId={'html5'} title={'html5'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'css'} title={'css3'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'react'} title={'React'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'typescript'} title={'typescript'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'styledcomponents'} title={'styled components'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                    <Skill iconId={'figma'} title={'WEB design'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: #252527;
    color: #fff;
    padding: 100px 0;
   
`
const SectionTitle = styled.h3`
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;
    text-align: center;
    margin-bottom: 81px;
    position: relative;

    &:before {
        content: ' ';
        width: 55px;
        height: 1px;
        background-image: url(${imageBorder});
        position: absolute;
        left: 50%;
        top: 66px;
        transform: translateX(-50%);
    }
`


