import { ButtonProps } from '../../interfaces/ButtonProps';
import './Button.scss';

function Button({ text }:ButtonProps) {
  return (
    <button type="button">{text}</button>
  );
}

export default Button;
