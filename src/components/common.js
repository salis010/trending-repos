import styled from 'styled-components'

export const Img = styled.img`
    margin: 0 0 0 0.5rem;
    cursor: pointer;

    @media only screen and (min-width: ${props => props.theme.breakpoint}) {
        margin: 0 1rem;
    }
`

export const P = styled.p`
    font-size: 1.2rem;
    margin: 0.3rem;
    color: RGB(70, 70, 70);
`
