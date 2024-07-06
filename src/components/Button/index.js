import { StyledButton } from "./styles";

const Button = ({ children, theme }) => {
  return (
    <StyledButton
      className={`btn ${
        theme === "dark"
          ? "btn-dark"
          : "btn-ligth border border-gray border-1 text-black"
      } py-2 px-5 rounded-pill`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
