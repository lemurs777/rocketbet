import {useState} from "react";
import Select, {components} from "react-select";
import styles from './MultipleSelect.module.scss'
import {Checkbox, FormControlLabel} from "@mui/material";
import {ReactComponent as ArrowIcon} from "../../assets/images/icons/arrow.svg";

const allOptions = [
  {value: "Provider 1", label: "Provider 1", num: 300},
  {value: "Provider 2", label: "Provider 2", num: 300},
  {value: "Provider 3", label: "Provider 3", num: 300},
  {value: "Provider 4", label: "Provider 4", num: 300}
];
const InputOption = ({
                       getStyles,
                       Icon,
                       isDisabled,
                       isFocused,
                       isSelected,
                       children,
                       innerProps,
                       ...rest
                     }) => {
  const [isActive, setIsActive] = useState(false);
  const onMouseDown = () => setIsActive(true);
  const onMouseUp = () => setIsActive(false);
  const onMouseLeave = () => setIsActive(false);

  // // styles
  // let bg = "transparent";
  // if (isFocused) bg = "#eee";
  // if (isActive) bg = "#B2D4FF";
  //
  // const style = {
  //   alignItems: "center",
  //   backgroundColor: bg,
  //   color: "inherit",
  //   display: "flex "
  // };

  // prop assignment
  const props = {
    ...innerProps,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    // style
  };

  return (
    <components.Option
      {...rest}
      isDisabled={isDisabled}
      isFocused={isFocused}
      isSelected={isSelected}
      getStyles={getStyles}
      innerProps={props}
    >
      <div className='customChk'>
        <input type="checkbox" checked={isSelected}/>
        <span className="customChk__label"></span>
        <span className='customChk__badge'>300</span>
        {children}
      </div>
    </components.Option>
  );
};
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowIcon/>
    </components.DropdownIndicator>
  );
};

export default function MultipleSelect() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div>
      <Select
        classNamePrefix='multipleSelect'
        defaultValue={[]}
        isMulti
        closeMenuOnSelect={false}

        hideSelectedOptions={false}
        onChange={(options) => {
          if (Array.isArray(options)) {
            setSelectedOptions(options.map((opt) => opt.value));
          }
        }}
        options={allOptions}
        placeholder={'Providers (all)'}
        components={{Option: InputOption, DropdownIndicator}}
      />
    </div>
  );
}
