"use client";

import { NotFoundError } from "@/lib/error/codes";

export default function NotFound() {
  throw new NotFoundError();
}
