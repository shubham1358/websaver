"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import { Calendar, DateValue } from "@heroui/calendar";
import { parseDate } from "@internationalized/date";
import { useRouter } from "next/navigation"; // Import useRouter
import { Spinner } from "@heroui/react";

import { useGetMonthListQuery } from "@/lib/features/search/monthApiSlice";
import { useGetPageQuery } from "@/lib/features/search/searchApiSlice";

const PageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter(); // Initialize useRouter

  const url = searchParams.get("page_url");
  const date = searchParams.get("date");

  const [selectedDate, setSelectedDate] = useState<DateValue>(
    parseDate(date ?? new Date().toISOString().split("T")[0]),
  );
  const { data: monthData, isLoading: isMonthLoading } = useGetMonthListQuery({
    url: url || "",
    date: selectedDate.toString(),
  });

  const { data: pageData, isLoading: isPageLoading } = useGetPageQuery({
    url: url || "",
    date: selectedDate.toString(),
  });
  const dateSet = useMemo(() => {
    if (monthData?.dates) {
      return new Set(monthData.dates.map((date) => date.split("T")[0]));
    }

    return new Set();
  }, [monthData]);

  const isDateUnavailable = (date: DateValue) => {
    return !dateSet.has(date.toString().split("T")[0]);
  };
  const handleDateChange = (newDate: DateValue) => {
    setSelectedDate(newDate);

    // Update query parameters
    const newDateString = newDate.toString();
    const params = new URLSearchParams(searchParams.toString());

    params.set("date", newDateString);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      {isMonthLoading ? (
        <p>Loading calendar...</p>
      ) : (
        <Calendar
          showMonthAndYearPickers
          aria-label="Date (Show Month and Year Picker)"
          isDateUnavailable={isDateUnavailable}
          onChange={handleDateChange}
          value={selectedDate}
        />
      )}
      <div style={{ marginTop: "20px" }}>
        {isPageLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : pageData?.error ? (
          <p>Error: {pageData.error}</p>
        ) : (
          <div
            dangerouslySetInnerHTML={{
              __html: pageData?.html || "<p>No content available</p>",
            }}
          />
        )}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner />
        </div>
      }
    >
      <PageContent />
    </Suspense>
  );
};

export default Page;
