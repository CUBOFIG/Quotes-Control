import React, {useState} from 'react'
import Form from './components/Form'
import styled from '@emotion/styled'
import Header from './components/Header'
import Abstract from './components/Abstract.jsx'
import Result from './components/Result'
import Spinner from './components/Spinner/Spinner'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const ContainerForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`



function App() {
  
  const [abstract, setAbstract] = useState({});
  const [loading, setLoading] = useState(false);

  const {data, quotation} = abstract

  return (
    <Container>
        <Header title="Cotizador de Seguros"/>
      <ContainerForm>
         <Form setAbstract={setAbstract} setLoading={setLoading}/>
         {loading ? <Spinner /> : null }
        {data ?  
        <div> 
          <Abstract data={data} />  
          <Result quotation={quotation}/> 
        </div>: null}
        </ContainerForm>
     </Container>
  );
}

export default App;
