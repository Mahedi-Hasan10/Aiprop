import Link from "next/link";
import { Fragment } from "react";
const Button = ({ children, href, className, ...props }) => {
  let Wrapper = !!href
    ? ({ children }) => <Link href={href}>{children}</Link>
    : Fragment;

  return (
    <Wrapper>
      <button
        {...props}
        className={
          "bg-primary text-Drak_color rounded px-4 py-2 text-sm font-medium hover:bg-amber-500 h-fit" +
          (className || "")
        }
      >
        {children}
      </button>
    </Wrapper>
  );
};

export default Button;
