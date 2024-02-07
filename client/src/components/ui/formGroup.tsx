import { ComponentProps } from "react";

type FormGroupProps = ComponentProps<any>;

const FormGroup = ({ children }: FormGroupProps) => {
  return <section className="">{children}</section>;
};

export default FormGroup;
