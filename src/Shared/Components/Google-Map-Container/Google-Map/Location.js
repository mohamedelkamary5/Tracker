import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

// const LocationSearchInput = ({ values, setValues }) => {
const LocationSearchInput = ({ onPlaceOut, valueP }) => {

  const [address, setSddress] = useState('')
  const [values, setValues] = useState('')

  const handleChange = addressVal => {
    setSddress(addressVal);
  };
  

  // console.log("results", results[0].formatted_address);

  const handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        setSddress(results[0].formatted_address);
        // setValues({ ...values, address: address })
        // console.log('values', values);
        return getLatLng(results[0])
      })
      .then(latLng => {
        onPlaceOut(latLng, address)
        // console.log('Success', latLng)

        // setValues({ ...values, lon: latLng.lng, lat: latLng.lat, address })
      })
      .catch(error => console.error('Error', error));
  };
const {t} = useTranslation()
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          {/* <div className='col-lg-6'>
              <div className="mb-3">
                <label htmlFor="address" className="form-label"> العنوان<span>*</span> </label>
                <input type="text" className="form-control" id="address" placeholder="اكتب  العنوان" value={values.address} required onChange={(e) => setValues({ ...values, address: e.target.value })} />
              </div>
            </div> */}
          <label htmlFor="address" className="form-label"> {t("address")}<span>*</span> </label>
          <input value={valueP}
            {...getInputProps({
              placeholder:t("writeAddress") ,
              className: 'location-search-input form-control mb-2',
              id: 'address',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div key={suggestion.description}
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



export default LocationSearchInput

