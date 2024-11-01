"use client";

import { useSelect, useStudents } from "@app/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsList,
  TabsTrigger,
  Title,
} from "@app/components";
import { ALUMNI_YEARS, CURRENT_YEARS, STUDENT_VALUES } from "@app/constants";
import { StudentDialog } from "@app/components/Dialogs/StudentDialog";

export default function Students() {
  const { currentValue: currentView, onChange } = useSelect("current");
  const { currentValue: currentYear, onChange: onYearChange } =
    useSelect("2026");
  const { students } = useStudents(currentView, currentYear);

  const isCurrent = currentView === "current";
  const selectList = isCurrent ? CURRENT_YEARS : ALUMNI_YEARS;

  const onViewChange = (value: string) => {
    onChange(value);

    if (value === "current") {
      onYearChange(CURRENT_YEARS[0]);
    } else if (value === "alumni") {
      onYearChange(ALUMNI_YEARS[0]);
    }
  };

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex my-8 justify-center">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-11/12">
          <Title className="text-secondary">Our students</Title>
          <div className="mt-2 md:mt-0">
            <Tabs value={currentView} onValueChange={onViewChange}>
              <TabsList>
                {STUDENT_VALUES.map(({ value, label }) => (
                  <TabsTrigger key={value} value={value.toString()}>
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            <div className="mt-2">
              <Select value={currentYear} onValueChange={onYearChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose year" />
                </SelectTrigger>
                <SelectContent>
                  {selectList.map((year) => (
                    <SelectItem value={year} key={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
      <section className="flex my-2 md:my-8 justify-center">
        <div className="w-11/12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {students.map((student) => (
            <StudentDialog student={student} key={student.name} />
          ))}
        </div>
      </section>
    </main>
  );
}
