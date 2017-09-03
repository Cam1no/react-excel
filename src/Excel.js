import React from 'react';

class Excel extends React.Component {

  render(){
    return(
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title) => {
              return(
                <th>{title}</th>
              );
            })}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Excel;
