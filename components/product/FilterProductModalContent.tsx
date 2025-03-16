import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Button from "../ui/Button";

// Constants moved outside component to avoid re-creation on each render
const FILTER_OPTIONS = [
  { by: "MONTH", label: "Mau Berangkat Bulan Apa" },
  { by: "TYPE", label: "Pilih Jenis Paketnya" },
  { by: "AIRPORT", label: "Pilih Bandara" },
  { by: null, label: "Cek Promo" },
];

const MONTHS = [
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

const PACKAGE_TYPES = ["PREMIUM", "REGULAR"];

const AIRPORTS = [
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
  const [selectedValues, setSelectedValues] = useState<Record<string, string>>(
    {},
  );

  // Consolidated filter toggle logic
  const handleFilterToggle = (filterBy: string | null) => {
    if (filterBy === null) {
      handleCekPromo();
    } else {
      setActiveFilter(activeFilter === filterBy ? null : filterBy);
    }
  };

  // Select change handler
  const handleSelectChange = (by: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [by]: value }));
    onFilterChange({ by, value });
  };

  // Promo handler
  const handleCekPromo = () => {
    onFilterChange({ by: null, value: "PROMO" });
    closeModal();
  };

  // Render select dropdown based on filter type
  const renderFilterContent = (filterBy: string | null) => {
    if (!filterBy) return null;

    let options: string[] = [];
    switch (filterBy) {
      case "MONTH":
        options = MONTHS;
        break;
      case "TYPE":
        options = PACKAGE_TYPES;
        break;
      case "AIRPORT":
        options = AIRPORTS;
        break;
      default:
        return null;
    }

    return (
      <select
        className="mt-2 w-full rounded border p-2"
        value={selectedValues[filterBy] || ""}
        onChange={(e) => handleSelectChange(filterBy, e.target.value)}
      >
        <option value="" disabled>
          Select {filterBy.toLowerCase()}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };

  return (
    <div className="space-y-4">
      {FILTER_OPTIONS.map((option) => (
        <div key={option.label} className="rounded-lg border transition-all">
          <div
            className="flex cursor-pointer items-center justify-between p-4"
            onClick={() => handleFilterToggle(option.by)}
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
            <div className="border-t p-4">{renderFilterContent(option.by)}</div>
          )}
        </div>
      ))}
    </div>
  );
}
