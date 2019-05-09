import React from 'react';
import { connect } from 'react-redux';
import {changeUrl} from '../../actions';
import Logout from './Logout';
import Group from './Group';
import Mypage from './Mypage';
import Login from './Login';
import Join from './Join';

class NavBar extends React.Component {
    render() {
        // const onSubmit = () => {
        //     if (this.username !== undefined && this.password !== undefined) {
        //         this.props.onClick(this.username.value, this.password.value)
        //     }
        if(this.props.loggedIn !== ""){
          return(
            <div>
              <header className="clear">
               <div className="wrap">
                 <div className="logo" onClick={() => this.props.onClick()}></div>
                 <nav className="navBar">
                   <ul>
                     <li><Logout/></li>
                     <li><Mypage/></li>
                     <li><Group/></li>
                   </ul>
                 </nav>
               </div>
             </header>
           </div>

          )
        }
        else{
        return (
        <div>
          <header className="clear">
           <div className="wrap">
             <div className="logo" onClick={() => this.props.onClick()}></div>
             <nav className="navBar">
               <ul>
                 <li><Login/></li>
                 <li><Join/></li>
               </ul>
             </nav>
           </div>
         </header>
       </div>
        )
      }
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(changeUrl('/'))
    }
}
const mapStateToProps = (state) => ({
    loggedIn: state.authorization,
})

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar);



export default NavBar;
