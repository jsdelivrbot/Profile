import React ,{Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component{
  render(){

    const nav=[
      {title:'作品集',link:'/'},
      {title:'簡歷',link:'aboutme'},
      {title:'自傳',link:'autobiography'}
    ];

    const rendNav = /*this.state.*/nav.map((navItem)=>{
      return  (<Link  key={navItem.link} to={navItem.link}>
                <li>
                  {navItem.title}
                </li>
              </Link>
            );
    });

    return (
       <div>
        <div>
            <ul className="navbar">
              {rendNav}
            </ul>
        </div>

        {this.props.children}
      </div>
    );
  }
}
