import React from 'react';

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    }
  }

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
          {this.state.data.map((row, idx) => {
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
