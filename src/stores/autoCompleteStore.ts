import { Summoner } from "@app/apis/types";
import { makeAutoObservable } from "mobx";

class AutoCompleteStore {
  isOpen: boolean;
  input: string;
  filteredUsers: Summoner[];
  activeIndex: number;

  constructor() {
    this.isOpen = false;
    this.input = "";
    this.filteredUsers = [];
    this.activeIndex = 0;

    makeAutoObservable(this);
  }

  initializedData = () => {
    this.isOpen = false;
    this.input = "";
  };

  setIsOpen = (isOpen: boolean) => {
    this.isOpen = isOpen;
  };

  setInput = (input: string) => {
    this.input = input;
  };

  setFilteredUsers = (filteredUsers: Summoner[]) => {
    this.filteredUsers = filteredUsers;
  };

  setActiveIndex = (activeIndex: number) => {
    this.activeIndex = activeIndex;
  };

  getActiveUser = () => {
    return this.filteredUsers[this.activeIndex];
  };
}

export const autoCompleteStore = new AutoCompleteStore();
