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

        if(!arguments[0] || !arguments[1]) 
        { //alert("Erro: usuário e/ou comentário\n não digitados!!!!")
        }
        else    
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

    let comentarios = this.ordenar();

    return(
               <div style={{backgroundColor:''}}>
                     <div className={"container-fluid"} style={{display: 'flex', flexWrap: 'row', justifyContent: 'center', backgroundColor: '#ff0000', margin:'5px'}}>

                         <div>
                                    <input type={'text'} placeholder={'Digite usuário'} id="usuarioInput" data-testid= "usuarioInput"  />

                                    <input type={'text'} placeholder={'Digite comentário'} id="comentarioInput" data-testid= "comentarioInput" />

                                    

                                    <button id="enviarCometario" data-testid="enviarCometario" className={'btn btn-success'}  onClick={() => this.enviarComentario(
                                      document.getElementById("usuarioInput").value, document.getElementById("comentarioInput").value)}
                                    > Enviar </button>
                         </div>

                    </div>
               
               
                    <div className={"container-fluid"} style={{display:'flex',justifyContent:'center'}}>
                       
                              <div data-testid="lista" style={{display:'flex', flexDirection: 'column'}}> 
                          
                                            {comentarios.map(
                                              (obj, index) => {

                                                return(
                                                <div key={index} className={'text-center'} 
                                                style={{width:"300px",border:'0.4px solid #828080', marginTop:'15px'}}> 

                                                      <div id={"ptn"} data-testid={'ptn'} style={{display:'flex', flexWrap:'row',
                                                    backgroundColor:'#309bb1', color:'white', justifyContent:'space-between'}}>
                                                        
                                                          <p data-testid={"usuario"} style={{maxWidth: '50%', marginBottom: '0', marginLeft: '15px'}} className={'espaco_1linha'}> {obj.usuario} </p>

                                                              <div  style={{display:'flex', flexWrap:'row'}}>

                                                                  <p data-testid={"score"} style={{maxWidth: '90%',marginBottom: '0', marginRight: '15px'}} 
                                                                  > {obj.score} </p>

                                                                  <p data-testid={'darLike'} id={"darLike"} style={{marginBottom: '0', marginRight: '15px', fontSize: '10px'}} 
                                                                  onClick={() => this.scoreAumentar(index)}> Upvote here </p>

                                                              </div>


                                                      </div>

                                                      <div>

                                                          <p className={"comentario"} style={{fontSize: '30px', color: '#828080'}} > {obj.comentario} </p>

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
