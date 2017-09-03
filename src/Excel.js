import React from 'react';

class Excel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      headers: props.headers
    }
    // 作ったメソッドはここでbindしないと使えない
    this._sort = this._sort.bind(this)
  }
  // propTypes(){
  //   headers: React.PropTypes.arrayOf(
  //     React.PropTypes.string
  //   )
  //   data: React.PropTypes.arrayOf(
  //     React.PropTypes.arrayOf(
  //       React.PropTypes.string
  //     )
  //   )
  // }

  _sort(e){
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    data.sort(function(a, b) {
      return a[column] > b[column] ? 1 : -1;
    });
    this.setState({
      data: data,
    });
  }


  render(){
    return(
      <table>
        <thead onClick={this._sort}>
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
