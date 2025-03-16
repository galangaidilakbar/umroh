import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../ui/Button";

const filterOptions = [
  { by: "MONTH", label: "Mau Berangkat Bulan Apa" },
  { by: "TYPE", label: "Pilih Jenis Paketnya" },
  { by: "AIRPORT", label: "Pilih Bandara" },
  { by: null, label: "Cek Promo" },
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const packageTypes = ["PREMIUM", "REGULAR"];

const airports = [
  "CGK (Jakarta)",
  "DPS (Bali)",
  "SUB (Surabaya)",
  "UPG (Makassar)",
];

interface FilterProductModalContentProps {
  onFilterChange: (filter: { by: string | null; value: string }) => void;
  closeModal: () => void;
}

export default function FilterProductModalContent({
  onFilterChange,
  closeModal,
}: FilterProductModalContentProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<{
    [key: string]: string;
  }>({});

  const handleFilterToggle = (filterBy: string | null) => {
    setActiveFilter(activeFilter === filterBy ? null : filterBy);
  };

  const handleSelectChange = (by: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [by]: value }));
    onFilterChange({ by, value });
  };

  const handleCekPromo = () => {
    onFilterChange({ by: null, value: "PROMO" });
    closeModal();
  };

  const renderContent = (filterBy: string | null) => {
    switch (filterBy) {
      case "MONTH":
        return (
          <select
            className="mt-2 w-full rounded border p-2"
            value={selectedValues.MONTH || ""}
            onChange={(e) => handleSelectChange("MONTH", e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        );
      case "TYPE":
        return (
          <select
            className="mt-2 w-full rounded border p-2"
            value={selectedValues.TYPE || ""}
            onChange={(e) => handleSelectChange("TYPE", e.target.value)}
          >
            {packageTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        );
      case "AIRPORT":
        return (
          <select
            className="mt-2 w-full rounded border p-2"
            value={selectedValues.AIRPORT || ""}
            onChange={(e) => handleSelectChange("AIRPORT", e.target.value)}
          >
            {airports.map((airport) => (
              <option key={airport} value={airport}>
                {airport}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {filterOptions.map((option) => (
        <div key={option.by} className="rounded-lg border transition-all">
          <div
            className="flex cursor-pointer items-center justify-between p-4"
            onClick={() => {
              if (option.by === null) handleCekPromo();
              else handleFilterToggle(option.by);
            }}
          >
            <span className="font-medium">{option.label}</span>
            {option.by !== null && (
              <Button>
                <MdOutlineKeyboardArrowDown
                  className={`text-xl transition-transform ${
                    activeFilter === option.by ? "rotate-180" : ""
                  }`}
                />
              </Button>
            )}
          </div>

          {option.by !== null && activeFilter === option.by && (
            <div className="border-t p-4">{renderContent(option.by)}</div>
          )}
        </div>
      ))}
    </div>
  );
}
