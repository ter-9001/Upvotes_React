import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import AuthManager from "react-authmanager";




it("Adicionando dois elementos e checando tamanho da lista e existência dos cometários", () => {
  render(<App />);
 
  //Inicializando elementos
  const usuario = screen.queryByTestId("usuarioInput");
  const comentario = screen.queryByTestId("comentarioInput");
  const enviar = screen.queryByTestId("enviarCometario");
  const lista = screen.queryByTestId("lista"); 

                  //Enviando dados
                  fireEvent.change(usuario, { target: { value: "Usuário 1" } });
                  fireEvent.change(comentario, { target: { value: "Primeiro Comentário" } });
                  fireEvent.click(enviar);
                  
                  
                  expect(lista.children.length).toBe(1);
                  expect(screen.getByText("Usuário 1")).toBeTruthy();
                  expect(screen.getByText("Primeiro Comentário")).toBeTruthy();


                  fireEvent.change(usuario, { target: { value: "Usuário 2" } });
                  fireEvent.change(comentario, { target: { value: "Segundo Comentário" } });
                  fireEvent.click(enviar);
                  
                  
                  expect(lista.children.length).toBe(2);
});



  it("Adcionando comentário e testando likes", () => {
    render(<App />);
  
  //Inicializando elementos 
  const usuario = screen.queryByTestId("usuarioInput");
  const comentario = screen.queryByTestId("comentarioInput");
  const enviar = screen.queryByTestId("enviarCometario");
  const lista = screen.queryByTestId("lista");
  
  
                  //Enviando dados
                  fireEvent.change(usuario, { target: { value: "Usuário 1" } });
                  fireEvent.change(comentario, { target: { value: "Primeiro Comentário" } });
                  fireEvent.click(enviar);
                  
                  //Checando...
                  expect(lista.children.length).toBe(1);
                  expect(screen.getByText("Usuário 1")).toBeTruthy();
                  expect(screen.getByText("Primeiro Comentário")).toBeTruthy();

                  //Elementos que são redenizados após o clique
                  const darLike =  screen.queryByTestId("darLike");
                  const score =  screen.queryByTestId("score");

                  //Verificando se o like foi dado
                  fireEvent.click(darLike);
                  expect(score).toHaveTextContent('1');

                  //Verificando se tres likes foram acrecentados
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  expect(score).toHaveTextContent('4');
  
  });



  it("Verificando a ordem da lista", () => {
    render(<App />);
  
   //Inicializando elementos 
   const usuario = screen.queryByTestId("usuarioInput");
   const comentario = screen.queryByTestId("comentarioInput");
   const enviar = screen.queryByTestId("enviarCometario");
   const lista = screen.queryByTestId("lista");
   
   
                   //Enviando dados
                   fireEvent.change(usuario, { target: { value: "Usuário 1" } });
                   fireEvent.change(comentario, { target: { value: "Primeiro Comentário" } });
                   fireEvent.click(enviar);
                   
                  //Checando...
                   expect(lista.children.length).toBe(1);
                   expect(screen.getByText("Usuário 1")).toBeTruthy();
                   expect(screen.getByText("Primeiro Comentário")).toBeTruthy();
                  //Elementos que são redenizados após o clique
                   const darLike =  screen.queryByTestId("darLike");
                   const score =  screen.queryAllByTestId("score")[0];

                   //Verificando se dois likes foram dados no primeiro comentário
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  fireEvent.click(darLike);
                  expect(score).toHaveTextContent('5');
  
                  //enviando segundo comentário
                  fireEvent.change(usuario, { target: { value: "Usuário 2" } });
                  fireEvent.change(comentario, { target: { value: "Segundo Comentário" } });
                  fireEvent.click(enviar);
                  
                  //verificando se o segundo comentário foi adicionado
                  expect(lista.children.length).toBe(2);

                  //Dando 3 likes ao novo comentário
                  const ultDarLike = screen.queryAllByTestId("darLike")[1];
                 
                  //console.log(typeof(ultDarLike))

                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);
              
                  //O primeiro comentário está com 2 likes e o segundo com 2
                  //Agora testando isso

                  const scores = screen.queryAllByTestId("score");

                  expect(scores[0]).toHaveTextContent('5');
                  expect(scores[1]).toHaveTextContent('4');


                 

                  fireEvent.click(ultDarLike);
                  

                  expect(scores[0]).toHaveTextContent('5');
                  expect(scores[1]).toHaveTextContent('5');

                   /*Se estiver tudo correto no sexto like no ultimo comentario as posições da lista vão se inverter, 
                  logo, ao clicar no último elemento com id=darLike  o scores[0] terá 6, enquanto o scores[1] = 4*/

                  fireEvent.click(ultDarLike);
                  

                  expect(scores[0]).toHaveTextContent('6');
                  expect(scores[1]).toHaveTextContent('5'); 

                  //clicando duas vezes no primeiro comentário temos

                  fireEvent.click(darLike)
                  fireEvent.click(darLike)

                  expect(scores[0]).toHaveTextContent('8');
                  expect(scores[1]).toHaveTextContent('5'); 


                  //Se dermos quatro likes no último ele sobe para primeira possição então

                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);
                  fireEvent.click(ultDarLike);

                  expect(scores[0]).toHaveTextContent('9');
                  expect(scores[1]).toHaveTextContent('8'); 
              
                


                
  
  
  });