import React from 'react';

class Excel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      sortby: null,
      descending: false
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
    var descending = this.state.sortby === column && !this.state.descending;
    data.sort(function(a, b) {
      return descending
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    });
    this.setState({
      data: data,
      sortby: column,
      descending: descending
    });
  }


  render(){
    return(
      <table>
        <thead onClick={this._sort}>
          <tr>
            {this.props.headers.map((title, idx) => {
              if (this.state.sortby === idx) {
                title += this.state.descending ? ' \u2191' : ' \u2193'
              }
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
