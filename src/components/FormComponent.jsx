import React, {useRef} from 'react';

const FormComponent = props => {
  const { transactionData, setTransactionData } = props;
  const myInput = useRef();
  const handleClick = () =>  {
    setTransactionData(myInput.current.value);
  };
  
  return (
    <form>
        <div className="form-group">
          <textarea
            className="form-control"
            id="transactionRecordTextarea"
            rows="5"
            placeholder="Please paste transaction data here..."
            defaultValue={transactionData}
            //onChange={event => setTransactionData(event.target.value)}
            ref={myInput}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>
      </form>
  );
};

export default FormComponent;
