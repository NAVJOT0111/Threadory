import { useId, useState, type FormEvent } from 'react';
import { Check, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import { useSiteContent } from '@/hooks/useContent';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = { kind: 'idle' } | { kind: 'error'; message: string } | { kind: 'success' };

/** Stub: validates the email format on submit and makes no network call. */
export function NewsletterForm() {
  const { newsletter } = useSiteContent();
  const inputId = useId();
  const messageId = useId();
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(value.trim())) {
      setStatus({ kind: 'error', message: 'Enter an email address like name@example.com.' });
      return;
    }
    setStatus({ kind: 'success' });
    setValue('');
  };

  return (
    <form onSubmit={submit} noValidate className="max-w-120">
      <label htmlFor={inputId}>
        <Label className="text-petal">Email address</Label>
      </label>
      <div className="mt-2 flex">
        <input
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={newsletter.placeholder}
          aria-invalid={status.kind === 'error' || undefined}
          aria-describedby={status.kind === 'idle' ? undefined : messageId}
          className="h-13 min-w-0 flex-1 border-control border-milk bg-milk px-4 font-sans text-body text-ink placeholder:text-ink-muted"
        />
        <Button type="submit" variant="inverse" size="md" className="min-w-0 shrink-0 px-5 tab:min-w-40 tab:px-7">
          {newsletter.cta}
        </Button>
      </div>
      <div id={messageId} aria-live="polite" className="mt-3 min-h-6">
        {status.kind === 'error' && (
          <p className="inline-flex items-center gap-2 bg-milk px-3 py-2 font-sans text-small text-tomato-deep">
            <TriangleAlert aria-hidden="true" strokeWidth={1.5} strokeLinecap="butt" className="size-5 shrink-0" />
            {status.message}
          </p>
        )}
        {status.kind === 'success' && (
          <p className="inline-flex items-center gap-2 bg-milk px-3 py-2 font-sans text-small text-ink">
            <Check aria-hidden="true" strokeWidth={1.5} strokeLinecap="butt" className="size-5 shrink-0" />
            {newsletter.success}
          </p>
        )}
      </div>
    </form>
  );
}
