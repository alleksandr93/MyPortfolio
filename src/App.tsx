import styled from 'styled-components';
import {HeaderComponent} from './Layout/Header/Header';
import {Main} from './Layout/section/Main/Main';
import React from 'react';
import {Skills} from './Layout/section/Skills/Skills';


function App() {
    return (
        <>
            <Wrapper>
                <Main/>
                <Skills/>
            </Wrapper>
        </>
    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
`