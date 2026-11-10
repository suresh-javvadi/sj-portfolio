import { cn } from "../../lib/cn";

export default function Container({ children, className = "", as: Tag = "div" }) {
  return <Tag className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}>{children}</Tag>;
}
