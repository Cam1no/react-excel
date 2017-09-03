import React from 'react';

class Excel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      sortby: null,
      descending: false,
      edit: null
    }
    // 作ったメソッドはここでbindしないと使えない
    this._sort = this._sort.bind(this)
    this._showEditor = this._showEditor.bind(this)
    this._save = this._save.bind(this)
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

  _showEditor(e){
    this.setState({
      edit: {
        row: parseInt(e.target.dataset.row, 10),
        cell: e.target.cellIndex
      }
    })
  }

  _save(e){
    e.preventDefault();
    var input = e.target.firstChild;
    var data = this.state.data.slice();
    data[this.state.edit.row][this.state.edit.cell] = input.value;
    this.setState({
      edit: null,
      data: data,
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
        <tbody onDoubleClick={this._showEditor}>
          {this.state.data.map((row, rowidx) => {
            return(
              <tr key={rowidx}>{row.map((cell, idx) => {
                  var content = cell;
                  var edit = this.state.edit;
                  if (edit && edit.row === rowidx && edit.cell === idx) {
                    content = React.DOM.form({onSubmit: this._save},
                      React.DOM.input({
                        type: 'text',
                        defaultValue: cell,
                      })
                    );
                  }
                  return(
                    <td key={idx} data-row={rowidx}>
                      {content}
                    </td>
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
