//--- Reference --------------------------------------------------------------------------//
// https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
// https://www.npmjs.com/package/react-places-autocomplete

//--- Core Imports  ----------------------------------------------------------------------//
import React, { Component } from 'react';
//--- PlacesAutoComplete ----------------------------------------------------------------//
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';


export class AutoCompleteComponent  extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  //--- function To Handle Change ------->
  handleChange = address => {
    this.setState({ address });
  };
 

  //--- Function to handle place select --------------->
  handleSelect = address => {
    //#1 call google api to get places --------------->

    geocodeByAddress(address)
      //#2A on suscessfulyl API call ------------------>
      .then(results =>  {
        const fullAddressObj = results[0];
        console.log("fullAddresObj", fullAddressObj);

        //#3 Update State with selected address ---->
        this.setState({
          address: fullAddressObj.formatted_address
        });
      })
      //#2B called on unsuccsesfully api call->
      .catch(error => {
        console.log(error)
        alert(error.message);
      });
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>

            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />

            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}

              {suggestions.map(suggestion => {

                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                  
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };


                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}



export default AutoCompleteComponent