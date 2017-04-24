import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAutobio} from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autobiography extends Component{
  componentWillMount(){
      this.props.fetchAutobio();
  }

  render(){
    const {autobio} = this.props;
    const transitionOptions={
      transitionName:"fade",
      transitionAppear:true,
      transitionAppearTimeout:1000,
      transitionEnterTimeout:1000,
      transitionLeaveTimeout:1000
    }

    if(!autobio){
      return (
        <div>
          Loading...
        </div>
      );
    }

    return (
      <div className="panel">
        <ReactCSSTransitionGroup {...transitionOptions}>
          <div className="panel-heading">
            <h2>自傳</h2>
          </div>

          <div className="panel-body">
            {autobio.text}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {autobio:state.content.autobio_content};
}

export default connect(mapStateToProps,{fetchAutobio})(Autobiography);
