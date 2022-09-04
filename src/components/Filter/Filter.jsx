import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { FilterContainer, FilterInput, FilterLabel } from "./Filter.styled";

export const Filter = () => {
    const {value} = useSelector(state => state.filter);
    const dispatch = useDispatch();
    
    return (
        <FilterContainer>
            <FilterLabel>Find contacts by name: 
                <FilterInput
                    type="text"
                    name="filter"
                    value={value}
                    placeholder=' Enter name...'
                    onChange={event => dispatch(setFilter(event.target.value))}
                />
            </FilterLabel>
        </FilterContainer>
    )
};