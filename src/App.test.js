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

                  const darLike =  screen.queryByTestId("darLike");
                  const score =  screen.queryByTestId("score");

                   //Verificando se o like foi dado
                  fireEvent.click(darLike);
                  expect(score).toHaveTextContent('1');
  
                  fireEvent.change(usuario, { target: { value: "Usuário 2" } });
                  fireEvent.change(comentario, { target: { value: "Segundo Comentário" } });
                  fireEvent.click(enviar);
                  
                  
                  expect(lista.children.length).toBe(2);

  
  
  });