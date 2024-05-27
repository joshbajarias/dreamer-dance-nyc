import React from 'react';
import PropTypes from 'prop-types';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from './NavBar';

export interface HeaderProps {
  label?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  textAlign?: 'left' | 'center' | 'right';
  width?: string;
  height?: string;
  textHeight?: 'top' | 'center' | 'bottom';
  links?: Array<{ name: string; url: string }>;
}

const Header: React.FC<HeaderProps> = ({
  label = 'Welcome to Dreamer Dance NYC',
  backgroundColor,
  size = 'medium',
  textAlign = 'center',
  width = '100%',
  height = '150px',
  textHeight = 'center',
  links = [],
}) => {
  const sizeClass = size === 'small' ? 'text-sm' : size === 'large' ? 'text-xl' : 'text-base';
  const textAlignClass = textAlign === 'left' ? 'text-left' : textAlign === 'center' ? 'text-center' : 'text-right';

  const justifyContent = textHeight === 'top' ? 'flex-start' : textHeight === 'center' ? 'center' : 'flex-end';

  const style: React.CSSProperties = {
    backgroundColor,
    width,
    height,
    display: 'flex',
    alignItems: justifyContent,
    justifyContent: textAlign,
  };

  return (
    <header style={style} className={`${sizeClass} ${textAlignClass}`}>
      <h1>{label}</h1>
      <NavigationMenu>
        {links.map((link) => (
          <NavigationMenuItem key={link.name}>
            <NavigationMenuLink href={link.url}>{link.name}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenu>
    </header>
  );
};

Header.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  width: PropTypes.string,
  height: PropTypes.string,
  textHeight: PropTypes.oneOf(['top', 'center', 'bottom']),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default Header;
