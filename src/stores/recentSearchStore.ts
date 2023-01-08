import { makeAutoObservable } from "mobx";

export type recentSearchUser = {
  name: string;
  isLiked: boolean;
};

const recentSearchKey = "recentSearch";
const likedSearchKey = "likedSearch";

class RecentSearch {
  recentSearches: recentSearchUser[] = [];
  likedSearchUsers: recentSearchUser[] = [];

  constructor() {
    this.recentSearches = [];
    this.likedSearchUsers = [];

    makeAutoObservable(this);
  }

  intitialize = () => {
    this.recentSearches = this.getRecentSearch();
    this.likedSearchUsers = this.getLikedSearch();
  };

  setRecentSearch = ({ name, isLiked }: recentSearchUser) => {
    const recentSearch: recentSearchUser[] = this.getRecentSearch();
    const newRecentSearch = recentSearch.filter(
      (item: recentSearchUser) => item.name !== name
    );
    newRecentSearch.unshift({ name, isLiked });
    localStorage.setItem(recentSearchKey, JSON.stringify(newRecentSearch));
    this.recentSearches = newRecentSearch;
  };

  getRecentSearch = () => {
    const recentSearch = JSON.parse(
      localStorage.getItem(recentSearchKey) || "[]"
    );

    return recentSearch;
  };

  getLikedSearch = () => {
    const likedSearch = JSON.parse(
      localStorage.getItem(likedSearchKey) || "[]"
    );
    return likedSearch;
  };

  setToggleLiked = (name: recentSearchUser["name"]) => {
    const recentSearch: recentSearchUser[] = this.getRecentSearch();
    const newRecentSearch = recentSearch.map((item) => {
      if (item.name === name) {
        return { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    const likedSearchUsers = newRecentSearch.filter((item) => item.isLiked);

    localStorage.setItem(recentSearchKey, JSON.stringify(newRecentSearch));
    localStorage.setItem(likedSearchKey, JSON.stringify(likedSearchUsers));

    this.recentSearches = newRecentSearch;
    this.likedSearchUsers = likedSearchUsers;
  };

  removeSearch = (name: string) => {
    const recentSearch = this.getRecentSearch();
    const newRecentSearch = recentSearch.filter(
      (item: recentSearchUser) => item.name !== name
    );
    localStorage.setItem(recentSearchKey, JSON.stringify(newRecentSearch));
    this.recentSearches = newRecentSearch;
  };

  removeLikedSearch = (name: string) => {
    const recentSearch: recentSearchUser[] = this.getLikedSearch();
    const newRecentSearch = recentSearch.filter((item) => item.name !== name);

    localStorage.setItem(likedSearchKey, JSON.stringify(newRecentSearch));
    this.setToggleLiked(name);
    this.likedSearchUsers = newRecentSearch;
  };
}

export const recentSearchStore = new RecentSearch();
