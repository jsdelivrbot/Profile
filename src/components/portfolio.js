import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPortfolio} from '../actions/index';
import {Link} from 'react-router';

class Portfolio extends Component{
  componentWillMount(){
      this.props.fetchPortfolio();
  }

  rendPortfolio(){
    return this.props.portfolio.map((data)=>{
      return (
        <div className="panel" key={data.id}>
              <div className="panel-heading">
                <h3>{data.title}</h3>
                <a href={data.link}>
                  連結
                </a>
              </div>
              <div className="panel-body">
                <h4>SKILL</h4>
                {data.skill}
                <h4>關於使用的技術</h4>
                {data.text}
              </div>
        </div>
      );
    });
  }

  render(){
    const {portfolio} = this.props;
    //console.log(this.props.portfolio);

    if(!portfolio){
      return <div>Loading....</div>;
    }

    return (
      <div>
        <div>
        {this.rendPortfolio()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {portfolio:state.content.portfolio_content};
}

export default connect(mapStateToProps,{fetchPortfolio})(Portfolio);
