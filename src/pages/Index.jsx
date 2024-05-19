import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, RadioGroup, Radio, Stack, CheckboxGroup, Checkbox, FormControl, FormLabel, FormErrorMessage, Select, Image, useToast } from "@chakra-ui/react";
import { FaUserGraduate, FaUserTie } from "react-icons/fa";

const Index = () => {
  const [userType, setUserType] = useState(null);
  const [studentData, setStudentData] = useState({
    email: "student@example.com",
    name: "John Doe",
    studentId: "123456",
    stream: "Computer Science",
    photo: 'https://images.unsplash.com/photo-1544717305-2782549b5136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE2MTAxMDIxfDA&ixlib=rb-4.0.3&q=80&w=1080',
    registered: "No",
    placementId: "",
    attendedInterviews: "No",
    interestArea: [],
    receivedOffers: "No",
    offerDocument: null,
  });
  const [placementOfficerData, setPlacementOfficerData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const toast = useToast();

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleInterestChange = (values) => {
    setStudentData({ ...studentData, interestArea: values });
  };

  const handleFileChange = (e) => {
    setStudentData({ ...studentData, offerDocument: e.target.files[0] });
  };

  const handleSubmit = () => {
    if (studentData.registered === "Yes" && !studentData.placementId) {
      toast({
        title: "Placement ID is required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (studentData.interestArea.length === 0) {
      toast({
        title: "Please select at least one area of interest.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (studentData.receivedOffers === "Yes" && !studentData.offerDocument) {
      toast({
        title: "Please upload a supporting document.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setFormSubmitted(true);
  };

  const handleRefresh = () => {
    setStudentData({
      ...studentData,
      registered: "No",
      placementId: "",
      attendedInterviews: "No",
      interestArea: [],
      receivedOffers: "No",
      offerDocument: null,
    });
  };

  const renderStudentForm = () => (
    <VStack spacing={4} align="stretch">
      <Image src={studentData.photo} alt="Student Photo" boxSize="150px" borderRadius="full" />
      <Text>Email: {studentData.email}</Text>
      <Text>Name: {studentData.name}</Text>
      <Text>Student ID: {studentData.studentId}</Text>
      <Text>Stream: {studentData.stream}</Text>
      <FormControl isRequired>
        <FormLabel>Have you registered yourself in the campus placement portal?</FormLabel>
        <RadioGroup name="registered" value={studentData.registered} onChange={handleStudentChange}>
          <Stack direction="row">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Stack>
        </RadioGroup>
        {studentData.registered === "Yes" && <Input placeholder="Placement ID" name="placementId" value={studentData.placementId} onChange={handleStudentChange} />}
      </FormControl>
      <FormControl>
        <FormLabel>Have you attended any interviews?</FormLabel>
        <RadioGroup name="attendedInterviews" value={studentData.attendedInterviews} onChange={handleStudentChange}>
          <Stack direction="row">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Choose your area of interest</FormLabel>
        <CheckboxGroup value={studentData.interestArea} onChange={handleInterestChange}>
          <Stack direction="column">
            <Checkbox value="Data analytics">Data analytics</Checkbox>
            <Checkbox value="Data Annotation">Data Annotation</Checkbox>
            <Checkbox value="User Experience">User Experience</Checkbox>
            <Checkbox value="Cybersecurity">Cybersecurity</Checkbox>
            <Checkbox value="Research">Research</Checkbox>
          </Stack>
        </CheckboxGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Have you received any job offers?</FormLabel>
        <RadioGroup name="receivedOffers" value={studentData.receivedOffers} onChange={handleStudentChange}>
          <Stack direction="row">
            <Radio value="Yes">Yes</Radio>
            <Radio value="No">No</Radio>
          </Stack>
        </RadioGroup>
        {studentData.receivedOffers === "Yes" && <Input type="file" accept=".pdf,image/*" onChange={handleFileChange} />}
      </FormControl>
      <Button colorScheme="blue" onClick={handleSubmit}>
        Submit
      </Button>
      <Button colorScheme="gray" onClick={handleRefresh}>
        Refresh
      </Button>
    </VStack>
  );

  const renderPlacementOfficerDashboard = () => (
    <VStack spacing={4} align="stretch">
      <Text fontSize="2xl">Placement Officer Dashboard</Text>
      {/* Placeholder for graphs */}
      <Text>Percentage of students registered on the career placement portal</Text>
      <Text>Percentage of students who participated in Interviews</Text>
      <Text>Number of students as per the interest area</Text>
      <Text>Percentage of students who received offer letter</Text>
    </VStack>
  );

  const renderFormSubmitted = () => (
    <VStack spacing={4} align="center">
      <Text fontSize="2xl">Congratulations! All the best for a wonderful career.</Text>
      <Button colorScheme="blue" onClick={() => setUserType(null)}>
        Home
      </Button>
    </VStack>
  );

  const renderLogin = () => (
    <VStack spacing={4} align="center">
      <Text fontSize="2xl">Login</Text>
      <Button leftIcon={<FaUserGraduate />} colorScheme="blue" onClick={() => setUserType("student")}>
        Student Login
      </Button>
      <Button leftIcon={<FaUserTie />} colorScheme="green" onClick={() => setUserType("placementOfficer")}>
        Placement Officer Login
      </Button>
    </VStack>
  );

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {userType === "student" && !formSubmitted && renderStudentForm()}
      {userType === "placementOfficer" && renderPlacementOfficerDashboard()}
      {formSubmitted && renderFormSubmitted()}
      {!userType && renderLogin()}
    </Container>
  );
};

export default Index;
