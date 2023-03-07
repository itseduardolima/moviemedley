import styled from 'styled-components'


export const Container = styled.div `


padding: 4rem;

h2 {
    margin: 2rem 0;
}

.movie {
    display: flex;
}

img {
    width: 200px;
    height: 300px;
    border-radius: 1rem;
}

.details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 80%;
}

button {
    background: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: 0.8rem 2rem;
    margin-top; 1 rem;
    font-size: 100%
    transition: all 0.5s;
}

button:hover {
    background: #5848c2;
}

span {
    line-height: 150%;
    margin-bottom: 1rem;
    font-size: 110%;
}

.release-date {
    opacity: 0.5;
}


@media only screen and (max-width: 500px) {
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
   

    .details {
        min-width: 100%;
        
    }
}


`
