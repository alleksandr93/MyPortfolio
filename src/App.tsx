import './App.css';
import styled from 'styled-components';
import {HeaderComponent} from './Layout/Header/Header';
import {Main} from './Layout/section/Main/Main';


function App() {
    return (
    <Wrapper>
        {/*<HeaderComponent/>*/}
        <Main/>
    </Wrapper>

    );
}

export default App;

const Wrapper = styled.div`
    max-width: 1440px;
`