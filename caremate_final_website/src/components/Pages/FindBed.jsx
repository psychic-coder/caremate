import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Dialog } from "../../components/ui/dialog";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
const HospitalManagementSystem = () => {
  const [hospitals, setHospitals] = useState([]);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    contact: "",
  });

  useEffect(() => {
    // Simulated API call to fetch initial hospital data
    fetchHospitalData();

    // Simulated real-time updates
    const interval = setInterval(() => {
      updateRandomHospital();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchHospitalData = () => {
    const initialHospitals = [
      {
        id: 1,
        name: "All India Institute of Medical Sciences (AIIMS)",
        bedsAvailable: 2500,
        lat: 28.5672,
        lng: 77.21,
        specialties: ["General Medicine", "Cardiology", "Neurology"],
      },
      {
        id: 2,
        name: "Safdarjung Hospital",
        bedsAvailable: 1800,
        lat: 28.5677,
        lng: 77.2042,
        specialties: ["Orthopedics", "Gynecology", "Pediatrics"],
      },
      {
        id: 3,
        name: "Lok Nayak Hospital",
        bedsAvailable: 2000,
        lat: 28.6389,
        lng: 77.2403,
        specialties: ["Emergency Medicine", "Surgery", "Pulmonology"],
      },
      {
        id: 4,
        name: "Ram Manohar Lohia Hospital",
        bedsAvailable: 1500,
        lat: 28.626,
        lng: 77.2006,
        specialties: ["Oncology", "Nephrology", "Gastroenterology"],
      },
      {
        id: 5,
        name: "GTB Hospital",
        bedsAvailable: 1700,
        lat: 28.6857,
        lng: 77.3124,
        specialties: ["Trauma Care", "Burns", "Plastic Surgery"],
      },
      {
        id: 6,
        name: "Lady Hardinge Medical College",
        bedsAvailable: 1200,
        lat: 28.6334,
        lng: 77.2142,
        specialties: ["Obstetrics", "Neonatology", "Pediatric Surgery"],
      },
      {
        id: 7,
        name: "Apollo Hospital",
        bedsAvailable: 700,
        lat: 28.5616,
        lng: 77.2827,
        specialties: ["Cardiology", "Neurosurgery", "Robotic Surgery"],
      },
      {
        id: 8,
        name: "Max Super Speciality Hospital",
        bedsAvailable: 600,
        lat: 28.5731,
        lng: 77.275,
        specialties: ["Oncology", "Orthopedics", "Bariatric Surgery"],
      },
    ];
    setHospitals(initialHospitals);
  };

  const updateRandomHospital = () => {
    setHospitals((prevHospitals) => {
      const updatedHospitals = [...prevHospitals];
      const randomIndex = Math.floor(Math.random() * updatedHospitals.length);
      const randomChange = Math.floor(Math.random() * 10) - 5; // Random number between -5 and 5
      updatedHospitals[randomIndex] = {
        ...updatedHospitals[randomIndex],
        bedsAvailable: Math.max(
          0,
          updatedHospitals[randomIndex].bedsAvailable + randomChange
        ),
      };
      return updatedHospitals;
    });
  };

  const handleBooking = () => {
    if (selectedHospital && bookingDetails.name && bookingDetails.contact) {
      setHospitals((prevHospitals) =>
        prevHospitals.map((hospital) =>
          hospital.id === selectedHospital.id
            ? { ...hospital, bedsAvailable: hospital.bedsAvailable - 1 }
            : hospital
        )
      );
      alert(
        `Booking confirmed at ${selectedHospital.name} for ${bookingDetails.name}`
      );
      setSelectedHospital(null);
      setBookingDetails({ name: "", contact: "" });
    } else {
      alert("Please fill in all booking details");
    }
  };

  const customMarkerIcon = new L.Icon({
    iconUrl:
      "https://img.icons8.com/?size=100&id=30568&format=png&color=000000",
    iconSize: [30, 30],
  });

  return (
    <div
      className=" max-w-7xl mx-auto "
      style={{ width: "70%", marginTop: "7rem" }}
    >
      <Card className="mb-6 m-20">
        <CardHeader className="text-[#252b61]">
          <CardTitle>Hospital Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ height: "400px", width: "100%" }}>
            <MapContainer
              center={[28.6139, 77.209]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {hospitals.map((hospital) => (
                <Marker
                  key={hospital.id}
                  position={[hospital.lat, hospital.lng]}
                  icon={customMarkerIcon}
                >
                  <Popup>
                    <b style={{ color: "#252b61" }}>{hospital.name}</b>
                    <br />
                    Beds Available: {hospital.bedsAvailable}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </CardContent>
      </Card>

      {/* Hospital Table */}
      <Card className="mb-20 overflow-x-auto relative">
        <CardHeader className="text-[#252b61]">
          <CardTitle>Hospital Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow className="font-bold">
                <TableHeader>Hospital Name</TableHeader>
                <TableHeader>Beds Available</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {hospitals.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell>{hospital.name}</TableCell>
                  <TableCell className="bg-green-500">
                    {hospital.bedsAvailable}
                  </TableCell>
                  <TableCell>
                    <Dialog
                      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                      trigger={
                        <Button
                          onClick={() => setSelectedHospital(hospital)}
                          className="p-4 bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition-colors"
                          style={{backgroundColor:"green"}}
                        >
                          Book
                        </Button>
                      }
                      title={`Book a Bed at ${hospital.name}`}
                    >
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <div className="grid gap-4 py-4 text-center">
                          <Input
                            placeholder="Patient Name"
                            value={bookingDetails.name}
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                name: e.target.value,
                              })
                            }
                            className="border border-gray-300 p-2 rounded"
                          />
                          <Input
                            placeholder="Contact Number"
                            value={bookingDetails.contact}
                            onChange={(e) =>
                              setBookingDetails({
                                ...bookingDetails,
                                contact: e.target.value,
                              })
                            }
                            className="border border-gray-300 p-2 rounded"
                          />
                          <Button
                            onClick={handleBooking}
                            className="bg-blue-500 text-white rounded shadow-lg hover:bg-blue-600 transition-colors"
                            style={{backgroundColor:"blue"}}
                          >
                            Confirm Booking
                          </Button>
                        </div>
                      </div>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default HospitalManagementSystem;

