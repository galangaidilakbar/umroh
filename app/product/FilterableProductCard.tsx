"use client";

import UmrohHeader from "@/components/layout/UmrohHeader";
import ProductCardContainer from "@/components/product/ProductCardContainer";
import { useState } from "react";

export default function FilterableProductCard({
  products,
}: {
  products: App.Data.ProductData[];
}) {
  const [filter, setFilter] = useState<{ by: string | null; value: string }>({
    by: null,
    value: "",
  });

  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 h-[50vh] w-full rounded-b-full bg-[url(/bg_pattern.svg)] bg-cover bg-center bg-no-repeat" />

      {/* Content */}
      <div className="relative z-10">
        <UmrohHeader onFilterChange={setFilter} />

        <ProductCardContainer products={products} filter={filter} />
      </div>
    </div>
  );
}
