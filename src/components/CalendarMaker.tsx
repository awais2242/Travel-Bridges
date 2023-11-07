
import React from "react";
import {useState} from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
function CalendarMaker(props: { showDatePicker: boolean }) {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const handleFromDateChange = (date:  null) => {
    setFromDate(date);
  };

  const handleToDateChange = (date:  null) => {
    setToDate(date);
  };
    return ( 
        <div>
            {props.showDatePicker && (
              <div className="absolute w-[300px] sm:w-[520px] h-24 sm:h-20 top-16 sm:top-16 bg-gray-300 rounded-b-xl focus:outline-none  px-5 ">
        
                <label className="flex flex-row justify-center text-lg mt-0.5 font-semibold text-gray-700"> Select Tour Date </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="mr-6">
                   
                    <DatePicker
                      selected={fromDate}
                      onChange={handleFromDateChange}
                      isClearable
                      className="rounded-xl px-6 h-6 sm:px-4 sm:h-8"
                      placeholderText="Select Starting Date"
                    />
                  </div>
                  <div>
                  
                    <DatePicker
                      selected={toDate}
                      onChange={handleToDateChange}
                      isClearable
                      className="rounded-xl px-6 h-6 sm:px-4 sm:h-8"
                      placeholderText="Select End Date"
                    />
                  </div>
                  </div>
              </div>
            )}
        </div>
     );
}

export default CalendarMaker;