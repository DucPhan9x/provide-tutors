import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import { useSelector } from "react-redux";

function SelectInstruments({
  options,
  onChange,
  openInstruments,
  toggleInstruments,
  onResetInstruments,
  onMobile,
}) {
  const storeTeachers = useSelector((store) => store.teachers);
  const { filter } = storeTeachers;
  const filterInstruments = filter.instruments || [];

  return (
    <Dropdown
      isOpen={openInstruments}
      toggle={toggleInstruments}
      className="button-dropdown"
      direction="down"
    >
      <DropdownToggle caret>
        {filterInstruments.length && !onMobile
          ? filterInstruments.map((item, index) => (
              <span className="instrument-name" key={item.value}>
                {item.label}
                {index !== filterInstruments.length - 1 ? ", " : ""}
              </span>
            ))
          : "Instrument(s)"}
      </DropdownToggle>
      <DropdownMenu>
        <div className="dropdow-arrow"></div>
        {options.map((item) => (
          <div key={item.value} className="form-box instrument__item">
            <label
              className="checkbox checkbox--secondary"
              htmlFor={item.value}
            >
              {item.label}
              <input
                id={item.value}
                name={item.value}
                data-label={item.label}
                type="checkbox"
                checked={filterInstruments.some(
                  (instrument) => instrument.value === item.value
                )}
                onChange={onChange}
              />
              <span className="checkmark"></span>
            </label>
          </div>
        ))}
        <div className="button__group">
          <button
            className="button-reset"
            type="button"
            onClick={onResetInstruments}
          >
            Reset
          </button>
          <button type="submit" className="button-validate">
            Validate
          </button>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SelectInstruments;
