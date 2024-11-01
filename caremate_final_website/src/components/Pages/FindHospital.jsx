import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Clock, UserCheck, Loader2, RefreshCcw, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";

import { Tabs, TabsContent } from "../../components/ui/tabs";

const hospitals = [
  { id: 1, name: "AIIMS Delhi", location: "Ansari Nagar" },
  { id: 2, name: "Safdarjung Hospital", location: "Ansari Nagar West" },
  { id: 3, name: "Lok Nayak Hospital", location: "Delhi Gate" },
  { id: 4, name: "Sir Ganga Ram Hospital", location: "Rajinder Nagar" },
  { id: 5, name: "Max Super Speciality Hospital", location: "Saket" },
  { id: 6, name: "Apollo Hospital", location: "Sarita Vihar" },
];

const specializations = [
  "General",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Pediatrics",
];

const generateQueueData = () => {
  return specializations.map((spec) => ({
    name: spec,
    regularQueue: Math.floor(Math.random() * 20),
    emergencyQueue: Math.floor(Math.random() * 5),
    avgWaitTime: Math.floor(Math.random() * 60 + 15),
    doctorAvailable: Math.random() > 0.3,
  }));
};

const OPDSQueueModel = () => {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [queueData, setQueueData] = useState(generateQueueData());
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [alert, setAlert] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    refreshData();
  }, [selectedHospital]);

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setQueueData(generateQueueData());
      setIsLoading(false);
    }, 1000);
  };

  const handleEmergency = () => {
    if (selectedSpecialization) {
      setAlert({
        title: "Emergency Added",
        description: `Emergency patient added to ${selectedSpecialization} queue at ${selectedHospital.name}.`,
      });
      setTimeout(() => setAlert(null), 3000);

      setQueueData((prevData) =>
        prevData.map((spec) =>
          spec.name === selectedSpecialization
            ? { ...spec, emergencyQueue: spec.emergencyQueue + 1 }
            : spec
        )
      );
    }
  };

  const totalPatients = queueData.reduce(
    (sum, spec) => sum + spec.regularQueue + spec.emergencyQueue,
    0
  );
  const totalEmergencies = queueData.reduce(
    (sum, spec) => sum + spec.emergencyQueue,
    0
  );
  const avgWaitTime = Math.floor(
    queueData.reduce((sum, spec) => sum + spec.avgWaitTime, 0) /
      queueData.length
  );

  return (
    <div className="p-6 max-w-screen mx-auto bg-gray-100 min-h-screen pt-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " style={{marginTop:"8rem"}}>
      
      <Card className="bg-white shadow-lg mb-6">
        <CardHeader className="text-[#252b61]">
          <CardTitle>Select Hospital</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative  overflow-x-auto">
            <select
              value={selectedHospital.id}
              onChange={(e) =>
                setSelectedHospital(
                  hospitals.find((h) => h.id === parseInt(e.target.value))
                )
              }
              className="p-2 border-[#252b61] rounded-lg"
            >
              {hospitals.map((hospital) => (
                <option key={hospital.id} value={hospital.id}>
                  {hospital.name}
                </option>
              ))}
            </select>
            <p className="mt-2 text-sm text-[#252b61] flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {selectedHospital.location}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 overflow-x-auto">
        <Card className="bg-white shadow-lg">
          <CardHeader className=" text-[#252b61] rounded-t-lg">
            <CardTitle>Total Patients</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-5xl font-bold text-center">
              {totalPatients}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-[#252b61] rounded-t-lg">
            <CardTitle>Emergency Cases</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-5xl font-bold text-center text-red-600">
              {totalEmergencies}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-[#252b61] rounded-t-lg">
            <CardTitle>Avg. Wait Time</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-5xl font-bold text-center">
              {avgWaitTime} min
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="queue" className="mb-8 " >
        <TabsContent value="queue" className="mt-4">
          <Card className="bg-white shadow-lg">
            <CardHeader className="text-[#252b61]">
              <CardTitle>Queue Status at {selectedHospital.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={queueData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="regularQueue"
                    name="Regular Queue"
                    fill="#3498db"
                  />
                  <Bar
                    dataKey="emergencyQueue"
                    name="Emergency Queue"
                    fill="#e74c3c"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="mt-4 py-4" style={{marginBottom:"5rem"}}>
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>
                Department Details at {selectedHospital.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {queueData.map((spec) => (
                  <Card key={spec.name} className="bg-gray-50 shadow-md">
                    <CardHeader className="bg-gray-200">
                      <CardTitle >{spec.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center text-gray-800">
                        <UserCheck className="mr-2 text-gray-600" />
                        Status: {spec.doctorAvailable ? "Available" : "Busy"}
                      </p>
                      <p className="flex items-center text-gray-800 mt-2">
                        <Clock className="mr-2 text-gray-600" />
                        Wait Time: {spec.avgWaitTime} min
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-white shadow-lg mb-8 overflow-x-auto " style={{marginBottom:"5rem",paddingLeft:"3rem",paddingRight:"3rem"}}>
        <CardHeader className="text-[#252b61]">
          <CardTitle>Add Emergency at {selectedHospital.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <div className="relative w-[200px]">
            <select
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              value={selectedSpecialization}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 my-4"
            >
              <option value="" disabled>
                Select Specialization
              </option>
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
          <Button
            onClick={handleEmergency}
            className="ml-auto bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400"
            disabled={!selectedSpecialization || isLoading}
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <RefreshCcw className="w-5 h-5" />
            )}
            Add Emergency
          </Button>
        </CardContent>
      </Card>

      {alert && (
        <Alert variant="success" className="mt-6">
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default OPDSQueueModel;
