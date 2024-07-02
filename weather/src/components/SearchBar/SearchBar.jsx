import { Button, Form } from "react-bootstrap";
import styles from "./SearchBar.module.scss";
const SearchBar = () => {
  return (
    <>
      <Form>
        <Form.Group className={styles.searchBar}>
          <Form.Control
            size={"lg"}
            type="text"
            placeholder="Enter your city ..."
          ></Form.Control>
          <Button size={"sm"} variant="primary">
            Search
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchBar;

