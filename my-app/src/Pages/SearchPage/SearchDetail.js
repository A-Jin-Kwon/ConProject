import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageLayout from "../CommunityPage/PageLayout";
import { useLocation } from "react-router-dom";
import { convert } from "iso-country-code-to-korean";
import axios from "axios";
import { setHours } from "date-fns";

const baseURL = "https://api.themoviedb.org/3/";
const privateKey = "2d110def1aebc18d7c0afdc58440a8d7";
const baseLanguage = "ko";

const SearchDetail = () => {
  const location = useLocation();
  const contentType = location.state.media_type;
  const [data, setData] = useState({});

  // function setHistory() {
  //   let searchHistory = JSON.parse(localStorage.getItem("history"));
  //   contentType === "movie" ? searchHistory.push(`${data.title}`) : searchHistory.push(`${data.name}`);
  //   localStorage.setItem("history", JSON.stringify(searchHistory));
  // }

  useEffect(() => {
    const getMovieData = async () => {
      const res = await axios(`${baseURL}${location.state.media_type}/${location.state.id}?&api_key=${privateKey}&language=${baseLanguage}`);
      console.log(res.data);
      setData(res.data);
    };
    getMovieData();
    // setHistory();
  }, []);

  return (
    //빈배열 확인 필수임
    <>
      {Object.keys(data).length !== 0 ? (
        contentType === "movie" ? (
          <PageLayout>
            <AboutCon>
              <StyledImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`}></StyledImg>
              <ConInfoWrapper>
                {/* <Title>{data.name}</Title> */}
                <Title>{data.title}</Title>
                <EtcInfoWrapper>
                  <Div>개봉 | {data.release_date}</Div>
                  <Div>장르 | {data.genres[0].name}</Div>
                  <Div>국가 | {convert(data.production_countries[0].iso_3166_1)}</Div>
                  <Div>러닝타임 | {data.runtime}분</Div>
                </EtcInfoWrapper>
              </ConInfoWrapper>
            </AboutCon>
            <ConExplainWrapper>
              <ExplainInfo>정보</ExplainInfo>
              <ConExplain>{data.overview}</ConExplain>
            </ConExplainWrapper>
          </PageLayout>
        ) : (
          <PageLayout>
            <AboutCon>
              <StyledImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`}></StyledImg>
              <ConInfoWrapper>
                <Title>{data.name}</Title>
                <EtcInfoWrapper>
                  <Div>방송 시간 | {data.release_date}</Div>
                  <Div>
                    방송 기간 | {data.first_air_date} ~ {data.last_episode_to_air ? data.last_episode_to_air.air_date : ""}
                  </Div>
                  <Div>채널 | {data.networks[0].name}</Div>
                  <Div>장르 | {data.genres[0].name}</Div>
                </EtcInfoWrapper>
              </ConInfoWrapper>
            </AboutCon>
            <ConExplainWrapper>
              <ExplainInfo>정보</ExplainInfo>
              <ConExplain>{data.overview}</ConExplain>
            </ConExplainWrapper>
          </PageLayout>
        )
      ) : (
        <></>
      )}
    </>
  );
};

const AboutCon = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const StyledImg = styled.img`
  width: 280px;
  height: 390px;
  border-radius: 8px;
  margin-right: 20px;
`;

const ConInfoWrapper = styled.div``;

const Title = styled.div`
  font-weight: 700;
  font-size: 25px;
  margin-bottom: 20px;
  line-height: 27.63px;
`;

const EtcInfoWrapper = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
`;

const Div = styled.div``;

const ConExplainWrapper = styled.div`
  width: 100%;
`;

const ExplainInfo = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #e6e6e6;
  font-weight: 700;
  font-size: 22px;
  line-height: 24.31px;
  padding-bottom: 20px;
`;

const ConExplain = styled.div`
  box-sizing: border-box;
  padding-top: 2rem;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
`;
export default SearchDetail;
