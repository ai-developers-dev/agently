"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type LeadSource = "start-free" | "book-a-demo" | "contact";

type Status = "idle" | "submitting" | "success" | "error";

const field =
  "h-12 w-full rounded-lg border border-[#e1e6ee] bg-white px-3.5 text-[15px] text-ink placeholder:text-[#9aa6b8] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20";
const label = "mb-1.5 block text-[13px] font-semibold text-ink";

export function LeadForm({
  source,
  submitLabel = "Submit",
  withMessage = false,
  className,
}: {
  source: LeadSource;
  submitLabel?: string;
  withMessage?: boolean;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      const body = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !body.ok) {
        throw new Error(body.message ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-4 rounded-2xl border border-[#e6ebf1] bg-white p-10 text-center",
          className,
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-[#e9f9ef] text-[#16a34a]">
          <Check className="size-7" />
        </div>
        <h3 className="text-xl font-bold text-ink">You&apos;re all set.</h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-steel">
          Thanks — we&apos;ve got your details and someone from the Agently team
          will be in touch shortly.
        </p>
        <Button variant="outlineBrand" onClick={() => setStatus("idle")}>
          Submit another response
        </Button>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-2xl border border-[#e6ebf1] bg-white p-6 shadow-[0_1px_2px_rgba(10,37,64,0.06),0_12px_36px_rgba(10,37,64,0.06)] sm:p-8",
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="firstName">
            First name
          </label>
          <input id="firstName" name="firstName" required className={field} placeholder="Dana" />
        </div>
        <div>
          <label className={label} htmlFor="lastName">
            Last name
          </label>
          <input id="lastName" name="lastName" required className={field} placeholder="Rivera" />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={field}
            placeholder="dana@youragency.com"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" className={field} placeholder="(555) 123-4567" />
        </div>
        <div className="sm:col-span-2">
          <label className={label} htmlFor="agency">
            Agency name
          </label>
          <input id="agency" name="agency" className={field} placeholder="Rivera Insurance Group" />
        </div>
        {withMessage && (
          <div className="sm:col-span-2">
            <label className={label} htmlFor="message">
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className={cn(field, "h-auto resize-y py-3")}
              placeholder="Tell us a little about your book of business…"
            />
          </div>
        )}
      </div>

      {error && (
        <p className="mt-4 rounded-lg bg-[#fff1f2] px-3.5 py-2.5 text-sm text-[#be123c]">
          {error}
        </p>
      )}

      <Button type="submit" size="block" className="mt-6" disabled={busy}>
        {busy ? (
          <>
            <Loader2 className="size-[18px] animate-spin" /> Submitting…
          </>
        ) : (
          <>
            {submitLabel} <ArrowRight className="size-[18px]" />
          </>
        )}
      </Button>

      <p className="mt-3 text-center text-[12.5px] text-[#8a94a6]">
        By submitting you agree to be contacted about Agently. No spam.
      </p>
    </form>
  );
}
