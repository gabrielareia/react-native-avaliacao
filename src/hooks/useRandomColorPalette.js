import { useState, useEffect } from "react";
import { useQuery } from "react-query";

const useRandomColorPalette = () => {
  const [colors, setColors] = useState({ lightColors: null, darkColors: null });

  const { isLoading, error, data, refetch } = useQuery(
    'colorPalette',
    () => fetch('http://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify({ model: "default" })
    }).then((res) => res.json()),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  const setRandomPalette = () => {
    refetch({ throwOnError: true });
  };

  const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  useEffect(() => {
    if (!isLoading && data && data.result) {
      const hexLightColors = data.result.map((r) => rgbToHex(r[0], r[1], r[2]))
      const darkFactor = 0.3;
      const hexDarkColors = data.result.map((r) => rgbToHex(Math.floor(r[0] * darkFactor), Math.floor(r[1] * darkFactor), Math.floor(r[2] * darkFactor)))
      setColors({ lightColors: hexLightColors, darkColors: hexDarkColors });
    };
  }, [data]);

  return {
    colors,
    setRandomPalette,
    error,
    isLoading,
  };
};

export default useRandomColorPalette;
