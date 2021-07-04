import React from 'react';
import { getAllCharcters } from './actions'
import { connect } from 'react-redux';

class Demo extends React.Component {
    componentDidMount() {
        this.props.getAllCharcters();
    }
    render() {
        const {arr} = this.props;
        return (
            <div>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Image</th>
                  </tr>
                  {(arr && arr.length> 0) &&
                    arr.map(element => {
                        return (
                            <tr>
                                <td>{element.name}</td>
                                <td>{element.gender}</td>
                                <td><img src={element.img_url} alt="imag"/></td>
                            </tr>
                        )
                    })
                  }
                </table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
      arr: state.arr
    }
  }


export default connect(mapStateToProps, {getAllCharcters}) (Demo);