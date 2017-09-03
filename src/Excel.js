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
      </table>
    );
  }
}

export default Excel;
