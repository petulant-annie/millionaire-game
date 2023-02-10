import React from 'react';
import { SidebarItem } from './SidebarItem';
import winningAmount from '../../helpers/winningAmount.json';
import './sidebar.css';

export const Sidebar: React.FC<{
  currentIndex: number;
  isMenuBurgerOpen: boolean;
}> = ({ currentIndex, isMenuBurgerOpen }) => {
  const winnings = winningAmount.reversedWinnings.map((amount) => {
    let additionalClassName;

    if (winningAmount.winning[currentIndex] === amount) {
      additionalClassName = 'highlighted';
    } else if (
      Number(winningAmount.winning[currentIndex].split(',').join(''))
      > Number(amount.split(',').join(''))
    ) {
      additionalClassName = 'inactive';
    } else additionalClassName = '';

    return (
      <SidebarItem
        key={amount}
        amount={amount}
        additionalClassName={additionalClassName}
      />
    );
  });

  const mobileView = isMenuBurgerOpen ? 'sidebar-open' : 'sidebar-closed';

  return (
    <div className={`sidebar ${mobileView}`}>
      <div className="sidebar-items-wrapper">{winnings}</div>
    </div>
  );
};
