import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAutobio} from '../actions/index';

class Autobiography extends Component{
  componentWillMount(){
      this.props.fetchAutobio();
  }

  render(){
    const {autobio} = this.props;

    if(!autobio){
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="panel">
        <div className="panel-heading">
          <h2>自傳</h2>
        </div>

        <div className="panel-body">
          {autobio.text}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {autobio:state.content.autobio_content};
}

export default connect(mapStateToProps,{fetchAutobio})(Autobiography);
