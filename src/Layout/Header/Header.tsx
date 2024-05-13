import React from 'react';
import styled from 'styled-components';
import {Logo} from '../../component/Logo/Logo';
import {Menu} from '../../component/Menu/Menu';
import {FlexWrapper} from '../../component/FlexWrapper';

export const HeaderComponent = () => {
    return (
        <Header>
            <FlexWrapper justify={'space-around'}>
                <Logo/>
                <Menu/>
            </FlexWrapper>
        </Header>
    );
};

const Header = styled.header`
    display: flex;
position: fixed;
    background-color: transparent;
`
