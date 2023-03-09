import styled from "styled-components";

export const Rodape = styled.div `

background-color: #29323c;
color: white;
padding: 1rem;
text-align: center;

`

export const List = styled.ul `


display: flex;
justify-content: center;
list-style-type: none;


li {
    margin: 0 1em;
}

li:hover {
    color: #485563;
}

svg {
    font-size: 1.5em;
    cursor: pointer;
}

`

export const P = styled.p `
 
margin-top: 2em;

span {
    font-weight: bold;
    color: white;
}

`