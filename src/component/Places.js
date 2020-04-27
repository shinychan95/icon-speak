import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from './useAsync';
import Place from './Place';


// useAsync 내 callback 함수에 해당하는 부분
async function getPlaces() {
	const Kakao = axios.create({
		baseURL: "https://dapi.kakao.com",
		headers: {
			Authorization: "KakaoAK 2dde8f0dbf6d40840e4a727cd92aab7a",
		}
	});

	const response = await Kakao.get("/v2/local/search/keyword.json?y=36.021397&x=129.337100&radius=1000&query=빵");

  return response;
}

function Places() {
	// useAsync Hook에서 반환해주는 [state, fetchData]가 [state, refetch]에 들어간다.
  const [state, refetch] = useAsync(getPlaces, [], true);
  const [placeId, setPlaceId] = useState(null);
  const { loading, data: places, error } = state;

  if (loading) return <div>로딩중 ...</div>;
  if (error) return <div>에러!!!</div>;
  if (!places) return <button onClick={refetch}>불러오기</button>;

  console.log("State: ", state)

  return (
    <>
      {/* <ul>
        {places.map(place => (
          <li key={place.id} onClick={() => setPlaceId(place.id)}>
            {place.placename} ({place.name})
          </li>
        ))}
      </ul> */}
      <button onClick={refetch}>다시 불러오기</button>
      {/* {placeId && <Place id={placeId} />} */}
    </>
  );
}

export default Places;