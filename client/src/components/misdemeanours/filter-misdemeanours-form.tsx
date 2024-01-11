import { ChangeEvent, useContext} from 'react';
import { SelectInput } from '../form-components/select-input';
import { filterFormSelectInput} 
from '../../data/filter_misdemeanour_form_data';
import { FormSelectInputObject} from '../../types/form.types';
import { SelectOptions } from '../../data/filter_misdemeanour_form_data';
import { MisdemeanourFilterContext } from './misdemeanour-container';

interface MisdemeanourFormProps {
	routeTo: SelectOptions | undefined;
}

const FilterMisdemeanoursForm : React.FC<MisdemeanourFormProps> = ({routeTo}) => {

	const [selectedOption, setSelectedOption] = useContext(MisdemeanourFilterContext);

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();
		if (setSelectedOption) {
			setSelectedOption((currentData: SelectOptions) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		}
	}

	return (
		<form className='filter-misdemeanours-form'>
			{filterFormSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {""}
				value={selectedOption? selectedOption[field.role]: "all"}
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				attempted = {true}
				routeTo = {routeTo}
				/>)
			}
		</form>	
	);
};
export default FilterMisdemeanoursForm;