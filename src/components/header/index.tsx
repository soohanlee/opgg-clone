import React, { useCallback, RefObject, useRef, useEffect } from "react";
import useClickOutside from "@app/hooks/useClickOutside";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { recentSearchStore } from "@app/stores/recentSearchStore";
import { searchSummonerStore } from "@app/stores/searchSummonerStore";
import { observer } from "mobx-react-lite";
import RecentSearchComponent from "../RecentSearch";

const Header = observer(() => {
  useEffect(() => {
    recentSearchStore.intitialize();
  });

  const inputRef = useRef<null | HTMLInputElement>(null);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      searchSummonerStore.setInput(event.target.value);
    },
    []
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchSummoner();
    }
  };

  const handleSearchSummoner = (event?: React.MouseEvent<HTMLElement>) => {
    event?.preventDefault();
    if (!searchSummonerStore.input) return;
    recentSearchStore.setRecentSearch({
      name: searchSummonerStore.input,
      isLiked: false,
    });
    searchSummonerStore.setIsOpen(false);
    navigate(`/summoners/${searchSummonerStore.input}`);
    searchSummonerStore.setInput("");
  };

  const handleClickInput = () => {
    searchSummonerStore.setIsOpen(true);
  };

  const { ref } = useClickOutside(
    searchSummonerStore.isOpen,
    searchSummonerStore.setIsOpen
  );

  return (
    <Container>
      <Nav>
        <InputContainer ref={ref as RefObject<HTMLFormElement>}>
          <Input
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder={t("header.placeholder") || ""}
            value={searchSummonerStore.input}
            onChange={handleChange}
            onClick={handleClickInput}
          />
          <Button type="submit" onClick={handleSearchSummoner}>
            .GG
          </Button>
          {searchSummonerStore.isOpen && <RecentSearchComponent />}
        </InputContainer>
      </Nav>
    </Container>
  );
});

export default Header;

const Container = styled.div`
  padding: 5.3rem 0 ${({ theme }) => theme.spacing.lg} 0;
  background: #1ea1f7;
`;

const Nav = styled.div`
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  &:focus {
    outline: 0;
  }
`;

const InputContainer = styled.form`
  box-sizing: border-box;
  width: 26rem;
  height: 3.2rem;
  padding: 0.9rem 1.2rem 0.8rem 1.4rem;
  border-radius: 0.2rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 0 0 auto;
  position: relative;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  border: 0;
  color: ${({ theme }) => theme.colors.brightBlue};
  font-weight: 900;
`;
