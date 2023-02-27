import { FiSearch } from 'react-icons/fi';
import { useSearchParams } from 'react-router-dom';
import { Header, SearchForm, Button, Input } from './Search.styled';

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = event => {
    event.preventDefault();
    const query = event.target.query.value.toLocaleLowerCase().trim();
    if (!query) return;
    setSearchParams({ query });
    console.log(searchParams);
  };
  return (
    <Header>
      <SearchForm onSubmit={onSubmit}>
        <Button type="submit">
          <FiSearch size="16px" />
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
        />
      </SearchForm>
    </Header>
  );
};
