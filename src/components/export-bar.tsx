import { FileDown, Printer } from "lucide-react";
import { downloadExcel, printPdf } from "@/lib/export-sheet";

type Props = {
  title: string;
  filename: string;
  headers: string[];
  rows: (string | number)[][];
  orientation?: "portrait" | "landscape";
};

export function ExportBar({ title, filename, headers, rows, orientation = "landscape" }: Props) {
  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <button
        type="button"
        onClick={() => printPdf({ title, headers, rows, orientation })}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase"
      >
        <Printer className="size-3.5" />
        PDF
      </button>
      <button
        type="button"
        onClick={() => downloadExcel({ filename, title, headers, rows, orientation })}
        className="inline-flex min-h-11 items-center gap-2 rounded-full bg-kaki px-4 text-[11px] font-semibold tracking-[0.12em] text-rice uppercase"
      >
        <FileDown className="size-3.5" />
        Excel
      </button>
    </div>
  );
}
