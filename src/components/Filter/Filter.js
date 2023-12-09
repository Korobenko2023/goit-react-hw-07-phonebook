import { useDispatch, useSelector } from "react-redux";
import { FilterDiv, FilterInput, FilterLabel } from "./Filter.style";
import { filteredContacts} from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export const Filter = () => {
    const filter = useSelector(selectFilter);
      const dispatch = useDispatch();
        return (
            <FilterDiv>
                <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
                <FilterInput
                    type="text"
                    name="filter"
                    id="filter"
                    value={filter}
                    onChange={(e) => dispatch(filteredContacts(e.target.value))} 
                />
            </FilterDiv>
        );
};

