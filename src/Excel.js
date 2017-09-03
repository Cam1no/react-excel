import React from 'react';

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      headers: props.headers
    }
  }

  propTypes(){
    headers: React.PropTypes.arrayOf(
      React.PropTypes.string
    )
    data: React.PropTypes.arrayOf(
      React.PropTypes.arrayOf(
        React.PropTypes.string
      )
    )
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            {this.state.headers.map((title, idx) => {
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
