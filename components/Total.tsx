import { useSelector } from "react-redux";
import { RootState } from '../store';

export const Total = () => {

  const count = useSelector((state: RootState) => state.count);

  return (
    <h2>{count}</h2>
  )
}