import React from 'react';
import styled from 'styled-components';

export const Menu = () => {
    return (
            <StaledNav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Testimony</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </StaledNav>
    );
};

const StaledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
}
`
