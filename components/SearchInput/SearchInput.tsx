import { Search } from "lucide-react";
import styles from "./SearchInput.module.css";
const SearchInput = ({
  onChange,
  
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => (
  <div className={styles.wrapper}>
    <Search />
    <input
      className={styles.input}
      placeholder="Filter by Country Name"
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
