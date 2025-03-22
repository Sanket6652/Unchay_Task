"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

interface DisabilityData {
  category: string;
  participants: number;
  ballotsCompleted: number;
  ballotsIncomplete: number;
  accuracy: number;
  timeToComplete: number;
}

export default function Home() {
  const [data, setData] = useState<DisabilityData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seedResponse = await fetch("http://localhost:5000/insert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!seedResponse.ok) {
          throw new Error("Failed to seed data");
        }

        console.log("Data seeded successfully");

        // Then fetch the data
        const dataResponse = await fetch("http://localhost:5000/data");

        if (!dataResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await dataResponse.json();
        setData(result);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">Disability Data</h1>

      <div className="mx-auto">
        <Table className="w-auto border">
          <TableCaption>Disability data statistics</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="whitespace-nowrap">Category</TableHead>
              <TableHead className="whitespace-nowrap">Participants</TableHead>
              <TableHead className="whitespace-nowrap">
                Ballots Completed
              </TableHead>
              <TableHead className="whitespace-nowrap">
                Ballots Incomplete
              </TableHead>
              <TableHead className="whitespace-nowrap">Accuracy</TableHead>
              <TableHead className="whitespace-nowrap">
                Time to Complete
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="whitespace-nowrap">
                  {item.category}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item.participants}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item.ballotsCompleted}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item.ballotsIncomplete}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item.accuracy}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {item.timeToComplete}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
