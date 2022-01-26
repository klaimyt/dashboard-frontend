import React from "react";

const SvgTheme = (props: any) => {
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    focusable="false"
    width="1em"
    height="1em"
    style={{transform: "rotate(360deg)"}}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    >
      <path
        d="M12.0341 6.57956C10.5875 6.57956 9.20007 7.15423 8.17714 8.17716C7.15422 9.20008 6.57954 10.5875 6.57954 12.0341C6.57954 13.4807 7.15422 14.8681 8.17714 15.891C9.20007 16.914 10.5875 17.4886 12.0341 17.4886C13.4807 17.4886 14.8681 16.914 15.891 15.891C16.914 14.8681 17.4886 13.4807 17.4886 12.0341C17.4886 10.5875 16.914 9.20008 15.891 8.17716C14.8681 7.15423 13.4807 6.57956 12.0341 6.57956V6.57956Z"
        fill="var(--theme-icon-primary)"
      />
      {!props.isLight && (
        <path
          d="M14.4746 6.2436C13.138 6.2436 11.8562 6.77453 10.9112 7.7196C9.96611 8.66466 9.43518 9.94644 9.43518 11.283C9.43518 12.6195 9.96611 13.9013 10.9112 14.8463C11.8562 15.7914 13.138 16.3223 14.4746 16.3223C15.8111 16.3223 17.0929 15.7914 18.0379 14.8463C18.983 13.9013 19.5139 12.6195 19.5139 11.283C19.5139 9.94644 18.983 8.66466 18.0379 7.7196C17.0929 6.77453 15.8111 6.2436 14.4746 6.2436V6.2436Z"
          fill="var(--theme-icon-secondary)"
        />
      )}
      {props.isLight && (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0341 0.0341034C12.3234 0.0341034 12.6009 0.149038 12.8055 0.353623C13.0101 0.558208 13.125 0.835685 13.125 1.12501V2.21592C13.125 2.50525 13.0101 2.78273 12.8055 2.98731C12.6009 3.1919 12.3234 3.30683 12.0341 3.30683C11.7448 3.30683 11.4673 3.1919 11.2627 2.98731C11.0581 2.78273 10.9432 2.50525 10.9432 2.21592V1.12501C10.9432 0.835685 11.0581 0.558208 11.2627 0.353623C11.4673 0.149038 11.7448 0.0341034 12.0341 0.0341034ZM2.53554 2.53556C2.74012 2.33104 3.01755 2.21615 3.30682 2.21615C3.59609 2.21615 3.87351 2.33104 4.07809 2.53556L5.71445 4.17192C5.91317 4.37767 6.02313 4.65324 6.02064 4.93927C6.01816 5.2253 5.90343 5.49891 5.70116 5.70118C5.4989 5.90344 5.22529 6.01817 4.93925 6.02066C4.65322 6.02314 4.37765 5.91318 4.17191 5.71447L2.53554 4.0781C2.33103 3.87353 2.21614 3.5961 2.21614 3.30683C2.21614 3.01756 2.33103 2.74013 2.53554 2.53556ZM21.5326 2.53556C21.7371 2.74013 21.852 3.01756 21.852 3.30683C21.852 3.5961 21.7371 3.87353 21.5326 4.0781L19.8963 5.71447C19.7956 5.81866 19.6753 5.90177 19.5422 5.95894C19.4091 6.01611 19.2659 6.04621 19.1211 6.04747C18.9762 6.04873 18.8326 6.02112 18.6985 5.96627C18.5644 5.91142 18.4426 5.83042 18.3402 5.72799C18.2378 5.62556 18.1568 5.50376 18.1019 5.36969C18.0471 5.23562 18.0195 5.09197 18.0207 4.94712C18.022 4.80227 18.0521 4.65912 18.1092 4.52603C18.1664 4.39293 18.2495 4.27256 18.3537 4.17192L19.9901 2.53556C20.1947 2.33104 20.4721 2.21615 20.7614 2.21615C21.0506 2.21615 21.3281 2.33104 21.5326 2.53556ZM0.0340881 12.0341C0.0340881 11.7448 0.149023 11.4673 0.353608 11.2627C0.558193 11.0581 0.83567 10.9432 1.125 10.9432H2.21591C2.50523 10.9432 2.78271 11.0581 2.9873 11.2627C3.19188 11.4673 3.30682 11.7448 3.30682 12.0341C3.30682 12.3234 3.19188 12.6009 2.9873 12.8055C2.78271 13.0101 2.50523 13.125 2.21591 13.125H1.125C0.83567 13.125 0.558193 13.0101 0.353608 12.8055C0.149023 12.6009 0.0340881 12.3234 0.0340881 12.0341ZM20.7614 12.0341C20.7614 11.7448 20.8763 11.4673 21.0809 11.2627C21.2855 11.0581 21.5629 10.9432 21.8523 10.9432H22.9432C23.2325 10.9432 23.51 11.0581 23.7146 11.2627C23.9192 11.4673 24.0341 11.7448 24.0341 12.0341C24.0341 12.3234 23.9192 12.6009 23.7146 12.8055C23.51 13.0101 23.2325 13.125 22.9432 13.125H21.8523C21.5629 13.125 21.2855 13.0101 21.0809 12.8055C20.8763 12.6009 20.7614 12.3234 20.7614 12.0341ZM5.71445 18.3537C5.91897 18.5583 6.03385 18.8357 6.03385 19.125C6.03385 19.4143 5.91897 19.6917 5.71445 19.8963L4.07809 21.5326C3.87234 21.7314 3.59677 21.8413 3.31074 21.8388C3.02471 21.8364 2.75109 21.7216 2.54883 21.5194C2.34657 21.3171 2.23184 21.0435 2.22935 20.7575C2.22687 20.4714 2.33682 20.1959 2.53554 19.9901L4.17191 18.3537C4.37648 18.1492 4.65391 18.0343 4.94318 18.0343C5.23245 18.0343 5.50988 18.1492 5.71445 18.3537ZM18.3537 18.3537C18.5583 18.1492 18.8357 18.0343 19.125 18.0343C19.4143 18.0343 19.6917 18.1492 19.8963 18.3537L21.5326 19.9901C21.7314 20.1959 21.8413 20.4714 21.8388 20.7575C21.8363 21.0435 21.7216 21.3171 21.5193 21.5194C21.3171 21.7216 21.0435 21.8364 20.7574 21.8388C20.4714 21.8413 20.1958 21.7314 19.9901 21.5326L18.3537 19.8963C18.1492 19.6917 18.0343 19.4143 18.0343 19.125C18.0343 18.8357 18.1492 18.5583 18.3537 18.3537ZM12.0341 20.7614C12.3234 20.7614 12.6009 20.8763 12.8055 21.0809C13.0101 21.2855 13.125 21.563 13.125 21.8523V22.9432C13.125 23.2325 13.0101 23.51 12.8055 23.7146C12.6009 23.9192 12.3234 24.0341 12.0341 24.0341C11.7448 24.0341 11.4673 23.9192 11.2627 23.7146C11.0581 23.51 10.9432 23.2325 10.9432 22.9432V21.8523C10.9432 21.563 11.0581 21.2855 11.2627 21.0809C11.4673 20.8763 11.7448 20.7614 12.0341 20.7614Z"
          fill="var(--theme-icon-secondary)"
        />
      )}
    </svg>
  );
};

export default SvgTheme;