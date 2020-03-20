import React, { useState } from 'react';
import styled from 'styled-components';
import FormComponent from './components/FormComponent';
import ResultsComponent from './components/ResultsComponent';

const Container = styled.div`
  margin: 20px auto;
  max-width: 800px;
`;

const BrandDiv = styled.div`
  display: flex;
  margin-bottom: 40px;

  h1 {
    position: relative;
    top: 20px;
    left: 10px;
  }
`;

const App = () => {
  const [transactionData, setTransactionData] = useState();
  return (
    <div className="App">
      <Container>
        <BrandDiv>
          <img
            src="https://img.icons8.com/plasticine/100/000000/medal.png"
            alt="app logo"
          />
          <h1>Rewards App</h1>
        </BrandDiv>
        <FormComponent
          transactionData={transactionData}
          setTransactionData={setTransactionData}
        />
        <ResultsComponent transactionData={transactionData} />
      </Container>
    </div>
  );
};

export default App;
