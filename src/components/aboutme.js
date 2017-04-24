import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchAboutMe} from '../actions/index';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AboutMe extends Component{
  componentWillMount(){
    this.props.fetchAboutMe();
  }

  render(){
    const {about} = this.props;
    const transitionOptions={
      transitionName:"fade",
      transitionAppear:true,
      transitionAppearTimeout:1000,
      transitionEnterTimeout:1000,
      transitionLeaveTimeout:1000
    }

    if(!about){
      return <div>Loading</div>;
    }

    return (
        <div  className="panel">
        <ReactCSSTransitionGroup {...transitionOptions}>
          <div className="panel-heading">
            <h2>簡歷</h2>
          </div>
          <div className="panel-body">
            <h3>基本資料</h3>
            {about.info}
            <h3>學歷</h3>
            {about.edu}
            <h3>經歷</h3>
            {about.exp}
            <h3>技能</h3>
            {about.skill}
            <h3>作品</h3>
            {about.portfolio}
            <h3>關於我</h3>
            {about.me}
          </div>
        </ReactCSSTransitionGroup>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {about:state.content.about_content};
}

export default connect(mapStateToProps,{fetchAboutMe})(AboutMe);
