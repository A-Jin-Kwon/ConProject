import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Follower from "./Follower";
// 예시로 포켓몬 사진을 사용했습니다.
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const pokemon = [];

function makePokemon() {
  for (let i = 1; i < 152; i++) {
    pokemon.push({ url: baseURL + i + ".png", id: i });
  }
}
makePokemon();
// 여기까지 포켓몬 관련 코드
// 실제 프로젝트와 관련 xxx

const FollowerContainers = () => {
  const currentMenu = useSelector((state) => state.communityReducer.currentMenu);
  useEffect(() => {
    console.log(currentMenu);
  }, [currentMenu]);

  return (
    <FollowerContainer>
      {pokemon
        .filter((it) => {
          return currentMenu === "movie"
            ? it.id < 30
            : currentMenu === "drama"
            ? it.id > 30 && it.id < 60
            : currentMenu === "entertainment"
            ? it.id > 60 && it.id < 90
            : currentMenu === "youtube"
            ? it.id > 90 && it.id < 152
            : it.id < 152;
        })
        .map((it) => {
          return <Follower key={it.id} src={it.url}></Follower>;
        })}
    </FollowerContainer>
  );
};

const FollowerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default FollowerContainers;
