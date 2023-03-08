import styled from 'styled-components'


 export const Container = styled.div`
 h2 {
    text-align: center;
    margin: 4rem;
    padding-bottom: 20px;
    border-bottom: 3px solid #5848c2;
    border-radius: 15px;

 }
    
`

export const MovieList = styled.ul `

   list-style: none;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   column-gap: 3rem;
   row-gap: 3rem;

   @media only screen and (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }



`

export const Movie = styled.li `

   display: flex;
   flex-direction: column;
   align-items: center;

   img {
      width: 180px;
      border-radius: 5px;
      
    }
   
    span {
      font-weight: bold;
      font-size: 120%;
      text-align: center;
    }
   
    a {
      transion: all 0.5s
    }
   
    a:hover {
      transform: scale(1.1);
    }

    @media only screen and (max-width: 500px) {
      img {
        width: 300px;
      }
    }

`