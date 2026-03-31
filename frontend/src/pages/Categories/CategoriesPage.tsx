import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { CategoriesTable } from "@/features/categories/components/CategoriesTable";
import { CategoryUpsertDialog } from "@/features/categories/components/CategoryUpsertDialog";
import { useCategories } from "@/features/categories/hooks";

const PAGE_LIMIT = 10;

export function CategoriesPage() {
  const [sp, setSp] = useSearchParams();
  const page = Math.max(1, Number(sp.get("page") ?? "1") || 1);
  const limit = PAGE_LIMIT;

  const categoriesQuery = useCategories({ page, limit });
  const categories = useMemo(() => categoriesQuery.data?.categories ?? [], [categoriesQuery.data?.categories]);

  const [createOpen, setCreateOpen] = useState(false);

  const canPrev = page > 1;
  const canNext = categories.length === limit;

  function setPage(nextPage: number) {
    setSp((prev) => {
      const p = new URLSearchParams(prev);
      p.set("page", String(nextPage));
      return p;
    });
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-heading text-2xl font-semibold">Categories</h1>
          <p className="text-sm text-muted-foreground">Income and expense buckets</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" disabled={!canPrev} onClick={() => setPage(page - 1)}>
            Prev
          </Button>
          <div className="min-w-14 text-center text-sm text-muted-foreground">Page {page}</div>
          <Button variant="outline" disabled={!canNext} onClick={() => setPage(page + 1)}>
            Next
          </Button>
        </div>
      </div>

      <CategoriesTable
        categories={categories}
        isLoading={categoriesQuery.isLoading}
        limit={limit}
        onAddNew={() => setCreateOpen(true)}
      />

      <CategoryUpsertDialog mode="create" open={createOpen} onOpenChange={setCreateOpen} />
    </div>
  );
}

