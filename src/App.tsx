import React from 'react';
import Snowfall from './page/components/snowEfect/snowEfect'; // ajuste o caminho conforme a sua estrutura
import Home from './page/home/home';
import LinkRow from './page/components/links/LinkRow'; 
import "./App.css"

function App() {
  return (
    <>
      <Snowfall numBalls={140} />

      <div className="home-contaiener app-home-container container-fluid">
        <div className="row app-main-row">
          <div className="col app-main-col">
            <div className="row app-top-row" style={{ height: '100%' }}>
              
              <div className="col app-label-col w-100" style={{ height: '50%' }}>
                <label className='app-lbl-nome'>Pablo Melo</label> <br/>
                <label className='app-lbl-cargo'>Desenvolvedor Fullstack .NET</label>
              </div>

              <div className="col app-links-col w-100" style={{ height: '50%' }}>
               <div className='home-div-linkRow'>
                <LinkRow />
               </div>
              </div>

            </div>
          </div>

          <div className="col app-right-col">
            <div className='home-container-main'>
<div>
  <p>
    Olá! Sou Pablo Melo da Silva, desenvolvedor .NET com mais de 2 anos de experiência em projetos CRM e ERP. Trabalho com C#, ASP.NET Core, bancos SQL e noSQL, além de front-end com Angular, Blazor e JavaScript. Sou proativo, colaborativo e atuo também em mentoria técnica, sempre focado em entregar soluções de qualidade.
  </p>

  <h3>Serviços oferecidos</h3>
  <ul style={{ textAlign: 'justify' }}>
    <li>Desenvolvimento completo de sites e aplicações web (front-end e back-end).</li>
    <li>Criação e manutenção de sistemas CRM e ERP.</li>
    <li>Desenvolvimento de APIs REST seguras e documentadas.</li>
    <li>Automação e bots em Python para tarefas repetitivas.</li>
    <li>Consultoria técnica, mentoria e alinhamento entre áreas de negócio e tecnologia.</li>
    <li>Otimização e gerenciamento de bancos de dados SQL e noSQL.</li>
    <li>Implementação básica de pipelines DevOps (CI/CD) e controle de versão com Git.</li>
  </ul>
</div>

            </div>
          </div>
        </div>
      </div>

      <Home />
    </>
  );
}

export default App;
