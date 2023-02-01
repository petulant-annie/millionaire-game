import React from 'react';

export const SidebarItem: React.FC<{
  amount: string;
  additionalClassName: string;
}> = ({
  amount,
  additionalClassName, // change style
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-line-wrapper">
        <div
          className={`sidebar-btn-line-left ${additionalClassName}-line-left`}
        ></div>

        <div className="sidebar-btn-wrapper">
          <div
            className={`sidebar-triangle-left ${additionalClassName}-triangle-left`}
          ></div>
          <button
            className={`sidebar-amount-button ${additionalClassName}-amount-button`}
          >
            $ {amount}
          </button>
          <div className="sidebar-arrow-wrapper">
            <div
              className={`sidebar-triangle-right ${additionalClassName}-triangle-right`}
            ></div>
          </div>
        </div>

        <div
          className={`sidebar-btn-line-right ${additionalClassName}-line-right`}
        ></div>
      </div>
    </div>
  );
};
