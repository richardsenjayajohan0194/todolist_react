interface Props {
  tag_header: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Specify allowed header tags
  header: string; // The text to display in the header
}

const HeaderForm = ({ tag_header, header }: Props) => {
  const Tag = tag_header; // Assign the tag to a variable
  return (<Tag>{header}</Tag>); // Use the variable as a JSX tag
};

export default HeaderForm;
