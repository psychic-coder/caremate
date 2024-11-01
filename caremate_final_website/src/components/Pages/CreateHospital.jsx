import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

const HospitalDashboard = () => {
  const [showForm, setShowForm] = useState(true);
  const [hospitalData, setHospitalData] = useState(null);

  const [formData, setFormData] = useState({
    totalBeds: '',
    availableBeds: '',
    opdCenters: [{ name: '', patientCount: '', maxCapacity: '' }],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === 'totalBeds' || name === 'availableBeds') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      const newOpdCenters = [...formData.opdCenters];
      newOpdCenters[index] = { ...newOpdCenters[index], [name]: value };
      setFormData(prev => ({ ...prev, opdCenters: newOpdCenters }));
    }
  };

  const addOpdCenter = () => {
    setFormData(prev => ({
      ...prev,
      opdCenters: [...prev.opdCenters, { name: '', patientCount: '', maxCapacity: '' }],
    }));
  };

  const removeOpdCenter = (index) => {
    setFormData(prev => ({
      ...prev,
      opdCenters: prev.opdCenters.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHospitalData = {
      totalBeds: parseInt(formData.totalBeds),
      availableBeds: parseInt(formData.availableBeds),
      opdCenters: formData.opdCenters.map(center => ({
        name: center.name,
        patientCount: parseInt(center.patientCount),
        maxCapacity: parseInt(center.maxCapacity),
      })),
    };
    setHospitalData(newHospitalData);
    setShowForm(false);
  };

  const DataEntryForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Total Beds:</label>
        <Input
          type="number"
          name="totalBeds"
          value={formData.totalBeds}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Available Beds:</label>
        <Input
          type="number"
          name="availableBeds"
          value={formData.availableBeds}
          onChange={(e) => handleInputChange(e)}
          required
        />
      </div>
      <div>
        <h3 className="font-bold mb-2">OPD Centers</h3>
        {formData.opdCenters.map((center, index) => (
          <div key={index} className="mb-4 p-4 border rounded">
            <Input
              className="mb-2"
              placeholder="OPD Name"
              name="name"
              value={center.name}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
            <Input
              className="mb-2"
              type="number"
              placeholder="Current Patients"
              name="patientCount"
              value={center.patientCount}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
            <Input
              className="mb-2"
              type="number"
              placeholder="Max Capacity"
              name="maxCapacity"
              value={center.maxCapacity}
              onChange={(e) => handleInputChange(e, index)}
              required
            />
            <Button type="button" onClick={() => removeOpdCenter(index)} variant="destructive">
              Remove
            </Button>
          </div>
        ))}
        <Button type="button" onClick={addOpdCenter} variant="outline">
          Add OPD Center
        </Button>
      </div>
      <Button type="submit">Submit Data</Button>
    </form>
  );

  const Dashboard = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Bed Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{hospitalData.availableBeds}</p>
            <p className="text-sm text-gray-500">out of {hospitalData.totalBeds} beds available</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>OPD Centers Capacity</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hospitalData.opdCenters}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="patientCount" fill="#8884d8" name="Current Patients" />
                <Bar dataKey="maxCapacity" fill="#82ca9d" name="Max Capacity" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>OPD Centers Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">OPD Name</th>
                  <th className="p-2 text-left">Current Patients</th>
                  <th className="p-2 text-left">Max Capacity</th>
                  <th className="p-2 text-left">Availability</th>
                </tr>
              </thead>
              <tbody>
                {hospitalData.opdCenters.map((center, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-2">{center.name}</td>
                    <td className="p-2">{center.patientCount}</td>
                    <td className="p-2">{center.maxCapacity}</td>
                    <td className="p-2">{center.maxCapacity - center.patientCount} available</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <Button onClick={() => setShowForm(true)}>Edit Data</Button>
    </div>
  );

  return (
    <div className="p-6 w-10/12 md:w-7/12 mx-auto">
      {hospitalData === null || showForm ? <DataEntryForm /> : <Dashboard />}
    </div>
  );
};

export default HospitalDashboard;