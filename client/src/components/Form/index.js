import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    // <div className="form-group">
    //   <input className="form-control" {...props} />
    // </div>

    <div className="input-field">
      <input {...props} type="text" className="validate"/>
      {/* <label for="first_name">First Name</label> */}
    </div>
  );
}

export function TextArea(props) {
  return (
    // <div className="form-group">
    //   <textarea className="form-control" rows="20" {...props} />
    // </div>
    <div class="input-field col s12">
      <textarea className="materialize-textarea" {...props} />
      {/* <label for="textarea1">Textarea</label> */}
    </div>
  );
}

export function FormBtn(props) {
  return (
    // <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    //   {props.children}
    // </button>
    <button {...props} className="btn waves-effect waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
    {props.children}
    </button>
  );
}
