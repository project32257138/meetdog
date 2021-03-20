import React from 'react';

const style = {
    welcome: {
        paddingTop: "auto",
        paddingBottom: "auto",
        // background: "blue",
        // backgroundImage: "linearGradient(315deg, #2c69d1 0%, #0abc49",
    },
    body: {
        height: "100%",
        width: "100%",
        backgroundImage: 'url("../../../img/bg1.jfif")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },
    text: {
      fontSize: "17px",
      textAlign: "justify"
    },
    button:{
      marginLeft: "50px",
      marginRight: "50px",
      fontWeight: "bold"
    }
}

function Welcome(){
    return(
        <div style={style.body}>
          
                <div style = {style.welcome} class="container valign-wrapper">
    <div  class="col s6 m6 l4">
      <div class="card white darken-1 center-align">
        <div class="card-content black-text">
          <span class="card-title">Woof!</span>
          <p style={style.text} class="left-align">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis nulla nec turpis aliquet, convallis cursus mi tristique. Praesent vel fermentum erat, viverra faucibus tortor. In sed elit sit amet ex ullamcorper vehicula. Sed posuere nibh eu tortor fringilla, eget sodales sapien volutpat. Donec porttitor libero eu velit elementum dictum. Nunc auctor posuere egestas. Proin quis velit tempus purus vestibulum consectetur. Vestibulum malesuada tempor enim, vel pretium dolor. Fusce ac erat at libero sodales convallis. Nullam ultricies, diam id scelerisque egestas, justo nibh fringilla quam, sed eleifend lorem libero non tortor. Mauris scelerisque ante at urna dapibus elementum eu vulputate lacus. Ut sodales in dui ut iaculis. Suspendisse dignissim, arcu at lobortis viverra, libero tellus aliquam massa, pellentesque aliquet mauris metus posuere sem. Donec egestas tellus ut diam mattis rhoncus. Nullam a iaculis nunc, non dapibus erat.</p>
        </div>
        <div style={style.button} class="card-action row">
        <a  href="#" class="waves-effect waves-light btn-large"><i class="material-icons left">login</i>Log In</a>
        <span>   </span>
        <a href="#" class="waves-effect waves-light btn-large"><i class="material-icons left">assignment</i>Sign Up</a>
        </div>
      </div>
    </div>
  </div>
        </div>
        )
};

export default Welcome;