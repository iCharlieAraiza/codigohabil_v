import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    @media (min-width:480px) { 
        /* smartphones, Android phones, landscape iPhone */ 
        padding: 0 1rem;
    }
    @media (min-width:801px) { 
        /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        width: 720px;
        margin: 0 auto;
    }
    `;

export default Container;

