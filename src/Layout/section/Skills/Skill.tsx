import React from 'react';
import {Icon} from '../../../component/Icon/Icon';
import styled from 'styled-components';
import {FlexWrapper} from '../../../component/FlexWrapper';
import rec from '../../../assets/images/Rectangle 4.png'

type SkillPropsType = {
    iconId: string
    title:string
    text:string
}
export const Skill: React.FC<SkillPropsType> = ({iconId,title,text}) => {
    return (
        <SkillWrapper>
            <FlexWrapper direction={'column'} align={'center'}>
                <RestanglImg src={rec} alt=""/>
                <Icon iconId={iconId} width={'50'} height={'50'} viewBox={'0 0 50 50'}/>
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{text}</SkillText>
            </FlexWrapper>

        </SkillWrapper>
    );
};

const SkillWrapper = styled.div`
    max-width: 380px;
    min-height: 338px;
    padding: 62px 20px 40px 20px;
    position: relative;
    display: flex;
    
`
const RestanglImg = styled.img`
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%);
`
const SkillTitle = styled.h4`
    margin-top: 71px;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 700;
text-transform: uppercase;
`
const SkillText = styled.p`
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;

   
`
