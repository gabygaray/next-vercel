import React, { PropsWithChildren } from 'react';
 
type Props = {};

export const DarkLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      {children}
    </div>
  );
};
