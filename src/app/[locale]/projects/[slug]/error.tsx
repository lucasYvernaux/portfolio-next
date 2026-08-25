"use client";

import { ServerError } from "@/lib/error/codes";

export default function ErrorProjectPage() {
  throw new ServerError();
}
