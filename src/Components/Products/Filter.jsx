import React from 'react'
import { Select } from '@chakra-ui/react'

const Filter = () => {
  return (
    <div>
      <div style={{marginBottom:"5px"}}>
        <Select size='md' placeholder="Catergoy">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Sizes">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Brand">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Color">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Design">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Fit">
          <option value="option1">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Sleeve">
          <option value="option1">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Fit">
          <option value="Neck">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Type">
          <option value="option1">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Ratings">
          <option value="option1">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Discount">
          <option value="option1">Option 1</option>
        </Select>
      </div>
      <div style={{marginBottom:"5px"}}>
        <Select placeholder="Sort By">
          <option value="option1">Option 1</option>
        </Select>
      </div>
    </div>
  );
}

export default Filter