import React from 'react';

class Excel extends React.Component {

  render(){
    return(
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => {
              return(
                <th key={idx}>{title}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((row, idx) => {
            return(
              <tr key={idx}>{row.map((cell, idx) => {
                  return(
                    <td key={idx}>{cell}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Excel;
