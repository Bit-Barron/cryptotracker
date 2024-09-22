import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const MyPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const visiblePageNumbers = pageNumbers.filter(
    (num) =>
      num === 1 ||
      num === totalPages ||
      (num >= currentPage - 1 && num <= currentPage + 1)
  );

  return (
    <nav className="flex items-center justify-center space-x-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronLeft size={20} />
      </button>

      {visiblePageNumbers.map((number, index) => {
        if (index > 0 && visiblePageNumbers[index - 1] !== number - 1) {
          return (
            <React.Fragment key={`ellipsis-${number}`}>
              <span className="px-2">...</span>
              <button
                onClick={() => onPageChange(number)}
                className={`w-8 h-8 rounded-full ${
                  currentPage === number
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {number}
              </button>
            </React.Fragment>
          );
        }
        return (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`w-8 h-8 rounded-full ${
              currentPage === number
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {number}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50"
      >
        <ChevronRight size={10} />
      </button>
    </nav>
  );
};
