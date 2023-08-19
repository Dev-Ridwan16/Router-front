import React, { useCallback, useState } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 8.1691,
  lng: 4.2644,
}

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAUiLAMm0pDtpT0yGvME0WGWg9xOLTX-Iw",
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callBack(map) {
    const bounds = new window.google.map.LatLngBonds(center)

    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callBack(map) {
    setMap(null)
  }, [])

  return (
    <div className="h-[100vh] flex items-center justify-center text-tertiary text-headingText font-headingFont font-bold z-0">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onUnmount={onUnmount}
        ></GoogleMap>
      )}
    </div>
  )
}

export default Map
