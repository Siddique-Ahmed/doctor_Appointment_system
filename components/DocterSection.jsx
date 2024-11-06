import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { doctors, doctorSpecialties } from "@/lib/doctorData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import Link from "next/link";

const DocterSection = ({ isHome }) => {
  const filterDoctorList = isHome ? doctors.slice(0, 6) : doctors;

  return (
    <div
      className="container my-20
     mx-auto"
    >
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Doctor You Need</h1>
        {isHome ? (
          <Link href={"/doctors"}>
            <Button variant="destructive">See All </Button>
          </Link>
        ) : (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Doctors" />
            </SelectTrigger>
            <SelectContent>
              {doctorSpecialties.map((data) => {
                return (
                  <SelectItem key={data} value={data}>
                    {data}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="grid mt-5 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filterDoctorList.map((doctor) => {
          return (
            <Card key={doctor.id}>
              <div className="flex gap-3 items-center px-4">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYXklMjBiZyUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    width={50}
                    height={50}
                  />
                  <AvatarFallback>SDK</AvatarFallback>
                </Avatar>
                <CardHeader>
                  <CardTitle>{doctor.name}</CardTitle>
                  <CardDescription>{doctor.category}</CardDescription>
                </CardHeader>
              </div>
              {!isHome && (
                <CardContent>
                  <div className="flex justify-between my-2">
                    <h1 className="font-bold">Gender</h1>
                    <h1 className="font-medium">{doctor.gender}</h1>
                  </div>
                  <div className="flex justify-between my-2">
                    <h1 className="font-bold">Hospital</h1>
                    <h1 className="font-medium">{doctor.hospital}</h1>
                  </div>
                  <div className="flex justify-between my-2">
                    <h1 className="font-bold">Appointment Time</h1>
                    <h1 className="font-medium">{doctor.appointmentTime}</h1>
                  </div>
                </CardContent>
              )}
              <CardFooter>
                {isHome ? (
                  <Link href={`/doctors/${doctor.id}`}>
                    <Button variant="destructive">
                      See Details
                    </Button>
                  </Link>
                ) : (
                  <Link className="w-full" href={`/doctors/${doctor.id}`}>
                    <Button className="w-full" variant="destructive">
                      Book Appointment
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default DocterSection;
