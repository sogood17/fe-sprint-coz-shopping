import React from "react";

// infoMessage는 span 요소의 textContent, textColor은 글자색이 되는 props입니다.
const InfoText = ({infoMessage, textColor}) => (
<span style={{color: textColor}}>{infoMessage}</span>
);

export default InfoText; 