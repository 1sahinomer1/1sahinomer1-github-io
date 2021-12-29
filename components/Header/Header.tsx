import { useEffect } from 'react';

import { Moon, Sun } from 'components/Icons';

import * as S from './styles';

interface HeaderProps {
  theme: string;
  setTheme: (value: string) => void;
}

const Header = ({ theme, setTheme }: HeaderProps) => {
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
    localStorage.setItem('theme', theme);
  };
  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme === 'light' ? setTheme('dark') : setTheme('light');
  }, [setTheme]);

  return (
    <S.Header>
      <S.Nav>
        <S.RightMenu onClick={themeToggler}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </S.RightMenu>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
