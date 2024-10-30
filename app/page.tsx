"use client";
import { fetchTenements } from "@/lib/tenement";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useRef, useState } from "react";
import Map, { Marker, type MapRef } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import type { Tenement } from "@/types";
import { TenementCard, TenementMapCard } from "@/components";
import { NavigationContext } from "@/components/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeId, setActiveId] = useState(-1);
  const [coords, setCoords] = useState({
    longitude: 16.4042,
    latitude: 48.2151,
    zoom: 1,
  });
  const { filter } = useContext(NavigationContext);

  const mapRef = useRef<MapRef>(null);

  const fetchData = async () => {
    const tenements = await fetchTenements({ filter });
    calculateCoords(tenements);
    return tenements;
  };

  const {
    data: tenements,
    refetch,
    isFetching,
  } = useQuery<Tenement[]>({
    queryKey: ["catalogue"],
    queryFn: fetchData,
    initialData: [],
    retry: false,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [filter]);

  function calculateCoords(mapData: Tenement[]) {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      const bounds = new mapboxgl.LngLatBounds();

      mapData.forEach(({ location }) => {
        bounds.extend([location[0], location[1]]);
      });

      map.fitBounds(bounds, { padding: 50, duration: 1000 });

      setCoords({
        longitude: mapData[0].location[0],
        latitude: mapData[0].location[1],
        zoom: 15,
      });
    }
  }

  const activeTenement = activeId
    ? tenements.find(({ id }) => id === activeId)
    : null;

  return (
    <div className="flex w-full h-dvh px-5 mt-[5px] gap-1">
      <Map
        mapboxAccessToken="pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ"
        mapLib={import("mapbox-gl") as any}
        initialViewState={coords}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        ref={mapRef}
        style={{ width: "50%", height: "1000px" }}
      >
        <>
          {tenements?.map((marker: Tenement, idx: number) => {
            return (
              <Marker
                longitude={marker.location[0]}
                latitude={marker.location[1]}
                key={idx}
              >
                <div
                  className="size-[45px] bg-white rounded-full text-black text-lg flex justify-center items-center"
                  onMouseOver={() => setActiveId(marker.id)}
                  onMouseOut={() => setActiveId(-1)}
                >
                  {marker.id}
                </div>
              </Marker>
            );
          })}
          <AnimatePresence>
            {activeTenement && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
              >
                <TenementMapCard tenement={activeTenement} />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      </Map>
      <div className="grow basis-1/2">
        <div className="text-[26px]/[31.2px] text-[#000000] bg-white pl-6 pt-5 font-medium py-4 border-b border-[#000000]/[10%]">
          Listing around me
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6 px-4">
          {isFetching || !tenements.length
            ? [1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  className="rounded-md animate-pulse bg-gray-400 h-[700px]"
                  key={item}
                />
              ))
            : tenements.map((tenement) => (
                <TenementCard tenement={tenement} key={tenement.id} />
              ))}
        </div>
      </div>
    </div>
  );
}
