import styled from "styled-components";

const CustomScrollbarDiv = styled.div`
  overflow-y: scroll; /* Ensure the element has a scrollbar */

  /* Customize the scrollbar */
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    border-radius: 10px;
    background-color: #f0f0f0;
  }

  /* Customize the scrollbar thumb */
  ::-webkit-scrollbar-thumb {
    background-color: #666;
    border-radius: 10px;
    border: 2px solid #f0f0f0;
  }

  /* Customize the scrollbar track */
  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* Hover effect for the scrollbar thumb */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #444;
  }
`;

const PageWithCustomScrollbar = () => {
  return <CustomScrollbarDiv></CustomScrollbarDiv>;
};

export default PageWithCustomScrollbar;
