import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { View } from "../../components/View";
import { CharacterHeadline } from "../../components/CharacterHeadline";

import { fetchApi } from "../../api";

export const CharacterViewContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState({});
  const params = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetchApi(`/characters/${params.id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.data?.results) {
      console.log(data.data.results);
      setCharacter(data.data.results[0]);
    }
  }, [data]);

  return (
    <View>
      <CharacterHeadline {...character} />
    </View>
  );
};
