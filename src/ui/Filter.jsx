import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";
import { suras } from "../../data/suras";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

export const Select = styled.select`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterName, options, select = false }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue = searchParams.get(filterName) || "all";
  function handleClick(value) {
    searchParams.set(filterName, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  function handleChange(e) {
    searchParams.set(filterName, e.target.value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {select ? (
        <Select onChange={handleChange}>
          {suras.map((sura, index) => (
            <option key={index} value={sura}>
              {sura}
            </option>
          ))}
        </Select>
      ) : (
        options.map((option) => (
          <FilterButton
            key={option.value}
            onClick={() => handleClick(option.value)}
            active={option.value === currentFilterValue}
            disabled={option.value === currentFilterValue}
          >
            {option.name}
          </FilterButton>
        ))
      )}
    </StyledFilter>
  );
}

export default Filter;
