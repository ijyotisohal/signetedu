import React, { useState } from 'react';
import { addSpecification } from '../actions/languageActions';
import { useDispatch, useSelector } from 'react-redux';

const TagsComp = () => {
    const [specification, setSpecification] = useState('');
    const [value, setValue] = useState('');
    const [enteredSpecifications, setEnteredSpecifications] = useState([]); // New local state for entered specifications
    const specifications = useSelector((state) => state.specifications);
    const dispatch = useDispatch();
  
    const handleAddSpecification = () => {
      if (specification.trim() !== '' && value.trim() !== '') {
        const newSpecification = {
          description: specification,
          value: value,
        };
        dispatch(addSpecification(newSpecification));
  
        // Update the local state with the entered specifications
        setEnteredSpecifications([...enteredSpecifications, newSpecification]);
  
        // Reset the input fields
        setSpecification('');
        setValue('');
      }
    };
  
    return (
        <div>
        <h1>Product Specifications</h1>
        <div>
          <input
            type="text"
            value={specification}
            onChange={(e) => setSpecification(e.target.value)}
            placeholder="Enter a specification"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter the value"
          />
          <button onClick={handleAddSpecification}>Add Specification</button>
        </div>
        <div>
          <h2>Preview:</h2>
          { enteredSpecifications && enteredSpecifications.length > 0 ? (
            enteredSpecifications && enteredSpecifications.map((spec, index) => (
              <div key={index}>
                <span>
                  {spec.description} : {spec.value}
                </span>
              </div>
            ))
          ) : (
            <div>No specifications added yet.</div>
          )}
        </div>
        <div>
          <h2>All Specifications:</h2>
          {specifications && specifications.length > 0 ? (
            specifications && specifications.map((spec, index) => (
              <div key={index}>
                <span>
                  {spec.description} : {spec.value}
                </span>
              </div>
            ))
          ) : (
            <div>No specifications added yet.</div>
          )}
        </div>
      </div>
   
    );
  }

export default TagsComp

