import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const DepartmentList = () => {
  const data = [
    {
      department: 'customer_service',
      sub_departments: ['support', 'customer_success']
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design']
    }
  ];

  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleDepartmentChange = (department) => {
    const selectedSubDepartments = data.find(item => item.department === department)?.sub_departments || [];

    if (selectedSubDepartments.length > 0) {
      const allSelected = selectedSubDepartments.every(subDepartment =>
        selectedDepartments.includes(subDepartment)
      );

      if (allSelected) {
        setSelectedDepartments(prevState => prevState.filter(dep => !selectedSubDepartments.includes(dep)));
      } else {
        setSelectedDepartments(prevState => [...prevState, ...selectedSubDepartments]);
      }
    } else {
      setSelectedDepartments(prevState =>
        prevState.includes(department) ? prevState.filter(dep => dep !== department) : [...prevState, department]
      );
    }
  };

  const handleSubDepartmentChange = (subDepartment) => {
    setSelectedDepartments(prevState =>
      prevState.includes(subDepartment) ? prevState.filter(dep => dep !== subDepartment) : [...prevState, subDepartment]
    );
  };

  const isDepartmentSelected = (department) => {
    const selectedSubDepartments = data.find(item => item.department === department)?.sub_departments || [];
    return selectedSubDepartments.every(subDepartment => selectedDepartments.includes(subDepartment));
  };

  const isSubDepartmentSelected = (subDepartment) => selectedDepartments.includes(subDepartment);

  return (
    <ul>
      {data.map(item => (
        <ul key={item.department}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDepartmentSelected(item.department)}
                onChange={() => handleDepartmentChange(item.department)}
              />
            }
            label={item.department}
          />

          {item.sub_departments.length > 0 && (
            <ul>
              {item.sub_departments.map(subDepartment => (
                <ul key={subDepartment}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={isSubDepartmentSelected(subDepartment)}
                        onChange={() => handleSubDepartmentChange(subDepartment)}
                      />
                    }
                    label={subDepartment}
                  />
                </ul>
              ))}
            </ul>
          )}
        </ul>
      ))}
    </ul>
  );
};

export default DepartmentList;
