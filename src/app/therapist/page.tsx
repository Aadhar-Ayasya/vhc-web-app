"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export type Therapist = {
  id: string;
  name: string;
  location: string;
  speciality: string[];
  experience: number;
  qualifications: string[];
  language: string[];
  gender: string;
};

import therapistsData from "./data.json";
import Image from "next/image";
import Link from "next/link";

const PAGE_SIZE = 6;

export default function TherapistList() {
  const therapists: Therapist[] = therapistsData.therapists;

  const [gender, setGender] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [speciality, setSpeciality] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [experience, setExperience] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
  }, [gender, location, speciality, language, experience]);

  const locations = [
    ...new Set(therapists.map((therapist) => therapist.location)),
  ];
  const specialities = [
    ...new Set(therapists.flatMap((therapist) => therapist.speciality)),
  ];
  const languages = [
    ...new Set(therapists.flatMap((therapist) => therapist.language)),
  ];

  const filtered = therapists.filter((therapist) => {
    if (gender && therapist.gender !== gender) return false;
    if (location && therapist.location !== location) return false;
    if (speciality && !therapist.speciality.includes(speciality)) return false;
    if (language && !therapist.language.includes(language)) return false;

    if (experience) {
      if (experience === "0-5" && therapist.experience > 5) return false;
      if (
        experience === "6-10" &&
        (therapist.experience < 6 || therapist.experience > 10)
      )
        return false;
      if (experience === "10+" && therapist.experience <= 10) return false;
    }

    return true;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="flex justify-center w-full mt-3.5">
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <Filter
            label="Gender"
            value={gender}
            onChange={setGender}
            options={["Male", "Female"]}
          />
          <Filter
            label="Location"
            value={location}
            onChange={setLocation}
            options={locations}
          />
          <Filter
            label="Speciality"
            value={speciality}
            onChange={setSpeciality}
            options={specialities}
          />
          <Filter
            label="Language"
            value={language}
            onChange={setLanguage}
            options={languages}
          />
          <Filter
            label="Experience"
            value={experience}
            onChange={setExperience}
            options={["0-5", "6-10", "10+"]}
          />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         */}
        <div className="flex flex-col h-[80vh] overflow-scroll">
          {paginated.map((t) => (
            <Link key={t.id} href={`/therapist/${t.id}`}>
              <Card key={t.id} className="rounded-2xl shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">{t.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {t.speciality.map((s) => (
                      <Badge key={s} variant="secondary">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1550831107-1553da8c8464"
                    alt="Dr. Ayesha Khan - Psychiatrist"
                    className="w-44 h-44 object-cover rounded-xl"
                    width={120}
                    height={120}
                  />
                  <p className="text-sm">Experience: {t.experience} years</p>
                  <p className="text-sm">Languages: {t.language.join(", ")}</p>
                  <p className="text-sm">Gender: {t.gender}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((page) => page - 1)}
          >
            Previous
          </Button>
          <span className="px-4 py-2 text-sm">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => setPage((page) => page + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | null;
  onChange: (v: string | null) => void;
  options: string[];
}) {
  return (
    <Select
      value={value ?? undefined}
      onValueChange={(v) => onChange(v === "all" ? null : v)}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        {options.map((optionData) => (
          <SelectItem key={optionData} value={optionData}>
            {optionData}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
