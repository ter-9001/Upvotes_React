import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)


      this.state = {
        cometarios : []
      }
  }
  ordenar()
  {
    let filter = [];


                  function sortByScore(property){
                    return function(a, b){
                        if(a[property] < b[property]){
                            return +1;
                        }else if(a[property] > b[property]){
                            return -1;
                        }else{
                            return 0;   
                        }
                    }
                }

                filter = this.state.cometarios.sort(sortByScore('score'));

                return filter;

  
  
  
  }
  scoreAumentar(index)
  {

    let comentarios = this.state.cometarios;

    comentarios[index].score += 1;

  
    this.setState({comentarios: comentarios});
    
  }
  enviarComentario()
  {

   (!arguments[0] || !arguments[1]) ?  alert("Erro: usuário e/ou comentário\n não digitados!!!!")
    : alert("Enviando comentário!!!!"); 
    
        {
                let novoCometario = {
                  usuario: arguments[0],
                  comentario: arguments[1],
                  score: 0
                };
            
              
            
                let comentarios = this.state.cometarios;
            
                comentarios.push(novoCometario);
            
                this.setState({comentarios: comentarios});
            
          }
    

  }
  render()
  {

    let comentario = this.ordenar();

    return(
               <div style={{backgroundColor:''}}>
                     <div className={"container-fluid"} style={{display: 'flex', flexWrap: 'row', justifyContent: 'center', backgroundColor: '#ff0000', margin:'5px'}}>

                         <div>
                                    <input type={'text'} placeholder={'Digite usuário'} id="usuarioInput" />

                                    <input type={'text'} placeholder={'Digite comentário'} id="comentarioInput" />

                                    <button className={'btn btn-success'}  onClick={() => this.enviarComentario(
                                      document.getElementById("usuarioInput").value, document.getElementById("comentarioInput").value)}
                                    > Enviar </button>
                         </div>

                    </div>
               
               
                    <div className={"container-fluid"} style={{display:'flex',justifyContent:'center'}}>
                    <div style={{display:'flex', flexDirection: 'column'}}> 
                
                                      {comentario.map(
                                        (obj, index) => {

                                          return(
                                          <div className={'text-center'} 
                                          style={{width: '400px', border:'0.4px solid #828080', marginTop:'15px'}}> 

                                                <div style={{display:'flex', flexWrap:'row',
                                              backgroundColor:'#309bb1', color:'white', justifyContent:'space-between'}}>
                                                  
                                                    <p style={{marginBottom: '0', marginLeft: '15px'}} 
                                                    className={'espaco_1linha'}> {obj.usuario} </p>

                                                <div style={{display:'flex', flexWrap:'row'}}>

                                                    <p style={{marginBottom: '0', marginRight: '15px'}} 
                                                    > {obj.score} </p>

                                                    <p className={'darLike'} style={{marginBottom: '0', marginRight: '15px', fontSize: '10px'}} 
                                                    onClick={() => this.scoreAumentar(index)}> Upvote here </p>

                                                </div>


                                                </div>

                                                <div >

                                                    <p style={{fontSize: '30px', color: '#828080'}}
                                                    > {obj.comentario} </p>

                                                </div>

                                            </div>
                                          )
                                        }
                                      )}
                     </div>
                     </div> 
                          
                          
                     </div>

                

    )
  }
  





}

export default App;
