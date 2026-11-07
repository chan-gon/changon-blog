"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ value, label }: { value: string; label: string }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(value);
        } catch {
            return;
        }
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    const buttonLabel = copied ? "Copied" : label;

    return (
        <button
            type="button"
            onClick={handleCopy}
            aria-label={buttonLabel}
            title={buttonLabel}
            className="ml-2 inline-flex cursor-pointer align-middle rounded p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
        >
            {copied ? <Check size={16} className="text-green-600" /> : <Copy size={16} />}
        </button>
    );
}
