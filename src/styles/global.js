import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      width: 100vw;
      height: 100vh;
      background-color: rgb(27, 28, 38);
      font-family: Arial, Helvetica, sans-serif;
      overflow-x: hidden;
   }

   .categoria-container {
      margin: 20px 0;
      h2 {
         color: white;
         margin-bottom: 20px;
         margin-left: 30px;
      }
   }

   .filmes-container {
      width: 100%;
      overflow-y: hidden;
      overflow-x: scroll;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 15px;

      /* Estilizando a barra de rolagem */
      &::-webkit-scrollbar {
         width: 10px; /* Largura da barra de rolagem vertical */
         height: 10px; /* Altura da barra de rolagem horizontal */
      }

      /* Estilizando o polegar (thumb) da barra de rolagem */
      &::-webkit-scrollbar-thumb {
         background-color: #888; /* Cor do polegar */
         border-radius: 5px; /* Raio de borda do polegar */
      }

      /* Estilizando o polegar (thumb) da barra de rolagem quando estiver em hover */
      &::-webkit-scrollbar-thumb:hover {
         background-color: #555; /* Cor do polegar quando em hover */
      }

      scrollbar-color: #888 #ccc; /* Cor da barra de rolagem vertical e horizontal */
      scrollbar-width: thin;
   }

   #rectangle {
      width: 100%;
      background-color: rgb(27, 28, 38);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
      height: 100px;

      #brand-and-menus {
         display: flex;
         align-items: center;
         height: 100%;

         h1 {
            color: orange;
            font-size: 30px;
            margin-right: 40px;
         }

         #menus {
            height: 100%;
            ul  {
               list-style: none;
               display: flex;
               align-items: center;
               height: 100%;
               
               li {
                  color: white;
                  padding: 0 30px;
                  cursor: pointer;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  &:hover {
                     background-color: #f1f1f1;
                     color: black;
                  }
               }
            }
         } 
      }
   }
`;

export default GlobalStyle;