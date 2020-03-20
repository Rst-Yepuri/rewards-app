import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 50px;
`;

const ErrorDiv = styled.div`
  margin-top: 50px;
`;

const formatData = rawData => {
  const formattedData = {};

  rawData.forEach(element => {
    const monthIndex = new Date(element.date).getMonth();
    const calculatedPoints =
      element.transactionAmount > 100
        ? (element.transactionAmount - 100) * 2 + 50
        : element.transactionAmount > 50
        ? element.transactionAmount - 50
        : 0;

    if (element.userID in formattedData) {
      formattedData[[element.userID]][`month${monthIndex}`] = calculatedPoints;
      formattedData[[element.userID]]['total'] += calculatedPoints;
    } else {
      formattedData[[element.userID]] = {
        name: element.userName,
        [`month${monthIndex}`]: calculatedPoints,
        total: calculatedPoints
      };
    }
  });
  return formattedData;
};

const renderRows = (userID, row) => {
  const tdList = [];
  tdList.push(<td key="userID">{userID}</td>);
  for (const cell in row) {
    tdList.push(cell !== 'total' && <td key={cell}>{row[cell]}</td>);
  }
  tdList.push(<td key="total">{row['total']}</td>);
  return tdList;
};

const ResultsComponent = ({ transactionData }) => {
  let formattedDataObject = {};
  if (transactionData) {
    try {
      const rawData = JSON.parse(transactionData);
      formattedDataObject = formatData(rawData);
    } catch (SyntaxError) {
      return (
        <ErrorDiv>
          <h5>Data is not in JSON format</h5>
        </ErrorDiv>
      );
    }
  }

  if (Object.keys(formattedDataObject).length < 1) {
    return null;
  }

  return (
    <TableContainer className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Customer ID</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Month 1</th>
            <th scope="col">Month 2</th>
            <th scope="col">Month 3</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(formattedDataObject).map((id, index) => (
            <tr key={id}>{renderRows(id, formattedDataObject[id])}</tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default ResultsComponent;
