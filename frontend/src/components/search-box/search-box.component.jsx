import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const navigate = useNavigate();
    const { keyword: urlKeyword } = useParams();
    const [keyword, setKeyword] = useState(urlKeyword || '');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            setKeyword('');
            navigate(`/search/${keyword}`);
        } else {
            navigate('/');
        }
    }

  return (
    <Form onSubmit={submitHandler} className='d-flex position-relative'>
        <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5'
        ></Form.Control>
        <Button type='submit' variant='outline-none' className='search-button'>
            <SearchIcon color="dark" />
        </Button>
    </Form>
  )
}

export default SearchBox;