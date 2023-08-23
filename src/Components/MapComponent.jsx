import React, { useState, useEffect } from "react"
import ReactMapboxGl, { Marker, GeolocateControl } from "react-map-gl"

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 0,
    longitude: 0,
    zoom: 10,
  })
  useEffect(() => {
    // Get user's location using the browser's geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
          setViewport((prevViewport) => ({
            ...prevViewport,
            ...userLocation,
            zoom: 10, // Adjust the zoom level as needed
          }))
        },
        (error) => {
          console.error("Error getting user's location:", error)
        }
      )
    } else {
      console.log("Geolocation is not available in this browser.")
    }
  }, []) // Only run this effect once
  return (
    <div className="w-screen h-screen">
      <ReactMapboxGl
        {...viewport}
        mapboxAccessToken="pk.eyJ1Ijoicmlkd2FuLTE2IiwiYSI6ImNsbG5vMGE4bzAzOTUzbW1xcXA0YXZ6dmMifQ.yvbNro1eTWefPv0U6pb6hw"
        mapStyle="mapbox://styles/ridwan-16/cllnrkq6x001k01r4gavjat63"
        onMouseMove={(viewport) => {
          setViewport(viewport)
        }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </ReactMapboxGl>
    </div>
  )
}

export default MapComponent
