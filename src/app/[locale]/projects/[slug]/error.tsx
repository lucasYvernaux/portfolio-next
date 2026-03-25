"use client";

import { ServerError } from "@/src/lib/error/codes";

export default function ErrorProjectPage() {
  throw new ServerError();
}
