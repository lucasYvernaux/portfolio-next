"use client";

import { Search } from "lucide-react";
import { ErrorPageCustom } from "@/src/components/error/error-page-custom";
import { NotFoundError } from "@/src/lib/error/codes";

export default function NotFound() {
  throw new NotFoundError();
}
