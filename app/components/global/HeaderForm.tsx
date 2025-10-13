import { memo } from "react";

interface Props {
  tag_header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Specify allowed header tags
  header: string; // The text to display in the header
  className?: string; // Optional className for additional styling
}

const HeaderForm = ({ tag_header, header, className }: Props) => {
  console.log("HeaderForm rendered");
  const Tag = tag_header; // Assign the tag to a variable
  return (
    <div className={className}>
      <Tag>{header}</Tag>
    </div>
  ); // Use the variable as a JSX tag
};

export default memo(HeaderForm);
