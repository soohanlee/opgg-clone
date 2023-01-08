import { makeAutoObservable } from "mobx";

class SearchSummonerStore {
  isOpen: boolean;
  input: string;

  constructor() {
    this.isOpen = false;
    this.input = "";

    makeAutoObservable(this);
  }

  initialize = () => {
    this.isOpen = false;
    this.input = "";
  };

  setIsOpen = (isOpen: boolean) => {
    this.isOpen = isOpen;
  };

  setInput = (input: string) => {
    this.input = input;
  };
}

export const searchSummonerStore = new SearchSummonerStore();
