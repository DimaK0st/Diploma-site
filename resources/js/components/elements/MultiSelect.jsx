import Select from 'react-select';
import './multi-select.scss'

const MultiSelect = ({
                         field,
                         form,
                         options,
                         isMulti = false,
                         placeholder = 'Select'
                     }) => {
    function onChange(option) {
        form.setFieldValue(
            field.name,
            option ? (option).map((item) => item.value) : [],
        );
    }

    const customStyles = {
        control: base => ({
            ...base,
            height: 27,
            minHeight: 27,
        })
    };

    const getValue = () => {
        if (options) {
            return isMulti
                ? options.filter((option) => field.value.indexOf(option.value) >= 0)
                : options.find((option) => option.value === field.value);
        } else {
            return isMulti ? [] : ('');
        }
    };

    if (!isMulti) {
        return (
            <Select
                options={options}
                name={field.name}
                classNamePrefix="react-select"
                value={options && Array.isArray(options) ? options.find(option => option.value === field.value) : ''}
                onChange={(option) => form.setFieldValue(field.name, option.value)}
                onBlur={field.onBlur}
                placeholder={placeholder}
                styles={customStyles}
            />
        )
    } else {
        return (
            <Select
                className="react-select-container"
                classNamePrefix="react-select"
                name={field.name}
                value={getValue()}
                onChange={onChange}
                options={options}
                isMulti={true}
                placeholder={placeholder}
                styles={customStyles}
            />
        )
    }
}

export default MultiSelect;
