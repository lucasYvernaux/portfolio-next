"use client";

import { NotFoundError } from "@/src/lib/error/codes";

export default function NotFound() {
  throw new NotFoundError();
}
